import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink, trackWhatsappClick } from '@/lib/whatsapp';

// Botón flotante de WhatsApp, visible en todas las páginas.
const WhatsAppButton = ({ message, source = 'flotante' }) => (
  <a
    href={whatsappLink(message)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribinos por WhatsApp"
    onClick={() => trackWhatsappClick(source)}
    className="fixed right-5 bottom-5 md:right-8 md:bottom-8 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent-lime text-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform"
  >
    <MessageCircle className="w-7 h-7" strokeWidth={2.2} />
  </a>
);

export default WhatsAppButton;
