import React, { useEffect, useRef } from 'react';
import { startGlitchBackground } from '@/lib/glitchBackground';

// Fondo animado generado con código (reemplaza la imagen fondo.jpg).
// Se pausa solo cuando no está en pantalla y respeta "reducir movimiento".
// shade: oscurece suavemente el centro para que el texto se lea mejor.
const GlitchBackground = ({ accent = true, intensity = 0.62, focus, spread, clearCenter, clearWidth, shade = true, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return undefined;
    return startGlitchBackground(canvasRef.current, { accent, intensity, focus, spread, clearCenter, clearWidth });
  }, [accent, intensity, focus?.x, focus?.y, spread, clearCenter, clearWidth]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full block pointer-events-none ${className}`}
      />
      {shade && <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-[#0C0D0D]/40 md:hidden" />}
      {shade && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 45% 50% at 50% 50%, rgba(12,13,13,0.85) 0%, rgba(12,13,13,0.55) 45%, rgba(12,13,13,0) 100%)' }}
        />
      )}
    </>
  );
};

export default GlitchBackground;
