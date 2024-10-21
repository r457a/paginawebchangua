import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Estudio de grabación"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-700 mb-6">
              Con años de experiencia en la industria musical, en la Changua nos dedicamos a hacer realidad tus proyectos musicales. Nuestro equipo de profesionales está comprometido con la calidad y la creatividad.
            </p>
            <p className="text-gray-700">
              Utilizamos tecnología de vanguardia y aplicamos técnicas innovadoras para asegurar que tu música suene exactamente como la imaginas. Nuestro objetivo es ayudarte a alcanzar tu máximo potencial artístico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;