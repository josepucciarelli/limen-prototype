// Fondo generativo "datamosh" de LIMEN: barras verticales pixeladas que chorrean,
// grano, líneas de barrido y glitches fugaces en ráfagas irregulares.
// startGlitchBackground(canvas, opciones) -> devuelve una función para detenerlo.
// Opciones: accent (glitches en lima), intensity (brillo máx. del gris, 0-1),
// focus {x, y} (zona más iluminada, 0-1), spread (ancho de la zona con barras, 0-1),
// clearCenter (0-1: cuánto se despeja el centro para que se lea el texto), clearWidth (ancho de esa zona).
export function startGlitchBackground(canvas, opts = {}) {
  const accent = !!opts.accent;
  const INTENSITY = opts.intensity ?? 0.4;
  const FOCUS = { x: 0.56, y: 0.16, ...(opts.focus || {}) };
  const SPREAD = opts.spread ?? 0.26;
  const CLEAR = opts.clearCenter ?? 0;
  const CLEAR_W = opts.clearWidth ?? 0.2;
  const BLOCK = opts.block || 8;          // tamaño del "pixel" en px CSS
  const FPS = 30;
  const BG = [12, 13, 13];                // #0C0D0D
  const LIME = [219, 254, 1];             // #DBFE01
  const ctx = canvas.getContext('2d');
  const low = document.createElement('canvas');   // buffer a baja resolución (1 px = 1 bloque)
  const lctx = low.getContext('2d');
  const grain = document.createElement('canvas'); // textura de grano
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Ruido determinista
  const hash = (x, y) => { let h = (x * 374761393 + y * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
  const smooth = (x, seed) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return hash(i, seed) * (1 - u) + hash(i + 1, seed) * u; };

  let W = 0, H = 0, cols = 0, rows = 0, img, columns = [], dpr = 1;

  function makeGrain() {
    grain.width = grain.height = 256;
    const g = grain.getContext('2d'), d = g.createImageData(256, 256);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 16; }
    g.putImageData(d, 0, 0);
  }

  function setup() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    cols = Math.ceil(W / BLOCK); rows = Math.ceil(H / BLOCK);
    low.width = cols; low.height = rows; img = lctx.createImageData(cols, rows);
    // Cada columna: intensidad (concentrada en "torres" alrededor del centro), inicio, largo y velocidad
    // Agrupa columnas en barras de distinto ancho (1 a 6 bloques) que comparten parámetros
    columns = [];
    let c = 0, bar = 0;
    while (c < cols) {
      const w = 1 + Math.floor(Math.pow(hash(bar, 1), 1.5) * 6);
      const x = (c + w / 2) / cols;
      let envelope;
      if (CLEAR > 0) {
        // barras hacia los costados: centro despejado y bordes que se apagan suave
        const hole = 1 - CLEAR * Math.exp(-Math.pow((x - 0.5) / CLEAR_W, 2));
        const edges = Math.min(1, x / 0.06, (1 - x) / 0.06);
        envelope = hole * edges;
      } else {
        envelope = Math.exp(-Math.pow((x - 0.5) / SPREAD, 2));                // más denso al centro
      }
      const tower = smooth(bar / 4, 11);                                    // torres más altas/brillantes
      const bright = hash(bar, 2);
      const amp = hash(bar, 3) < 0.18 ? 0 : envelope * (0.25 + 0.75 * Math.pow(tower, 1.3)) * (bright > 0.8 ? 1.35 : 0.55 + bright * 0.5);
      const params = {
        amp,
        top: rows * (0.04 + 0.22 * hash(bar, 5)),
        len: rows * (0.2 + 0.6 * Math.pow(hash(bar, 7), 0.7)),
        speed: 0.12 + hash(bar, 9) * 0.45,
        phase: hash(bar, 13) * 100,
        grainScale: 2 + Math.floor(hash(bar, 17) * 7),
        id: bar,
      };
      for (let k = 0; k < w && c < cols; k++, c++) columns.push(params);
      bar++;
    }
  }

  // ---- Glitches: ráfagas irregulares de eventos muy cortos ----
  const rnd = (a, b) => a + Math.random() * (b - a);
  const ri = (a, b) => Math.floor(rnd(a, b + 1));
  let events = [];                 // eventos activos
  let nextBurst = rnd(0.6, 2.5);   // cuándo empieza la próxima ráfaga
  let pending = [];                // eventos programados dentro de la ráfaga
  let overlay = new Float32Array(0), overlayGray = new Float32Array(0);

  function makeEvent(s) {
    const type = ['slice', 'slice', 'blocks', 'fragments', 'tear'][ri(0, 4)];
    const dur = rnd(0.035, 0.1);   // 1 a 3 cuadros: un parpadeo
    const e = { type, until: s + dur };
    if (type === 'slice') {        // 1-3 franjas finas, ancho parcial, desplazamientos distintos
      e.bands = Array.from({ length: ri(1, 3) }, () => {
        const y0 = ri(0, rows - 2), x0 = ri(0, Math.floor(cols * 0.6));
        return { y0, y1: y0 + ri(1, Math.max(2, Math.floor(rows * 0.06))), x0, x1: x0 + ri(Math.floor(cols * 0.15), Math.floor(cols * 0.6)), shift: ri(-Math.floor(cols * 0.08), Math.floor(cols * 0.08)) || 3 };
      });
    } else if (type === 'blocks') { // rectángulo con bloques corridos
      const w = ri(6, Math.floor(cols * 0.2)), h = ri(3, Math.floor(rows * 0.15));
      e.rect = { x0: ri(0, cols - w), y0: ri(0, Math.floor(rows * 0.7)), w, h, dx: ri(-12, 12), dy: ri(-4, 4) };
    }
    // fragmentos de color: grupitos irregulares alrededor de un punto
    const n = type === 'fragments' ? ri(4, 12) : type === 'tear' ? 0 : ri(0, 4);
    const side = Math.random() < 0.5 ? rnd(0.05, 0.32) : rnd(0.68, 0.95);
    const cx = (CLEAR > 0 ? side : rnd(0.15, 0.85)) * cols, cy = rnd(0.05, 0.75) * rows;
    e.frags = Array.from({ length: n }, () => ({
      x: Math.round(cx + rnd(-1, 1) * cols * 0.12), y: Math.round(cy + rnd(-1, 1) * rows * 0.1),
      w: ri(1, 4), h: ri(1, 2), a: rnd(0.35, 0.9),
    }));
    if (type === 'tear') {          // desgarro vertical corto
      const x = Math.round(cx), y = Math.round(cy), len = ri(3, Math.floor(rows * 0.12));
      e.frags.push({ x, y, w: 1, h: len, a: rnd(0.4, 0.8) });
      if (Math.random() < 0.5) e.frags.push({ x: x + ri(2, 6), y: y + ri(-3, 3), w: 1, h: Math.ceil(len * rnd(0.3, 0.7)), a: rnd(0.3, 0.6) });
    }
    return e;
  }

  function updateGlitches(s) {
    if (s >= nextBurst) {                       // nueva ráfaga: 1 a 4 eventos muy seguidos
      let t = s;
      for (let k = ri(1, 4); k > 0; k--) { pending.push(t); t += rnd(0.03, 0.16); }
      nextBurst = t + (Math.random() < 0.25 ? rnd(0.2, 0.6) : rnd(0.9, 5)); // a veces repite enseguida
    }
    pending = pending.filter(t0 => (t0 <= s ? (events.push(makeEvent(s)), false) : true));
    events = events.filter(e => e.until > s);
    if (overlay.length !== cols * rows) { overlay = new Float32Array(cols * rows); overlayGray = new Float32Array(cols * rows); }
    overlay.fill(0); overlayGray.fill(0);
    for (const e of events) for (const f of e.frags) {
      for (let y = f.y; y < f.y + f.h; y++) for (let x = f.x; x < f.x + f.w; x++) {
        if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
        const i = y * cols + x;
        if (accent) overlay[i] = Math.max(overlay[i], f.a); else overlayGray[i] = Math.max(overlayGray[i], f.a);
      }
    }
  }

  function frame(t) {
    const s = t / 1000, d = img.data;
    updateGlitches(s);
    const slices = [], blockEvents = [];
    for (const e of events) { if (e.type === 'slice') slices.push(...e.bands); if (e.type === 'blocks') blockEvents.push(e.rect); }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let shift = 0, rr = r;
        for (const b of slices) if (r >= b.y0 && r < b.y1 && c >= b.x0 && c < b.x1) shift = b.shift;
        for (const q of blockEvents) if (c >= q.x0 && c < q.x0 + q.w && r >= q.y0 && r < q.y0 + q.h) { shift = q.dx; rr = Math.min(rows - 1, Math.max(0, r + q.dy)); }
        const sc = (c + shift + cols) % cols, col = columns[sc];
        // largo que "respira" y chorrea
        const len = col.len * (0.75 + 0.35 * smooth(s * col.speed + col.phase, 21));
        const top = col.top + 4 * (smooth(s * 0.2 + col.phase, 23) - 0.5);
        let v = 0;
        if (rr >= top && rr < top + len) {
          const p = (rr - top) / len;
          v = col.amp * Math.pow(1 - p, 1.4);
          // textura interna tipo "pixel sorting": segmentos verticales con brillo distinto
          v *= 0.5 + 0.5 * hash(col.id, Math.floor((rr + s * 6 * col.speed) / col.grainScale));
          // zona más iluminada arriba al centro (como el original)
          const hx = (sc / cols - FOCUS.x) / 0.12, hy = (rr / rows - FOCUS.y) / 0.12;
          v *= 1 + 0.9 * Math.exp(-(hx * hx + hy * hy));
          // goteos: huecos que bajan
          if (hash(col.id, Math.floor(rr / 3) + Math.floor(s * 2)) < 0.1 * p) v *= 0.2;
          // parpadeo leve
          v *= 0.85 + 0.15 * smooth(s * 3 + sc, 29);
        }
        // polvo / puntos sueltos
        if (hash(c * 7 + Math.floor(s * 8), r * 13) > 0.9993) v = Math.max(v, 0.25);
        v = Math.min(1, v) * INTENSITY * (W < 768 ? 0.6 : 1); // más tenue en celulares, donde el texto ocupa todo el ancho
        let R = BG[0] + v * 255, G = BG[1] + v * 255, B = BG[2] + v * 255;
        const oi = r * cols + c, la = overlay[oi], ga = overlayGray[oi];
        if (la) { R = R * (1 - la) + LIME[0] * la; G = G * (1 - la) + LIME[1] * la; B = B * (1 - la) + LIME[2] * la; }
        if (ga) { R = R * (1 - ga) + 200 * ga; G = G * (1 - ga) + 200 * ga; B = B * (1 - ga) + 200 * ga; }
        const i = (r * cols + c) * 4;
        d[i] = R; d[i + 1] = G; d[i + 2] = B; d[i + 3] = 255;
      }
    }
    lctx.putImageData(img, 0, 0);
    ctx.imageSmoothingEnabled = false;   // bloques nítidos
    ctx.drawImage(low, 0, 0, cols * BLOCK * dpr, rows * BLOCK * dpr);
    // grano en movimiento
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.translate(-Math.random() * 256, -Math.random() * 256);
    ctx.fillStyle = ctx.createPattern(grain, 'repeat');
    ctx.fillRect(0, 0, canvas.width + 256, canvas.height + 256);
    ctx.restore();
    // líneas de barrido muy sutiles
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    for (let y = 0; y < canvas.height; y += 3 * dpr) ctx.fillRect(0, y, canvas.width, dpr);
  }

  makeGrain(); setup();
  let raf = 0, last = 0, visible = true, running = true;
  const loop = (t) => {
    if (!running) return;
    raf = requestAnimationFrame(loop);
    if (!visible || t - last < 1000 / FPS) return;
    last = t; frame(t);
  };
  if (reduced) frame(4000); else raf = requestAnimationFrame(loop);

  const ro = new ResizeObserver(() => { setup(); frame(performance.now()); });
  ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
  io.observe(canvas);
  const onVis = () => { visible = !document.hidden; };
  document.addEventListener('visibilitychange', onVis);

  return () => { running = false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
}
