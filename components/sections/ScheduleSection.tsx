
import React from 'react';
import Section from '../Section';
import Timeline from '../Timeline';
import { CalendarIcon, FinishLineIcon } from '../Icons';
import type { TimelineEvent } from '../../types';

const ScheduleSection: React.FC = () => {
  const pistasUrl = 'https://maps.app.goo.gl/Zt69AzqNX9nNsMwj6';
  const paseoUrl = 'https://maps.app.goo.gl/6xj6pqpPzH5BN5KX9';

  const saturdayEvents: TimelineEvent[] = [
    { time: '17:00h - 20:00h', title: 'Recogida de dorsales', location: 'Pistas de San José', locationUrl: pistasUrl },
    { time: '18:00h', title: 'Charla con las Leyendas', description: 'Fermín Cacho, Martín Fiz, Abel Antón, Reyes Estévez y Jesús España.', location: 'Pistas de San José', locationUrl: pistasUrl },
    { time: '20:00h', title: 'Fin de las actividades del sábado' },
  ];

  const sundayEvents: TimelineEvent[] = [
    { time: '08:00h - 10:15h', title: 'Última recogida de dorsales', location: 'Pistas de San José', locationUrl: pistasUrl },
    { time: '10:00h', title: 'Salida Carrera Escolar', description: '800 metros, 5-10 años', location: 'Paseo de Linarejos', locationUrl: paseoUrl },
    { time: '10:15h', title: 'Salida Carrera Infantil', description: '2.600 metros, 10-16 años', location: 'Paseo de Linarejos', locationUrl: paseoUrl },
    { time: '10:45h', title: 'Entrega de premios', description: 'Categorías Escolar e Infantil', location: 'Paseo de Linarejos', locationUrl: paseoUrl },
    { time: '11:00h', title: 'Salida Carrera Popular', description: 'Modalidades 5k y 10k', location: 'Paseo de Linarejos', locationUrl: paseoUrl },
    { time: '12:00h', title: 'Entrega de premios', description: 'Categoría Popular', location: 'Paseo de Linarejos', locationUrl: paseoUrl },
    { time: '14:00h', title: 'Fin del evento' },
  ];
  
  return (
    <Section 
      id="programa"
      title="Programa del Evento"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-red-600 flex items-center justify-center gap-2"><CalendarIcon /> SÁBADO 22: LA PREVIA</h3>
          <Timeline events={saturdayEvents} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-600 flex items-center justify-center gap-2"><FinishLineIcon /> DOMINGO 23: ¡DÍA DE LA CARRERA!</h3>
          <Timeline events={sundayEvents} />
        </div>
      </div>
    </Section>
  );
};

export default ScheduleSection;