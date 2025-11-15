import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import { LocationMarkerIcon } from './Icons';

// Define the event type
interface CountdownEvent {
  date: string;
  title: string;
  description?: string;
  location?: string;
  locationUrl?: string;
}

// Define the events in chronological order
const countdownEvents: CountdownEvent[] = [
  {
    date: "2025-11-22T17:00:00",
    title: "Recogida de dorsales",
    description: "Inicio del periodo de recogida",
    location: "Pistas de San José",
    locationUrl: "https://maps.app.goo.gl/Zt69AzqNX9nNsMwj6",
  },
  {
    date: "2025-11-22T18:00:00",
    title: "Charla con las Leyendas",
    description: "Con Fermín Cacho, Martín Fiz y más",
    location: "Pistas de San José",
    locationUrl: "https://maps.app.goo.gl/Zt69AzqNX9nNsMwj6",
  },
  {
    date: "2025-11-23T10:00:00",
    title: "Salida Carreras Menores",
    description: "Categorías Escolar e Infantil",
    location: "Paseo de Linarejos",
    locationUrl: "https://maps.app.goo.gl/6xj6pqpPzH5BN5KX9",
  },
  {
    date: "2025-11-23T10:15:00",
    title: "Fin de recogida de dorsales",
    description: "Última oportunidad",
    location: "Pistas de San José",
    locationUrl: "https://maps.app.goo.gl/Zt69AzqNX9nNsMwj6",
  },
  {
    date: "2025-11-23T11:00:00",
    title: "Salida Carrera Popular",
    description: "Modalidades 5k y 10k",
    location: "Paseo de Linarejos",
    locationUrl: "https://maps.app.goo.gl/6xj6pqpPzH5BN5KX9",
  },
  {
    date: "2025-11-23T12:00:00",
    title: "Entrega de premios",
    description: "Categoría Popular",
    location: "Paseo de Linarejos",
    locationUrl: "https://maps.app.goo.gl/6xj6pqpPzH5BN5KX9",
  },
];


const Header: React.FC = () => {
  const [nextEvent, setNextEvent] = useState<CountdownEvent | null>(null);
  
  useEffect(() => {
    const findNextEvent = () => {
      const now = new Date();
      const upcomingEvent = countdownEvents.find(event => new Date(event.date) > now);
      setNextEvent(upcomingEvent || null);
    };

    findNextEvent();
    const interval = setInterval(findNextEvent, 1000); 

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: '#info-esencial', text: 'Info Esencial' },
    { href: '#programa', text: 'Programa' },
    { href: '#recorridos', text: 'Recorridos' },
    { href: '#turismo', text: 'Turismo' },
  ];

  return (
    <header className="relative bg-gray-100 text-gray-800 py-4 md:py-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-75 bg-scroll md:bg-fixed" 
        style={{ 
          backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763198250981_Jesus_Espa_a_carrera_Linares.jpg?alt=media&token=eccc976a-686e-42c8-b0be-8c3d3ab16b23')",
        }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-gray-50/50 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation - Hidden on mobile */}
        <div className="hidden md:flex justify-end mb-4">
          <nav className="bg-white/60 backdrop-blur-sm p-1 rounded-full shadow-sm">
              <ul className="flex items-center space-x-1 sm:space-x-2">
                  {navLinks.map((link) => (
                  <li key={link.href}>
                      <a 
                      href={link.href} 
                      className="text-xs sm:text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/50"
                      >
                      {link.text}
                      </a>
                  </li>
                  ))}
              </ul>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="flex flex-col items-center lg:col-span-2 text-center">
             <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763196923876_logo_carrera_400x400.png?alt=media&token=c50ce165-3dfc-475f-a931-57b2e8f5ce7c" 
              alt="Logo Carrera Fundación JLML"
              className="mx-auto h-72 w-72 object-contain"
            />
            <h2 className="text-xl md:text-2xl font-semibold tracking-widest text-gray-500 uppercase">
              22 y 23 · Noviembre · 2025
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase my-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient-x">
              Linares
            </h1>
            <p className="text-2xl md:text-4xl font-bold tracking-wide">
              Guía del Corredor
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-600">I Carrera Fundación José Luis Martín López</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50">
            <h3 className="text-xl font-bold text-gray-700 mb-4 uppercase tracking-wider">
                {nextEvent ? 'Próximo evento' : 'Evento finalizado'}
            </h3>
            {nextEvent ? (
              <div className="w-full text-center">
                <Countdown targetDate={nextEvent.date} />
                <div className="mt-6 w-full border-t border-gray-300 pt-4">
                  <h4 className="text-lg font-bold text-gray-900">{nextEvent.title}</h4>
                  {nextEvent.description && <p className="text-base font-normal text-gray-600 mt-1">{nextEvent.description}</p>}
                  {nextEvent.location && (
                    <div className="flex items-center justify-center gap-1 mt-2 text-sm text-red-600 font-medium">
                        <LocationMarkerIcon className="w-4 h-4"/>
                        {nextEvent.locationUrl ? (
                          <a href={nextEvent.locationUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {nextEvent.location}
                          </a>
                        ) : (
                          <span>{nextEvent.location}</span>
                        )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-center text-xl font-bold text-blue-600">¡Gracias por participar!</p>
            )}
          </div>

        </div>
      </div>
       {/* fix: Removed 'jsx' prop from style tag to fix TypeScript error. This now uses a standard style tag for component-scoped CSS. */}
       <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;