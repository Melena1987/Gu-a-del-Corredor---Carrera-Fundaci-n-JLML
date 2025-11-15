import React from 'react';
import Section from '../Section';

const WelcomeSection: React.FC = () => {
  return (
    <Section 
      title="Bienvenido/a a Linares"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600">
          Estamos encantados de tenerte aquí para la I Carrera de la Fundación José Luis Martín López. Este fin de semana no solo correremos por las calles de esta ciudad histórica, sino que también apoyaremos los proyectos educativos y sociales de la Fundación. Prepárate para compartir asfalto con auténticas leyendas del atletismo y disfrutar de una ciudad volcada con el deporte y la cultura.
        </p>
        <a 
          href="https://fundacionjoseluismartinlopez.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-8 transition-transform duration-300 hover:scale-105"
          aria-label="Visita el sitio web de la Fundación José Luis Martín López"
        >
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763196923875_logo_Fundaci_n_400x400.png?alt=media&token=21a2fe64-515b-485b-9cde-29860125300f" 
            alt="Logo Fundación José Luis Martín López" 
            className="h-24 w-auto"
          />
        </a>
      </div>
    </Section>
  );
};

export default WelcomeSection;