import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const ContactInfoBlock = ({ title, lines, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-8"
  >
    <h3 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">{title}</h3>
    <div className="space-y-1">
      {lines.map((line, index) => <p key={index} className="text-lg text-gray-200">{line}</p>)}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Helmet>
        <link rel="canonical" href="https://limenagencia.com/contact" />
        <title>Contacto | LIMEN | Sistema estratégico para marcas en expansión</title>
        <meta name="description" content="Ponte en contacto con el equipo de LIMEN para soluciones estratégicas y consultas de proyectos." />
      </Helmet>
      <section className="bg-[#0C0D0D] text-white py-32 sm:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white uppercase mb-6 leading-tight">
                Conecta <span className="text-accent-lime">con nosotros</span>
              </h1>
              
              <motion.div
                className="flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                  <a href="https://www.instagram.com/limen.agencia?igsh=MW4wNjVqaTBsY21nbw==" className="text-lg text-gray-300 hover:text-accent-lime transition-colors duration-300">Instagram</a>
                  <a href="https://www.facebook.com/share/1CdYEFawbX/?mibextid=wwXIfr" className="text-lg text-gray-300 hover:text-accent-lime transition-colors duration-300">Facebook</a>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <ContactInfoBlock
                    title="Consultas de Proyectos"
                    lines={[
                      <a 
                        key="email"
                        href="mailto:hola.limen@gmail.com"
                        className="hover:text-accent-lime transition-colors duration-300"
                      >
                        hola.limen@gmail.com
                      </a>,
                      <a
                        key="whatsapp"
                        href="https://wa.me/595994754526?text=Hola%20LIMEN,%20me%20interesa%20agendar%20un%20diagnóstico%20estratégico%20para%20mi%20marca."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-lime transition-colors duration-300"
                      >
                        +595 994 754 526
                      </a>
                    ]}
                    delay={0.4}
                  />
                </div>
                
              </div>

              <motion.div
                className="overflow-hidden rounded-2xl shadow-2xl shadow-accent-lime/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
              
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
export default Contact;