import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, Plus } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { serviceWhatsappLink, trackWhatsappClick } from '@/lib/whatsapp';
import SectionAnimator from '@/components/SectionAnimator';
import NotFound from '@/pages/NotFound';

const Eyebrow = ({ children }) => (
  <p className="text-xs md:text-sm tracking-[0.2em] text-accent-lime uppercase mb-4">{children}</p>
);

const FaqItem = ({ item, open, onToggle }) => (
  <div className="border-b border-white/10">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className="w-full flex justify-between items-center gap-6 py-6 text-left text-lg md:text-xl text-white"
    >
      <span>{item.q}</span>
      <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
        <Plus className="w-6 h-6 text-accent-lime" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 pr-10 text-base md:text-lg text-gray-400 max-w-2xl">{item.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) return <NotFound />;

  const number = String(services.indexOf(service) + 1).padStart(2, '0');
  const waHref = serviceWhatsappLink(service.title);
  const onWhatsapp = () => trackWhatsappClick(`servicio_${service.slug}`);
  const others = services.filter((s) => s.slug !== service.slug);
  const url = `https://limenagencia.com/servicios/${service.slug}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={url} />
        <title>{`${service.title} | LIMEN`}</title>
        <meta name="description" content={`${service.headline} ${service.ideal}`} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${service.title} | LIMEN`} />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <nav aria-label="Ruta" className="text-sm text-gray-500 mb-10 md:mb-14">
            <Link to="/#servicios" className="hover:text-accent-lime transition-colors">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-end">
            <div>
              <Eyebrow>Implementación estratégica · {number}</Eyebrow>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none text-white mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 max-w-xl mb-10">{service.headline}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onWhatsapp}
                  className="inline-flex items-center justify-center gap-3 bg-accent-lime hover:bg-accent-lime/90 text-black font-semibold px-8 py-4 text-lg rounded-full"
                >
                  <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
                </a>
                <a
                  href="#incluye"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white px-8 py-4 text-lg rounded-full transition-colors"
                >
                  Qué incluye
                </a>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 md:p-8 space-y-6">
              <div>
                <p className="text-xs tracking-[0.15em] text-gray-500 uppercase mb-2">Ideal para</p>
                <p className="text-lg text-white">{service.ideal}</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-xs tracking-[0.15em] text-gray-500 uppercase mb-3">Abarca</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.06] text-sm text-gray-200">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="bg-[#0F1010] border-y border-white/10 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-10">¿Te pasa esto?</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {service.problems.map((p) => (
              <div key={p} className="border border-white/10 rounded-2xl p-7 text-lg md:text-xl text-gray-200">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <SectionAnimator>
        <section id="incluye" className="py-24 md:py-32 scroll-mt-24">
          <div className="container mx-auto px-6">
            <Eyebrow>Qué incluye</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-12">Todo lo que necesitás</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.includes.map((item) => (
                <div key={item.t} className="bg-white/[0.03] border border-white/10 rounded-2xl p-7">
                  <span className="w-11 h-11 rounded-xl bg-accent-lime/10 flex items-center justify-center mb-5">
                    <Check className="w-5 h-5 text-accent-lime" />
                  </span>
                  <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>{item.t}</h3>
                  <p className="text-base text-gray-400">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimator>

      {/* Proceso */}
      <section className="bg-[#0F1010] border-y border-white/10 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-12">Paso a paso</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.steps.map((step, i) => (
              <li key={step.t} className="border-t-2 border-accent-lime pt-6">
                <p className="text-4xl font-bold text-accent-lime mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>{step.t}</h3>
                <p className="text-base text-gray-400">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
          <div>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-white">Lo que suelen preguntarnos</h2>
          </div>
          <div>
            {service.faqs.map((item, i) => (
              <FaqItem key={item.q} item={item} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-lime text-black">
        <div className="container mx-auto px-6 py-20 md:py-24 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight mb-3">Hablemos de tu marca</h2>
            <p className="text-lg md:text-xl text-black/70">Contanos qué necesitás y armamos el camino juntos.</p>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhatsapp}
            className="inline-flex items-center justify-center gap-3 bg-[#0C0D0D] text-white font-semibold px-8 py-5 text-lg rounded-full shrink-0 hover:bg-black transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-accent-lime" /> Escribinos por WhatsApp
          </a>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <p className="text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase mb-6">Otros servicios</p>
          <div className="flex flex-wrap gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/servicios/${s.slug}`}
                className="group inline-flex items-center gap-2 px-5 py-3 border border-white/15 rounded-full text-white hover:border-accent-lime hover:text-accent-lime transition-colors"
              >
                {s.title}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
