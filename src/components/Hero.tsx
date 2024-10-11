import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Bienvenido a la Changua</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Somos tu estudio de grabación y producción musical en Bogotá. Ofrecemos servicios 
          profesionales para artistas y bandas de todos los géneros.
        </p>
        <button className="mt-8 bg-white text-purple-700 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
          Descubre más
        </button>
      </div>
    </section>
  );
};

export default Hero;