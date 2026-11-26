// Número de WhatsApp de LIMEN y helpers para armar los enlaces con mensaje precargado.
export const WHATSAPP_NUMBER = '595994754526';

export const DEFAULT_WHATSAPP_MESSAGE = 'Hola LIMEN, me interesa agendar un diagnóstico estratégico para mi marca.';

export const whatsappLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const serviceWhatsappLink = (serviceTitle) =>
  whatsappLink(`Hola LIMEN, me interesa el servicio de ${serviceTitle}.`);

// Evento para GTM / GA4: permite medir qué página o servicio genera más consultas.
export const trackWhatsappClick = (source) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'click_whatsapp', whatsapp_source: source });
};
