
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
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
    </footer>
  );
};

export default Footer;
