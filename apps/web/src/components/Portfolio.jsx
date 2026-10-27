import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [{
  id: 1,
  slug: 'social-media-app',
  title: 'Interfaz Bancaria de Próxima Generación',
  description: 'Una interfaz de aplicación de redes sociales con tema oscuro mostrada en un teléfono inteligente.',
  imgKey: "dark mode social media app on phone"
}, {
  id: 2,
  slug: 'fintech-dashboard',
  title: 'Panel Fintech',
  description: 'Un panel de aplicación fintech con detalles de pago, mostrado en un teléfono inteligente junto a un teclado.',
  imgKey: "fintech app on phone next to keyboard"
}, {
  id: 3,
  slug: 'digital-marketing-agency-site',
  title: 'Sitio de Agencia de Marketing Digital',
  description: 'Una página de inicio de sitio web de agencia de marketing digital, mostrada en un teléfono inteligente con un diseño elegante y moderno.',
  imgKey: "digital marketing agency website on phone"
}];

const Portfolio = () => {
  const navigate = useNavigate();
  const handleProjectClick = slug => {
    navigate(`/project/${slug}`);
  };
  return (
    <section id="portfolio" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase font-medium">
              Portafolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight uppercase" style={{ fontWeight: 700 }}>
              Explora nuestro portafolio de <span className="text-accent-lime">soluciones creativas</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400 font-normal">
              Explora nuestro portafolio lleno de soluciones creativas, desde branding y diseño web hasta campañas de marketing que impulsan resultados.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleProjectClick('social-media-app')}>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Interfaz de aplicación de redes sociales con tema oscuro mostrada en un teléfono inteligente" src="https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/tech-daily-lkyv7faumza-unsplash-2-FOBCl.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>Interfaz Bancaria</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleProjectClick('fintech-dashboard')}>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Panel de aplicación fintech con detalles de pago, mostrado en un teléfono inteligente junto a un teclado" src="https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/gemini_generated_image_n6u5epn6u5epn6u5-5abrf-2-W2Hon.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>Panel Fintech</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleProjectClick('digital-marketing-agency-site')}>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Página de inicio de sitio web de agencia de marketing digital, mostrada en un teléfono inteligente con un diseño elegante y moderno" src="https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/sumup-vsyr_mbh7q4-unsplash-2-Hxitr.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl text-white mb-1" style={{ fontWeight: 600 }}>Sitio de Agencia</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;