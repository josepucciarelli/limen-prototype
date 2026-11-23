import React from 'react';
import GlitchBackground from '@/components/GlitchBackground';

// Fondo de la sección final (CTA): mismo criterio, barras a los costados
const AnimatedCtaBackground = () => (
  <GlitchBackground focus={{ x: 0.18, y: 0.3 }} clearCenter={0.85} clearWidth={0.24} />
);

export default AnimatedCtaBackground;
