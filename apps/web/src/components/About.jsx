import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.3
          }} transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img className="w-full h-full object-cover" alt="creativo trabajando en computadoras" src="/images/quienes-somos.jpg" />
            </div>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.3
          }} transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              Quienes <span className="text-accent-lime">somos</span>
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-lg mt-4 text-gray-400">Somos una creative network que opera desde la estrategia, la claridad y el criterio.</p>
                <p className="text-lg mt-4 text-gray-400">Acompañamos marcas y proyectos con una mirada estratégica y creativa integrada, apoyándonos en procesos definidos y decisiones fundamentadas para construir comunicación alineada a objetivos de negocio.</p>
                <p className="text-lg mt-4 text-gray-400">LIMEN surge como respuesta a un entorno digital cada vez más saturado y fragmentado. Creemos que el desafío no es la falta de ideas, sino la falta de dirección.</p>
                <p className="text-lg mt-4 text-gray-400">Estructuramos presencias digitales coherentes y diferenciadas, alineadas a la identidad de cada marca y orientadas a crecimiento sostenible.</p>
              </div>
              
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          {/* TÍTULO */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              ESTRATEGIA CON <span className="text-accent-lime">CRITERIO</span>
              <p className="text-lg text-gray-400">Del diagnóstico a la implementación</p>
            </h2>
          </motion.div>

          {/* CONTENIDO */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
          >
            <div className="space-y-8 mt-10 lg:mt-24">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Diagnóstico y Dirección
                </h3>
                <p className="text-lg text-gray-400">
                  Comenzamos por analizar posicionamiento, contexto competitivo y objetivos comerciales para definir una hoja de ruta clara y accionable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Implementación Integrada
                </h3>
                <p className="text-lg text-gray-400">
                  Activamos las áreas necesarias bajo una misma dirección estratégica, asegurando coherencia en cada punto de contacto de la marca.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Optimización y Escalabilidad
                </h3>
                <p className="text-lg text-gray-400">
                  Medimos desempeño, ajustamos decisiones y estructuramos crecimiento progresivo según resultados reales.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default About;