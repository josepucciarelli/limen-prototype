import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { whatsappLink, trackWhatsappClick } from '@/lib/whatsapp';

// Grilla de "Implementaciones estratégicas": cada tarjeta lleva a /servicios/<slug>.
const ServicesGrid = () => (
  <section id="servicios" className="py-24 md:py-32 bg-[#0F1010] border-y border-white/10 scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
        <div>
          <p className="text-xs md:text-sm tracking-[0.2em] text-accent-lime uppercase mb-4">02 — Implementaciones estratégicas</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-white">Servicios</h2>
        </div>
        <p className="text-lg text-gray-400 max-w-sm">Activamos solo lo que tu marca necesita, bajo una misma dirección.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <Link
            key={service.slug}
            to={`/servicios/${service.slug}`}
            className="group bg-[#131414] border border-white/10 hover:border-accent-lime rounded-2xl p-7 flex flex-col gap-3 min-h-[230px] transition-colors"
          >
            <span className="text-sm text-gray-500">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="text-2xl text-white leading-tight" style={{ fontWeight: 600 }}>{service.title}</h3>
            <p className="text-base text-gray-400">{service.short}</p>
            <span className="mt-auto pt-2 inline-flex items-center gap-2 text-accent-lime">
              Ver servicio <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('servicios_diagnostico')}
          className="group border border-dashed border-white/20 hover:border-accent-lime rounded-2xl p-7 flex flex-col justify-center gap-3 min-h-[230px] transition-colors"
        >
          <h3 className="text-2xl text-white leading-tight" style={{ fontWeight: 600 }}>¿No sabés por dónde empezar?</h3>
          <p className="text-base text-gray-400">Te armamos un diagnóstico estratégico.</p>
          <span className="inline-flex items-center gap-2 text-accent-lime">
            Agendar <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default ServicesGrid;
