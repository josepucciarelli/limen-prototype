import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <Helmet>
      <title>Página no encontrada | LIMEN</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <section className="bg-[#0C0D0D] text-white py-32 sm:py-40">
      <div className="container mx-auto px-6 text-left md:text-center">
        <p className="text-accent-lime uppercase tracking-widest text-sm mb-4">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
          Esta página <span className="text-accent-lime">no existe</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10">Puede que el enlace esté roto o que la página se haya movido.</p>
        <Link to="/" className="inline-block bg-accent-lime hover:bg-accent-lime/90 text-black px-8 py-4 text-lg rounded-full font-semibold">
          Volver al inicio
        </Link>
      </div>
    </section>
  </>
);

export default NotFound;
