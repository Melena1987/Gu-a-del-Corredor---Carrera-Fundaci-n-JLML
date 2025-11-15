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
    <header className="relative bg-gray-100 text-gray-800 pt-4 pb-8 md:py-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-75 bg-fixed" 
        style={{ 
          backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763225153741_martin_fiz_carrera_linares_2.jpeg?alt=media&token=8a23d0be-2b65-4d9c-a8e6-12172dce911e')",
        }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/95 via-gray-50/80 to-white/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation - Hidden on mobile */}
        <div className="hidden md:flex justify-end items-center space-x-3 mb-4">
          <nav className="bg-white/60 backdrop-blur-sm p-1 rounded-full shadow-sm">
              <ul className="flex items-center space-x-1 sm:space-x-2">
                  {navLinks.map((link) => (
                      <li key={link.href}>
                          <a 
                            href={link.href} 
                            className="text-gray-800 hover:text-blue-600 hover:bg-white/50 text-xs sm:text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-full"
                          >
                            {link.text}
                          </a>
                      </li>
                  ))}
              </ul>
          </nav>
          <a 
            href="#dorsal"
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs sm:text-sm font-medium transition-colors duration-300 px-4 py-2 rounded-full shadow-sm"
          >
            Dorsal
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          
          <div className="flex flex-col items-center justify-center lg:col-span-2 text-center min-h-[380px] md:min-h-[450px]">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763203728184_Carrera_Fundaci_n_JLML_Linares_400x400.png?alt=media&token=0068077d-4b37-4189-96a1-94be18e7d8cf" 
              alt="Logo Carrera Fundación JLML"
              className="h-24 md:h-28 w-auto mb-3 animate-fade-in-up"
              style={{ animationDelay: '0s' }}
            />
            
            {/* 1. Guía del Corredor */}
            <p className="text-2xl md:text-4xl font-bold tracking-wide animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Guía del Corredor
            </p>
            
            {/* 2. LINARES */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase my-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient-x animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Linares
            </h1>

            {/* 3. I Carrera... */}
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              I Carrera Fundación José Luis Martín López
            </p>

            {/* 4. Date */}
            <h2 className="mt-1 text-xl md:text-2xl font-semibold tracking-widest text-gray-500 uppercase animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              22 y 23 · Noviembre · 2025
            </h2>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/40 animate-scale-in" style={{ animationDelay: '0.8s' }}>
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
            <a href="#dorsal" className="mt-6 block w-full text-center bg-blue-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              Encuentra tu Dorsal
            </a>
          </div>

        </div>
      </div>
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
            animation: scaleIn 0.8s ease-out forwards;
            opacity: 0;
        }
      `}</style>
    </header>
  );
};

export default Header;