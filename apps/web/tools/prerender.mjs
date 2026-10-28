// Prerenderiza las páginas del sitio después de `vite build`.
// Genera HTML completo (con <h1>, textos, canonical, etc.) para que los buscadores
// que no ejecutan JavaScript (ej. Bing) vean el contenido.
// Uso: node tools/prerender.mjs <carpeta-dist>   (requiere playwright instalado)
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const dist = path.resolve(process.argv[2] || 'dist');
const routes = [
  ['/', 'index.html'],
  ['/contact', 'contact.html'],
  ['/privacy-policy', 'privacy-policy.html'],
  ['/terms-of-service', 'terms-of-service.html'],
  ['/pagina-inexistente-404', '404.html'],
];

const shell = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.woff2': 'font/woff2',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.svg': 'image/svg+xml', '.json': 'application/json' };

// Servidor estático mínimo: archivos de dist, y el index.html original para cualquier ruta
const server = http.createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(dist, url);
  try {
    if (url !== '/' && file.startsWith(dist) && (await fs.stat(file)).isFile()) {
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
      return res.end(await fs.readFile(file));
    }
  } catch {}
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(shell);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
const out = [];
try {
  for (const [route, fileName] of routes) {
    const page = await browser.newPage();
    // No hace falta descargar imágenes externas para generar el HTML
    await page.route('**/*', r => (['image', 'media'].includes(r.request().resourceType()) ? r.abort() : r.continue()));
    // Guarda el HTML del primer render de React (antes de que arranquen las animaciones),
    // así el HTML estático coincide con lo que React dibuja al cargar y no hay parpadeo.
    await page.addInitScript(() => {
      new MutationObserver((_, obs) => {
        const root = document.getElementById('root');
        if (root && root.children.length && !window.__firstRender) {
          window.__firstRender = root.innerHTML;
          obs.disconnect();
        }
      }).observe(document, { childList: true, subtree: true });
    });
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => window.__firstRender && document.querySelector('[data-react-helmet]'));
    const html = await page.evaluate(() => {
      document.getElementById('root').innerHTML = window.__firstRender;
      // Evita meta description duplicada: queda la específica de cada página
      if (document.querySelector('meta[name="description"][data-react-helmet]')) {
        document.querySelectorAll('meta[name="description"]:not([data-react-helmet])').forEach(m => m.remove());
      }
      return '<!doctype html>\n' + document.documentElement.outerHTML;
    });
    if (!/<h1[\s>]/.test(html)) throw new Error(`La ruta ${route} quedó sin <h1>`);
    out.push([fileName, html]);
    console.log(`✓ ${route} -> ${fileName}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
for (const [fileName, html] of out) await fs.writeFile(path.join(dist, fileName), html);
