import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedCtaBackground from '@/components/AnimatedCtaBackground';
import { whatsappLink, trackWhatsappClick } from '@/lib/whatsapp';

const CTA = () => (
  <section id="cta" className="relative py-32 overflow-hidden">
    <AnimatedCtaBackground />
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase">
          <span className="text-accent-lime">El próximo nivel no es casualidad.</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Es estrategia implementada con método.</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('cta_home')}
          className="inline-flex items-center justify-center bg-accent-lime hover:bg-accent-lime/90 text-black font-bold px-10 py-5 text-xl rounded-full group transition-colors"
        >
          Conversemos sobre tu marca
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
