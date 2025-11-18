import React, { useState } from 'react';
import Section from '../Section';
import AnimateOnScroll from '../AnimateOnScroll';
import { TshirtIcon } from '../Icons';

type ViewKey = 'front' | 'back' | 'left' | 'right';

const views: Record<ViewKey, { label: string; url: string }> = {
  front: { 
    label: 'Frontal', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763501585987_delante.png?alt=media&token=9657b351-6a32-45e9-8cc8-84dc2276e002' 
  },
  back: { 
    label: 'Espalda', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763501585987_detras.png?alt=media&token=57c0a47d-3b18-4d00-96c1-ac2815ce823c' 
  },
  left: { 
    label: 'Manga Izq.', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763501585987_manga_izquierda.png?alt=media&token=4837684c-e71a-479c-a1ec-e0b917fbdc98' 
  },
  right: { 
    label: 'Manga Der.', 
    url: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763501585987_manga_derecha.png?alt=media&token=df288b00-e57d-4fb0-abe6-b23b6875350a' 
  },
};

const TshirtSection: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewKey>('front');

  const descriptionContent = (
    <>
      <div className="flex items-center gap-3 text-2xl font-bold text-gray-800 justify-center md:justify-start">
        <TshirtIcon className="w-8 h-8 text-blue-500" />
        <h2>Diseño Exclusivo</h2>
      </div>
      <p className="mt-4 text-lg text-gray-600">
        Con tu inscripción recibirás esta camiseta técnica de alta calidad, perfecta para la carrera y tus entrenamientos. Un recuerdo exclusivo de un día inolvidable.
      </p>
    </>
  );

  return (
    <Section id="camiseta" title="Camiseta Técnica Oficial">
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll animationClass="fade-in-up">

          {/* Description for Mobile View */}
          <div className="md:hidden mb-8">
            {descriptionContent}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Viewer */}
            <div className="relative h-96 md:h-[32rem] flex items-center justify-center">
              {Object.entries(views).map(([key, view]) => (
                <img
                  key={key}
                  src={view.url}
                  alt={`Vista ${view.label} de la camiseta`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${activeView === key ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: activeView === key ? '150ms' : '0ms' }}
                />
              ))}
            </div>

            {/* Content for Desktop / Buttons for Mobile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              
              {/* Description for Desktop View */}
              <div className="hidden md:block">
                {descriptionContent}
              </div>

              {/* Buttons for All Views */}
              <div className="mt-8 p-2 bg-gray-100 rounded-full flex flex-wrap justify-center gap-2">
                {(Object.keys(views) as ViewKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveView(key)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform
                    ${activeView === key
                        ? 'bg-blue-600 text-white shadow-md scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {views[key].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default TshirtSection;