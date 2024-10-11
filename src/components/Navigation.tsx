import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-4">
          {['Inicio', 'Servicios', 'Sobre Nosotros', 'Contacto'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-gray-300 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;