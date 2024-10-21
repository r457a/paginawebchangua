import React from 'react';
import { Mic, Music, Sliders, Share2, Users, FileAudio, Briefcase } from 'lucide-react';

const services = [
  { title: 'Grabación', description: 'Capturamos tu sonido con equipos adecuados en un ambiente home estudio profesional.', icon: Mic },
  { title: 'Producción Musical', description: 'Damos forma a tu música con nuestra experiencia y creatividad.', icon: Music },
  { title: 'Mezcla y Masterización', description: 'Pulimos tu sonido para que brille en cualquier plataforma.', icon: Sliders },
  { title: 'Distribución Musical', description: 'Lleva tu música a todas las plataformas principales.', icon: Share2 },
  { title: 'Herramientas de Colaboración', description: 'Conéctate con artistas y productores.', icon: Users },
  { title: 'Oportunidades de Licencias', description: 'Licencia tu música para cine, TV y más.', icon: FileAudio },
  { title: 'Desarrollo de Carrera', description: 'Accede a recursos para crecer en tu carrera musical.', icon: Briefcase },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <service.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;