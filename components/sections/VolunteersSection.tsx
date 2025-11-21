
import React from 'react';
import Section from '../Section';
import { HeartIcon, LocationMarkerIcon, ClockIcon } from '../Icons';
import AnimateOnScroll from '../AnimateOnScroll';

const VolunteersSection: React.FC = () => {
  const mapUrl = "https://www.google.es/maps/place/Estaci%C3%B3n+del+Paseo+%22Madrid%22/@38.1012826,-3.6338789,685m/data=!3m1!1e3!4m6!3m5!1s0xd6e9be8febe9bbd:0x5097390e14113321!8m2!3d38.1004552!4d-3.6313147!16s%2Fg%2F11krgwt985?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Section 
      title="¿Quieres ser Voluntario?" 
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
                  ¿Quieres vivir la carrera desde dentro y ayudar a la organización? ¡Tu ayuda es fundamental para nosotros!
              </p>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="fade-in-up" delay={200}>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 inline-block w-full max-w-xl">
                  <p className="text-lg text-gray-800 font-semibold mb-6">
                      Pues nos vemos el próximo:
                  </p>
                  <div className="flex flex-col gap-6 items-center">
                      <div className="flex items-center gap-3 text-gray-700 text-lg">
                          <ClockIcon className="w-8 h-8 text-blue-500" />
                          <span>Sábado 22 a las <span className="font-bold text-gray-900 text-xl">17:00h</span></span>
                      </div>
                      <a 
                          href={mapUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 bg-white text-red-600 hover:text-red-700 transition-all duration-300 text-lg font-bold px-6 py-3 rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:scale-105"
                      >
                          <LocationMarkerIcon className="w-6 h-6 group-hover:animate-bounce" />
                          <span>Estación de Madrid</span>
                      </a>
                  </div>
              </div>
          </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default VolunteersSection;
