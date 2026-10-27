import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCtaBackground from '@/components/AnimatedCtaBackground';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/contact');
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <AnimatedCtaBackground />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase"
          >
            <span className="text-accent-lime">El próximo nivel no es casualidad.</span>
          </h2>
          <p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Es estrategia implementada con método.
          </p>
          <div>
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent-lime hover:bg-accent-lime/90 text-black font-bold px-10 py-7 text-xl rounded-full group"
            >
               Conversemos sobre tu marca
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;