import React from 'react';
import { LocationMarkerIcon } from './Icons';

interface InterestPointCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  mapUrl: string;
}

const InterestPointCard: React.FC<InterestPointCardProps> = ({ icon, title, description, mapUrl }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-5 shadow-lg flex flex-col h-full">
      <div className="flex items-center mb-3">
        <div className="text-blue-500 mr-4">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-auto pt-3">
        <a 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-md"
          aria-label={`Ver en Google Maps: ${title}`}
        >
          <LocationMarkerIcon className="w-5 h-5 mr-2" />
          Ver en Mapa
        </a>
      </div>
    </div>
  );
};

export default InterestPointCard;
