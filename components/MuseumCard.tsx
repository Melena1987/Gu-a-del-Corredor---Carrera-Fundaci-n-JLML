
import React from 'react';

interface MuseumCardProps {
  title: string;
  description: string;
}

const MuseumCard: React.FC<MuseumCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col group bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          <span className="w-1 h-5 bg-blue-600 mr-3"></span>
          {title}
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MuseumCard;