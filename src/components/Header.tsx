import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/CHANGUA REC (1).png" alt="Changua Rec Logo" className="custom-logo-size" />
          <svg className="w-4 h-4 ml-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#FF0000">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className="flex items-center">
          <p className="text-sm">Estudio de Grabación en Bogotá | Productor Musical</p>
        </div>
      </div>
    </header>
  );
};

export default Header;