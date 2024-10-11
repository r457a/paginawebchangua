import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-700 mb-8">
            ¿Listo para dar el siguiente paso en tu carrera musical? Contáctanos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-purple-600 mb-4" />
              <p className="text-gray-800 font-semibold">Email</p>
              <a href="mailto:goldcompany420@gmail.com" className="text-purple-600 hover:underline">
                goldcompany420@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-purple-600 mb-4" />
              <p className="text-gray-800 font-semibold">Teléfono</p>
              <p className="text-purple-600">+57 XXX XXX XXX</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-purple-600 mb-4" />
              <p className="text-gray-800 font-semibold">Dirección</p>
              <p className="text-purple-600 text-center">Calle Ejemplo, 123, Bogotá</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;