import React, { useState, useMemo } from 'react';
import Section from '../Section';
import { SearchIcon } from '../Icons';

// Dummy data until the real list is provided
const runners = [
  { bib: 1, name: 'Fermín Cacho Ruiz' },
  { bib: 2, name: 'Martín Fiz' },
  { bib: 3, name: 'Abel Antón Rodrigo' },
  { bib: 4, name: 'Reyes Estévez' },
  { bib: 5, name: 'Jesús España' },
  { bib: 101, name: 'María García Pérez' },
  { bib: 102, name: 'Juan Rodríguez López' },
  { bib: 103, name: 'Ana Martínez Sánchez' },
  { bib: 104, name: 'David Fernández González' },
  { bib: 105, name: 'Laura Gómez Ruiz' },
];

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
      parallaxBgImage="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763222472228_martin_fiz_carrera_linares.jpeg?alt=media&token=978de1cf-a7ce-4050-8ef1-41844dd90b09"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-white mb-8 bg-black/40 backdrop-blur-sm p-4 rounded-xl font-medium">
          Introduce tu nombre o apellidos para localizar tu número de dorsal. La búsqueda se activará al introducir al menos 3 caracteres.
        </p>
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

        <div className="mt-8 text-left">
          {query.trim().length >= 3 && filteredRunners.length > 0 && (
            <div className="space-y-4">
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
