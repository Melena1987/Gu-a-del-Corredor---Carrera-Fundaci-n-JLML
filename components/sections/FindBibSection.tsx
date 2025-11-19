import React, { useState, useMemo } from 'react';
import Section from '../Section';
import { SearchIcon } from '../Icons';
import AnimateOnScroll from '../AnimateOnScroll';
import { runners } from '../data/runners';

const FindBibSection: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredRunners = useMemo(() => {
    if (!query || query.trim().length < 3) {
      return [];
    }
    const lowercasedQuery = query.toLowerCase().trim();
    return runners.filter(runner => 
      runner.name.toLowerCase().includes(lowercasedQuery)
    );
  }, [query]);

  return (
    <Section
      id="dorsal"
      title="Encuentra tu Dorsal"
      parallaxBgImage="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763198250981_Jesus_Espa_a_carrera_Linares.jpg?alt=media&token=eccc976a-686e-42c8-b0be-8c3d3ab16b23"
    >
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll animationClass="fade-in-up">
            <p className="text-lg text-white mb-8 bg-black/40 backdrop-blur-sm p-4 rounded-xl font-medium">
            Introduce tu nombre o apellidos para localizar tu número de dorsal. La búsqueda se activará al introducir al menos 3 caracteres.
            </p>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="fade-in-up" delay={150}>
            <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej: Martín Fiz"
                className="w-full px-5 py-3 text-lg bg-white text-gray-900 placeholder-gray-500 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                aria-label="Buscar dorsal por nombre"
            />
            <div className="absolute top-0 right-0 mt-3 mr-5">
                <SearchIcon className="w-6 h-6 text-gray-400" />
            </div>
            </div>
        </AnimateOnScroll>

        <div className="mt-8 text-left">
          {query.trim().length >= 3 && filteredRunners.length > 0 && (
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {filteredRunners.map((runner) => (
                <div key={runner.bib} className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md flex justify-between items-center border-l-4 border-blue-500">
                  <p className="text-lg font-medium text-gray-800">{runner.name}</p>
                  <div className="text-2xl font-black text-blue-600 bg-gray-100 px-4 py-1 rounded-md">
                    {runner.bib}
                  </div>
                </div>
              ))}
            </div>
          )}
          {query.trim().length >= 3 && filteredRunners.length === 0 && (
            <div className="text-center bg-yellow-100/90 backdrop-blur-sm border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg">
              <p className="font-bold">No se encontraron resultados</p>
              <p>Revisa el nombre introducido o contacta con la organización.</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default FindBibSection;