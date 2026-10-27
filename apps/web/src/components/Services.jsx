import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const services = [{
  title: 'Brand Strategy',
  description: 'Definimos posicionamiento, narrativa y dirección estratégica para que cada acción tenga coherencia y propósito comercial.'
}, {
  title: 'Digital Marketing',
  description: 'Gestión estructurada de contenidos y social media alineada a objetivos de crecimiento y presencia sostenida.'
}, {
  title: 'Content Production',
  description: 'Fotografía y contenido audiovisual diseñados para fortalecer identidad y potenciar resultados.'
}, {
  title: 'Paid Media',
  description: 'Planificación y gestión de inversión publicitaria orientada a alcance, captación y optimización continua.'
}, {
  title: 'Influencer & UGC Management',
  description: 'Estrategia y coordinación de colaboraciones que amplifican la marca desde voces alineadas a su identidad.'
}, {
  title: 'Brand Experiences',
  description: 'Coordinación de eventos, activaciones y desarrollo de merch para expandir la presencia de la marca más allá del entorno digital.'
}, {
  title: 'Web, Landing & E-commerce Developmen',
  description: 'Diseño y desarrollo de sitios institucionales, landing pages y plataformas de comercio digital orientadas a conversión, experiencia de usuario y escalabilidad comercial.'
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleServiceClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const fadeIn = (x) => ({
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: 'easeOut' },
  });

  return (
    <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight text-white uppercase font-bold">
            SISTEMA <span className="text-accent-lime">LIMEN</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-4">
            En LMN trabajamos desde el punto donde una marca decide profesionalizar su crecimiento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeIn(-50)}>
            <div className="mb-6 min-h-[96px]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                LIMEN <span className="text-accent-lime">GROWTH</span>
              </h3>
              <p className="text-lg text-gray-400 mt-2">Para marcas en etapa de consolidación digital inicial.</p>
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-400">
                En <span className="text-accent-lime">GROWTH</span> ofrecemos un sistema autónomo de construcción y crecimiento para quienes buscan verse profesionales y ordenar su presencia digital, sin depender de una agencia mes a mes.
              </p>
              <p className="text-base md:text-lg text-gray-400">
                A través de una <span className="text-accent-lime">única inversión</span>, ofrecemos un <span className="text-accent-lime">sistema claro</span> que integra estrategia, diseño y producción, dejando a cada marca con <span className="text-accent-lime">recursos propios, durables y listos para usar.</span>
              </p>
              <p className="text-base md:text-lg text-gray-400">
                El objetivo es que cada proyecto pueda comunicar con claridad, sostener su presencia digital y operar de <span className="text-accent-lime">forma autónoma</span>, con una base sólida y alineada a sus objetivos reales.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeIn(50)}>
            <div className="mb-6 min-h-[96px]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                LIMEN <span className="text-accent-graydark">SCALE</span>
              </h3>
              <p className="text-lg text-gray-400 mt-2">Para marcas con operación activa que buscan expansión estratégica.</p>
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-400">
                <span className="text-accent-gray">SCALE</span> es una unidad de inversión mensual diseñada para marcas que necesitan implementar <span className="text-accent-gray">marketing estratégico</span> alineado a objetivos de crecimiento.
              </p>
              <p className="text-base md:text-lg text-gray-400">
                Actuamos como partners, integrando comunicación digital, desarrollo de marca y activaciones desde una <span className="text-accent-gray">visión integral</span> que conecta estrategia, ejecución y expansión.
              </p>
              <p className="text-base md:text-lg text-gray-400">
                La estructura del servicio se adapta al momento de la marca, optimizando recursos y profesionalizando cada punto de contacto.
              </p>
              <p className="text-base md:text-lg text-gray-400">El objetivo no es solo “estar activos”.</p>
              <p className="text-base md:text-lg text-gray-400">
                Es <span className="text-accent-gray">ESCALAR</span> con dirección.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white">
            IMPLEMENTACIONES ESTRATÉGICAS
          </h2>
          {services.map((service, index) => (
            <div key={service.title} className="border-b border-gray-800">
              <div className="flex justify-between items-center cursor-pointer py-8 group" onClick={() => handleServiceClick(index)}>
                <div className="flex items-center gap-4">
                  <h3 className={`text-3xl md:text-5xl font-bold transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {service.title}
                  </h3>
                  {activeIndex === index && (
                    <motion.div
                      className="w-4 h-4 bg-accent-lime rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={40} className="text-accent-lime" />
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-16">
                      <p className="text-lg text-gray-400 max-w-2xl">{service.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
