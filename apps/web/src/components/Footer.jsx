import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Phone as WhatsApp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleSocialClick = () => {
        toast({
            title: "Función No Implementada 🚧",
            description: "¡Esta función aún no está implementada, pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀",
        });
    };

    const handleNavClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const [path, id] = href.split('#');

        if (path === '/' || path === '') {
            navigate('/');
            setTimeout(() => {
                if (id) {
                    const targetElement = document.getElementById(id);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else {
             handleSocialClick();
        }
    };
    
    const footerSections = [
        {
            title: 'Enlaces Rápidos',
            links: [
                { name: 'Inicio', href: '/' },
                { name: 'Sistema LMN', href: '/#services' },
                
                { name: 'Quienes Somos', href: '/#about' },
            ],
        },
        {
            title: 'Compañía',
            links: [
                { name: 'Contáctanos', href: '/contact' },
                { name: 'Política de Privacidad', href: '/privacy-policy' },
                { name: 'Términos de Servicio', href: '/terms-of-service' },
            ],
        },
    ];

    const socialLinks = [
        { icon: <Instagram size={20} />, name: 'Instagram', href: 'https://www.instagram.com/limen.agencia?igsh=MW4wNjVqaTBsY21nbw==' },
        { icon: <Facebook size={20} />, name: 'Facebook', href: 'https://www.facebook.com/share/1CdYEFawbX/?mibextid=wwXIfr' },
        { icon: <WhatsApp size={20} />, name: 'WhatsApp', href: 'https://wa.me/595994754526?text=Hola%20LIMEN,%20me%20interesa%20agendar%20un%20diagnóstico%20estratégico%20para%20mi%20marca.' },
    ];

    return (
        <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <Link to="/" onClick={handleNavClick} className="inline-block transition-transform duration-300 transform hover:scale-105">
                <img src="https://horizons-cdn.hostinger.com/956b0fed-7d2f-4c6b-8e07-4a943ec1e56f/619211ac2eb8708af9a1cf46277a9641.png" alt="Logo de la Agencia" className="h-20 mb-4"/>
                        </Link>
                        <p className="text-gray-400 font-normal">Estrategia clara. Creatividad con propósito.</p>
                    </div>

                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <p className="text-white mb-6" style={{ fontWeight: 600 }}>{section.title}</p>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a 
                                          href={link.href} 
                                          onClick={(e) => {
                                              if (link.href.startsWith('/') && !link.href.includes('#')) {
                                                  e.preventDefault();
                                                  navigate(link.href);
                                                  window.scrollTo(0, 0);
                                              } else if (link.href.includes('#')) {
                                                  handleNavClick(e);
                                              } else if (link.href === '#') {
                                                  e.preventDefault();
                                                  handleSocialClick();
                                              }
                                          }} 
                                          className="text-gray-400 hover:text-accent-lime transition-colors duration-300 font-normal">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                     <div>
                        <p className="text-white mb-6" style={{ fontWeight: 600 }}>Conecta con Nosotros</p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name} 
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-accent-lime transition-colors duration-300 p-2 border border-white/10 rounded-full hover:border-accent-lime/50 flex items-center justify-center"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
                    <p className="font-normal">&copy; {new Date().getFullYear()} LIMEN. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;