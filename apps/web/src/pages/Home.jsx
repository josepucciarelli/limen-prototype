import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Services from '@/components/Services';
import ServicesGrid from '@/components/ServicesGrid';
import About from '@/components/About';
import CTA from '@/components/CTA';
import SectionAnimator from '@/components/SectionAnimator';

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://limenagencia.com/" />
        <title>LIMEN | Sistema estratégico para marcas en expansión</title>
        <meta name="description" content="LIMEN es un sistema estratégico que integra dirección, implementación y escalabilidad para marcas que buscan crecer con criterio." />
      </Helmet>
      <Hero />
      <SectionAnimator><TrustedClients /></SectionAnimator>
      <SectionAnimator><Services /></SectionAnimator>
      <SectionAnimator><ServicesGrid /></SectionAnimator>
      <About />
      <SectionAnimator><CTA /></SectionAnimator>
    </>
  );
};

export default Home;