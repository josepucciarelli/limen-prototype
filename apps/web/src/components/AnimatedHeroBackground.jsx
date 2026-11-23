import React from 'react';
import GlitchBackground from '@/components/GlitchBackground';

// Fondo del hero: barras hacia los costados, centro despejado para el título
const AnimatedHeroBackground = () => (
  <GlitchBackground focus={{ x: 0.82, y: 0.18 }} clearCenter={0.85} clearWidth={0.22} />
);

export default AnimatedHeroBackground;
