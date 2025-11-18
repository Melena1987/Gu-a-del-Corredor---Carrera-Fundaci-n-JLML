
import React from 'react';
import { ClockIcon, LocationMarkerIcon } from './Icons';

interface MuseumCardProps {
  title: string;
  description: string;
  location?: string;
  hours?: string;
}

const MuseumCard: React.FC<MuseumCardProps> = ({ title, description, location, hours }) => {
  return (
    <div className="flex flex-col h-full group bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          <span className="w-1 h-5 bg-blue-600 mr-3"></span>
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          {description}
        </p>
      </div>
      {(location || hours) && (
        <div className="border-t border-gray-200/70 mt-auto px-4 py-3 text-xs text-gray-600 space-y-2">
          {location && (
            <div className="flex items-center gap-2">
              <LocationMarkerIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>{location}</span>
            </div>
          )}
          {hours && (
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>{hours}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MuseumCard;