import React from 'react';
import Section from '../Section';
import AnimateOnScroll from '../AnimateOnScroll';
import { TrophyIcon } from '../Icons';

const TrophySection: React.FC = () => {
  const descriptionContent = (
    <>
      <div className="flex items-center gap-3 text-2xl font-bold text-gray-800 justify-center md:justify-start">
        <TrophyIcon className="w-8 h-8 text-blue-500" />
        <h2>Un Galardón Único</h2>
      </div>
      <p className="mt-4 text-lg text-gray-600">
        Este trofeo, diseñado en exclusiva para la I Carrera Fundación JLML, simboliza el esfuerzo y la pasión por el atletismo.
      </p>
      <p className="mt-4 text-gray-600">
        ¡Un recuerdo para toda la vida para los campeones de cada categoría!
      </p>
    </>
  );

  return (
    <Section id="trofeo" title="Trofeo Conmemorativo">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll animationClass="fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200/50 flex items-center justify-center p-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763572985538_trofeo.png?alt=media&token=5fe10966-06af-46bc-a028-2d99d4db02e3"
                title="Trofeo conmemorativo de la carrera"
                alt="Trofeo conmemorativo de la carrera"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center md:text-left">
              {descriptionContent}
            </div>

          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default TrophySection;
