import React from 'react';
import { Music } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Music className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Casa Roja Estudio</h1>
        </div>
        <p className="text-sm">Estudio de Grabación en Bogotá | Productor Musical</p>
      </div>
    </header>
  );
};

export default Header;