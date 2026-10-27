import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import SectionAnimator from '@/components/SectionAnimator';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LIMEN | Sistema estratégico para marcas que quieren crecer</title>
        <meta name="description" content="LIMEN es un sistema estratégico que integra dirección, implementación y escalabilidad para marcas que buscan crecer con criterio." />
      </Helmet>
      <Hero />
      <SectionAnimator><TrustedClients /></SectionAnimator>
      <SectionAnimator><Services /></SectionAnimator>
      <About />
      
      
      <SectionAnimator><Stats /></SectionAnimator>
      <SectionAnimator><CTA /></SectionAnimator>
    </>
  );
};

export default Home;