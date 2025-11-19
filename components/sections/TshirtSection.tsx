import React from 'react';
import Section from '../Section';
import AnimateOnScroll from '../AnimateOnScroll';
import { TshirtIcon } from '../Icons';

const TshirtSection: React.FC = () => {

  const descriptionContent = (
    <>
      <div className="flex items-center gap-3 text-2xl font-bold text-gray-800 justify-center md:justify-start">
        <TshirtIcon className="w-8 h-8 text-blue-500" />
        <h2>Diseño Exclusivo 3D</h2>
      </div>
      <p className="mt-4 text-lg text-gray-600">
        Con tu inscripción recibirás esta camiseta técnica de alta calidad, perfecta para la carrera y tus entrenamientos. Un recuerdo exclusivo de un día inolvidable.
      </p>
      <p className="mt-6 text-sm text-gray-500 italic bg-gray-100 p-3 rounded-lg border border-gray-200">
        <strong>Consejo:</strong> Puedes interactuar con el modelo 3D. Mantén pulsado y arrastra para rotar la camiseta. Usa la rueda del ratón o pellizca en el móvil para hacer zoom.
      </p>
    </>
  );

  return (
    <Section id="camiseta" title="Camiseta Técnica Oficial">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll animationClass="fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200/50">
              <iframe
                src="https://previo.teamergy.es/TEAMERGY/CARRERALINARES/15120/"
                title="Visor 3D de la Camiseta Oficial"
                className="w-full h-full border-0"
                allowFullScreen
              ></iframe>
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

export default TshirtSection;