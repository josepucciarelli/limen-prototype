import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'InnovateCore', description: 'InnovateCore logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/e9525656b9fde2b5573f268bb3871a52.png' },
  { name: 'QuantumLeap', description: 'QuantumLeap logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/effd96782a73b93d152e75bb1a10e8ff.png' },
  { name: 'InnovateCore', description: 'InnovateCore logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/e9525656b9fde2b5573f268bb3871a52.png' },
  { name: 'QuantumLeap', description: 'QuantumLeap logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/effd96782a73b93d152e75bb1a10e8ff.png' },
  { name: 'InnovateCore', description: 'InnovateCore logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/e9525656b9fde2b5573f268bb3871a52.png' },
  { name: 'QuantumLeap', description: 'QuantumLeap logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/effd96782a73b93d152e75bb1a10e8ff.png' },
  { name: 'InnovateCore', description: 'InnovateCore logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/e9525656b9fde2b5573f268bb3871a52.png' },
  { name: 'QuantumLeap', description: 'QuantumLeap logo', image: 'https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/effd96782a73b93d152e75bb1a10e8ff.png' },
];

const marqueeLogos = [...clientLogos, ...clientLogos]; // Duplicate for seamless loop

const TrustedClients = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -2016], // Adjust as needed based on actual width
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