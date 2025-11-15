
import React from 'react';
import type { TimelineEvent } from '../types';
import { ClockIcon, LocationMarkerIcon } from './Icons';


interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative border-l-2 border-gray-300 ml-4 pl-8 py-4">
      {events.map((event, index) => (
        <div key={index} className="mb-10 last:mb-0">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-2 border-gray-50"></div>
          <div className="flex items-center gap-2 mb-1">
            <ClockIcon className="w-5 h-5 text-gray-500"/>
            <time className="text-sm font-semibold text-gray-700">{event.time}</time>
          </div>
          <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
          {event.description && <p className="text-base font-normal text-gray-600">{event.description}</p>}
          {event.location && (
            <div className="flex items-center gap-1 mt-1 text-sm text-red-600 font-medium">
                <LocationMarkerIcon className="w-4 h-4"/>
                {event.locationUrl ? (
                  <a href={event.locationUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {event.location}
                  </a>
                ) : (
                  <span>{event.location}</span>
                )}
            </div>
           )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;