
import React from 'react';
import { InformationCircleIcon, EyeIcon, MapIcon } from './Icons';

interface MapCardProps {
  title: string;
  description: string;
  imageUrl: string;
  courseMapUrl: string;
  googleMapsUrl: string;
  onShowDetails: () => void;
}

const MapCard: React.FC<MapCardProps> = ({ title, description, imageUrl, courseMapUrl, googleMapsUrl, onShowDetails }) => {
  return (
    <div className="group relative rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {/* Changed gradient to white to support black text */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      
      <div className="relative p-5 flex flex-col justify-end h-[28rem] text-gray-900">
        <h3 className="text-2xl font-black leading-tight">{title}</h3>
        <p className="text-sm text-gray-700 font-medium mt-1 mb-auto pt-2">{description}</p>
        
        <div className="flex flex-col gap-3 mt-4">
            <button
                onClick={onShowDetails}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors shadow-md"
                aria-label={`Ver detalles de ${title}`}
            >
                <InformationCircleIcon className="w-5 h-5 mr-2" />
                Detalles
            </button>
            <div className="flex gap-3">
                <a
                    href={courseMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-lg transition-colors shadow-md"
                    aria-label={`Ver mapa detallado de ${title}`}
                >
                    <EyeIcon className="w-5 h-5 mr-2" />
                    Plano
                </a>
                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors shadow-md whitespace-nowrap"
                    aria-label={`Ver mapa interactivo en Google Maps de ${title}`}
                >
                    <MapIcon className="w-5 h-5 mr-2" />
                    G. Maps
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
