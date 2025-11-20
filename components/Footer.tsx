
import React from 'react';
import { InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <a href="https://www.instagram.com/carreralinares.es/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full shadow-md transition-transform hover:scale-110">
            <div className="block bg-gray-50 p-2 rounded-full">
                <InstagramIcon className="w-8 h-8 text-gray-800" />
            </div>
          </a>
          <h3 className="mt-4 text-xl font-bold text-gray-800">Comparte tus mejores momentos</h3>
          <p className="mt-1 text-gray-600">
            ¡Etiquétanos en tus fotos y vídeos en Instagram!
          </p>
          <a href="https://www.instagram.com/carreralinares.es/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block bg-white border border-gray-300 text-gray-800 font-bold text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-sm">
            @carreralinares.es
          </a>
        </div>

        <div className="text-center text-gray-500 border-t border-gray-200 pt-6">
          <p className="mb-1">¡Mucha suerte en la carrera y disfruta de Linares!</p>
          <p>
            Una plataforma de{' '}
            <a 
              href="https://carreralinares.es/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Carreralinares.es
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
