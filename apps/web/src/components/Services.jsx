import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { whatsappLink, trackWhatsappClick } from '@/lib/whatsapp';

const plans = [
  {
    name: 'GROWTH',
    tag: 'Consolidación inicial',
    description: 'Para verte profesional y ordenar tu presencia digital, sin depender de una agencia mes a mes.',
    points: ['Inversión única', 'Estrategia, diseño y producción', 'Recursos propios, listos para usar'],
    highlight: false,
  },
  {
    name: 'SCALE',
    tag: 'Expansión estratégica',
    description: 'Marketing estratégico mensual: actuamos como partners de tu crecimiento.',
    points: ['Inversión mensual adaptable', 'Comunicación, marca y activaciones', 'No solo estar activos: escalar'],
    highlight: true,
  },
];

const fadeIn = (x) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: 'easeOut' },
});

// Sección "Sistema LIMEN": los dos modelos de trabajo, GROWTH y SCALE.
const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-[#0C0D0D] scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="mb-14 md:mb-16">
        <p className="text-xs md:text-sm tracking-[0.2em] text-accent-lime uppercase mb-4">01 — Sistema LIMEN</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight text-white uppercase font-bold mb-4">
          Dos formas de <span className="text-accent-lime">crecer</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl">
          Trabajamos desde el punto donde una marca decide profesionalizar su crecimiento. Elegí según tu momento.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            {...fadeIn(i === 0 ? -50 : 50)}
            className={`rounded-3xl p-8 md:p-10 flex flex-col gap-6 ${
              plan.highlight ? 'bg-accent-lime text-black' : 'bg-white/[0.03] border border-white/10 text-white'
            }`}
          >
            <span
              className={`self-start text-xs tracking-[0.15em] uppercase px-3 py-1.5 rounded-full ${
                plan.highlight ? 'bg-black text-accent-lime' : 'bg-white/[0.08] text-gray-300'
              }`}
            >
              {plan.tag}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold">
              LIMEN{' '}
              <span className={plan.highlight ? '' : 'text-accent-lime'}>{plan.name}</span>
            </h3>
            <p className={`text-lg ${plan.highlight ? 'text-black/75' : 'text-gray-400'}`}>{plan.description}</p>
            <ul className="space-y-3">
              {plan.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-lg">
                  <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-black' : 'text-accent-lime'}`} />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(`Hola LIMEN, me interesa LIMEN ${plan.name} para mi marca.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsappClick(`plan_${plan.name.toLowerCase()}`)}
              className={`group mt-auto pt-4 inline-flex items-center gap-2 font-semibold text-lg ${
                plan.highlight ? 'text-black' : 'text-accent-lime'
              }`}
            >
              Quiero {plan.name}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
