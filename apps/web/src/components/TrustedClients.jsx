import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'MacStore', image: '/images/clientes/macstore.png' },
  { name: 'Zuba', image: '/images/clientes/zuba.png' },
  { name: 'Eleva by Zuba', image: '/images/clientes/eleva.png' },
];

// Cada logo ocupa 192px (w-32 + mx-8). Un "set" = los logos x4, más ancho que la pantalla.
const logoSet = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];
const SET_WIDTH = logoSet.length * 192;
const marqueeLogos = [...logoSet, ...logoSet]; // Duplicado para un loop continuo

const TrustedClients = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -SET_WIDTH],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // Adjusted for smoother loop with text
          ease: 'linear'
        }
      }
    }
  };

  return (
    <section className="py-14 bg-[#0C0C0B] border-t border-b border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="relative w-full">
          <motion.div className="flex items-center" variants={marqueeVariants} animate="animate">
            {marqueeLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 mx-8 flex justify-center items-center">
                {logo.image ? (
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-24 max-w-24 object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="text-white text-2xl md:text-3xl font-semibold opacity-70">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;