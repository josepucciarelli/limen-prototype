import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#0C0D0D] min-h-screen text-gray-300 pt-32 pb-20"
    >
      <Helmet>
        <title>Términos de Servicio | LIMEN</title>
        <meta name="description" content="Términos y condiciones de uso para los servicios y sitio web de LIMEN." />
      </Helmet>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
        >
          Términos de Servicio
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Introducción</h2>
            <p className="leading-relaxed">
              Bienvenido a LIMEN. Al acceder y utilizar nuestro sitio web y servicios, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. 
              Si no está de acuerdo con alguna parte de estos términos, por favor no utilice nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Servicios</h2>
            <p className="leading-relaxed">
              LIMEN es un sistema estratégico que integra dirección, implementación y escalabilidad. Ofrecemos servicios que incluyen, pero no se limitan a, diseño web, desarrollo de aplicaciones, 
              estrategia de marca, SEO y gestión de redes sociales. Nos reservamos el derecho de modificar o discontinuar cualquier servicio en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Uso Aceptable</h2>
            <p className="leading-relaxed">
              Usted se compromete a utilizar nuestro sitio web y servicios solo para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba 
              el uso y disfrute del sitio por parte de terceros. Está prohibido cualquier comportamiento que sea ilegal, ofensivo o que pueda dañar la reputación de LIMEN.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Propiedad Intelectual</h2>
            <p className="leading-relaxed">
              Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logotipos, imágenes y código, es propiedad exclusiva de LIMEN o de sus licenciantes 
              y está protegido por las leyes de propiedad intelectual internacionales y nacionales. La reproducción total o parcial sin consentimiento expreso está prohibida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Limitación de Responsabilidad</h2>
            <p className="leading-relaxed">
              La información y los servicios en este sitio web se proporcionan "tal cual". LIMEN no ofrece garantías de ningún tipo, explícitas o implícitas, 
              sobre la integridad, precisión, fiabilidad, idoneidad o disponibilidad del sitio web o la información contenida en él. 
              En ningún caso seremos responsables por cualquier pérdida o daño derivado del uso de este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Modificaciones</h2>
            <p className="leading-relaxed">
              LIMEN se reserva el derecho de revisar y modificar estos términos de servicio en cualquier momento sin previo aviso. 
              Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos términos y condiciones. 
              Le recomendamos revisar esta página periódicamente.
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;