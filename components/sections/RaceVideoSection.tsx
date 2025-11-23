
import React from 'react';
import Section from '../Section';
import AnimateOnScroll from '../AnimateOnScroll';

const RaceVideoSection: React.FC = () => {
  return (
    <Section 
      title="Carrera 10K Completa" 
      isWhiteBackground
    >
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll animationClass="fade-in-up">
          <p className="text-center text-gray-600 mb-6 text-lg">
            ¡Revive la emoción! Aquí tienes la retransmisión completa de la carrera de 10K.
          </p>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl border border-gray-200">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/pPtblgwBgZI?si=ZqO9VMLlSIAQbzpz&start=1489"
              title="Video de la Carrera 10K Completa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default RaceVideoSection;
