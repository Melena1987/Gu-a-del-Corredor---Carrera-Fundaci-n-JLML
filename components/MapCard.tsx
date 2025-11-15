import React from 'react';
import { InformationCircleIcon, EyeIcon } from './Icons';

interface MapCardProps {
  title: string;
  description: string;
  imageUrl: string;
  courseMapUrl: string;
  onShowDetails: () => void;
}

const MapCard: React.FC<MapCardProps> = ({ title, description, imageUrl, courseMapUrl, onShowDetails }) => {
  return (
    <div className="group relative rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="relative p-6 flex flex-col justify-end h-72 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200 mt-1 mb-4">{description}</p>
        <div className="flex space-x-3">
          <button
            onClick={onShowDetails}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600/80 hover:bg-blue-500 backdrop-blur-sm border border-blue-500/50 text-white text-sm font-semibold rounded-lg transition-colors"
            aria-label={`Ver detalles de ${title}`}
          >
            <InformationCircleIcon className="w-5 h-5 mr-2" />
            Detalles
          </button>
          <a
            href={courseMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-600/80 hover:bg-gray-500 backdrop-blur-sm border border-gray-500/50 text-white text-sm font-semibold rounded-lg transition-colors"
            aria-label={`Ver mapa detallado de ${title}`}
          >
            <EyeIcon className="w-5 h-5 mr-2" />
            Ver Mapa
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapCard;