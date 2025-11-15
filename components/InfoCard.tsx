
import React from 'react';

interface InfoCardProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        {icon && <div className="text-blue-500 mr-4">{icon}</div>}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-700 space-y-2">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;