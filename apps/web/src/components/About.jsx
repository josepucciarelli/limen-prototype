import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { t: 'Diagnóstico y dirección', d: 'Analizamos posicionamiento, competencia y objetivos para definir una hoja de ruta clara.' },
  { t: 'Implementación integrada', d: 'Activamos las áreas necesarias bajo una misma dirección estratégica.' },
  { t: 'Optimización y escala', d: 'Medimos, ajustamos y crecemos según resultados reales.' },
];

const reveal = (x = 0, y = 0) => ({
  initial: { opacity: 0, x, y },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: 'easeOut' },
});

// Secciones "Método" y "Quiénes somos".
const About = () => (
  <>
    <section id="metodo" className="py-24 md:py-32 bg-[#0C0D0D] scroll-mt-20">
      <div className="container mx-auto px-6">
        <p className="text-xs md:text-sm tracking-[0.2em] text-accent-lime uppercase mb-4">03 — Método</p>
        <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-4">
          Estrategia con <span className="text-accent-lime">criterio</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-14">Del diagnóstico a la implementación.</p>
        <ol className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.li key={step.t} {...reveal(0, 30)} transition={{ duration: 0.6, delay: i * 0.15 }} className={`border-t-2 pt-7 ${i === 0 ? 'border-accent-lime' : 'border-white/20'}`}>
              <p className={`text-5xl font-bold mb-4 ${i === 0 ? 'text-accent-lime' : 'text-gray-500'}`}>{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 600 }}>{step.t}</h3>
              <p className="text-lg text-gray-400">{step.d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>

    <section id="about" className="py-24 md:py-32 bg-[#0F1010] border-t border-white/10 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div {...reveal(-50)}>
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img className="w-full h-full object-cover" alt="Equipo de LIMEN trabajando" src="/images/quienes-somos.jpg" loading="lazy" />
          </div>
        </motion.div>
        <motion.div {...reveal(50)}>
          <p className="text-xs md:text-sm tracking-[0.2em] text-accent-lime uppercase mb-4">04 — Quiénes somos</p>
          <p className="text-3xl md:text-4xl leading-snug text-white mb-8" style={{ fontWeight: 600 }}>
            “El desafío no es la falta de ideas, sino la falta de <span className="text-accent-lime">dirección</span>.”
          </p>
          <p className="text-lg text-gray-400 mb-4">
            Somos una creative network que opera desde la estrategia, la claridad y el criterio.
          </p>
          <p className="text-lg text-gray-400">
            Construimos presencias digitales coherentes y diferenciadas, alineadas a la identidad de cada marca y orientadas a un crecimiento sostenible.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default About;
