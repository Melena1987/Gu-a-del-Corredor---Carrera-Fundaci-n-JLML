
import React from 'react';
import Section from '../Section';
import { HeartIcon } from '../Icons';
import AnimateOnScroll from '../AnimateOnScroll';

const VolunteersSection: React.FC = () => {

  return (
    <Section 
      title="¡Gracias, Voluntarios!" 
      isWhiteBackground
    >
      <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animationClass="scale-in">
              <div className="flex justify-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full shadow-sm">
                      <HeartIcon className="w-12 h-12 text-red-500" />
                  </div>
              </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="fade-in-up" delay={100}>
              <p className="text-xl text-gray-700 mb-8 font-medium">
                  Vuestro esfuerzo, dedicación y sonrisa han hecho posible que este evento sea un éxito. Gracias por cuidar de los corredores y de cada detalle. ¡Sois el alma de la carrera!
              </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animationClass="fade-in-up" delay={200}>
              <div className="bg-blue-50 text-blue-800 px-6 py-4 rounded-lg font-semibold inline-block shadow-sm">
                ¡Nos vemos en la próxima edición!
              </div>
          </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default VolunteersSection;
