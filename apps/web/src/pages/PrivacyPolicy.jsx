import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
        <link rel="canonical" href="https://limenagencia.com/privacy-policy" />
        <title>Política de Privacidad | LIMEN</title>
        <meta name="description" content="Política de privacidad de LIMEN - Cómo protegemos y utilizamos tus datos en nuestro sistema estratégico." />
      </Helmet>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
        >
          Política de Privacidad
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Introducción</h2>
            <p className="leading-relaxed">
              En LIMEN, valoramos y respetamos su privacidad. Esta política detalla cómo recopilamos, 
              usamos y protegemos la información personal de nuestros visitantes y clientes. 
              Nos comprometemos a garantizar que su privacidad esté protegida en todo momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Información Recopilada</h2>
            <p className="leading-relaxed mb-4">
              Podemos recopilar la siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información de contacto (nombre, correo electrónico) proporcionada voluntariamente a través de nuestros formularios.</li>
              <li>Datos demográficos básicos y preferencias de interés.</li>
              <li>Información técnica y de navegación mediante cookies para mejorar su experiencia en nuestro sitio web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Uso de la Información</h2>
            <p className="leading-relaxed mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a sus consultas y proporcionar los servicios solicitados.</li>
              <li>Mejorar nuestros productos y servicios.</li>
              <li>Enviar correos electrónicos promocionales sobre nuevos servicios u otra información que consideremos relevante (siempre con su consentimiento).</li>
              <li>Personalizar su experiencia en nuestro sitio web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Compartición de Datos</h2>
            <p className="leading-relaxed">
              LIMEN se compromete a no vender, distribuir ni ceder su información personal a terceros a menos que tengamos su permiso o estemos obligados por ley a hacerlo. 
              Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio, siempre bajo estrictos acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Derechos del Usuario</h2>
            <p className="leading-relaxed mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solicitar acceso a los datos personales que tenemos sobre usted.</li>
              <li>Solicitar la corrección de cualquier dato incorrecto o incompleto.</li>
              <li>Solicitar la eliminación de sus datos personales de nuestros registros.</li>
              <li>Oponerse al procesamiento de sus datos en determinadas circunstancias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-accent-lime mb-4">Contacto</h2>
            <p className="leading-relaxed">
              Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, por favor contáctenos en:<br/>
              <a href="mailto:hola.limen@gmail.com" className="text-white hover:text-accent-lime transition-colors mt-2 inline-block">
                hola.limen@gmail.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;