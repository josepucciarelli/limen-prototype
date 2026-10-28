import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';

const Hero = () => {
  const navigate = useNavigate();
  const handleCTAClick = () => {
    navigate('/contact');
  };
  
  const handleViewWorkClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
      <AnimatedHeroBackground />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto mt-18  px-6 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-lime/10 border border-accent-lime/20 rounded-full mb-8"
          >
            
            <span className="text-sm text-accent-lime uppercase font-medium">CREATIVIDAD CON PROPOSITO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white uppercase"
            style={{ fontWeight: 600 }}
          >
            Sistema y estrategia para{' '}
            <span className="block text-accent-lime">Marcas en Expansi&oacute;n</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-normal"
          >
            Estrategia, creatividad y performance. <span className="block">Sistema diseñado para marcas que quieren escalar con </span><span className="block text-accent-lime">dirección, coherencia y resultados sostenibles.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center"
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent-lime hover:bg-accent-lime/90 text-black px-8 py-6 text-lg rounded-full group"
              style={{ fontWeight: 600 }}
            >
              Agenda tu diagn&oacute;stico estrat&eacute;gico
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        
      </motion.div>
    </section>
  );
};

export default Hero;