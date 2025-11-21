import React from 'react';
import Section from '../Section';
import Timeline from '../Timeline';
import { CalendarIcon, FinishLineIcon } from '../Icons';
import type { TimelineEvent } from '../../types';
import AnimateOnScroll from '../AnimateOnScroll';

const ScheduleSection: React.FC = () => {
  const paseoUrl = 'https://www.google.es/maps/place/Estaci%C3%B3n+del+Paseo+%22Madrid%22/@38.1012826,-3.6338789,685m/data=!3m1!1e3!4m6!3m5!1s0xd6e9be8febe9bbd:0x5097390e14113321!8m2!3d38.1004552!4d-3.6313147!16s%2Fg%2F11krgwt985?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D';

  const saturdayEvents: TimelineEvent[] = [
    { time: '17:00h a 20:00h', title: 'Recogida de dorsales', location: 'Estación de Madrid', locationUrl: paseoUrl },
    { time: '17:00h a 19:30h', title: 'Charla con las Leyendas', description: 'Fermín Cacho, Martín Fiz, Abel Antón, Reyes Estévez y Jesús España.', location: 'Centro de Interpretación de la Minería', locationUrl: paseoUrl },
    { time: '20:00h', title: 'Fin de las actividades del sábado' },
  ];

  const sundayEvents: TimelineEvent[] = [
    { time: '08:00h a 10:15h', title: 'Última recogida de dorsales', location: 'Salida/Meta (Estación de Madrid)', locationUrl: paseoUrl },
    { time: '10:00h', title: 'Salida Carrera Escolar', description: '800 metros, 5-10 años', location: 'Salida/Meta (Estación de Madrid)', locationUrl: paseoUrl },
    { time: '10:15h', title: 'Salida Carrera Infantil', description: '2.600 metros, 10-16 años', location: 'Salida/Meta (Estación de Madrid)', locationUrl: paseoUrl },
    { time: '10:45h', title: 'Entrega de premios', description: 'Categorías Escolar e Infantil', location: 'Salida/Meta (Estación de Madrid)', locationUrl: paseoUrl },
    { time: '11:00h', title: 'Salida Carrera Popular', description: 'Modalidades 5k y 10k', location: 'Salida/Meta (Estación de Madrid)', locationUrl: paseoUrl },
    { time: '12:30h', title: 'Entrega de premios', description: 'Categoría Popular', location: 'Salida/Meta (Estación de Madrid)', locationUrl: paseoUrl },
  ];
  
  return (
    <Section 
      id="programa"
      title="Programa del Evento"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <AnimateOnScroll animationClass="fade-in-up">
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-red-600 flex items-center justify-center gap-2"><CalendarIcon /> SÁBADO 22: LA PREVIA</h3>
            <Timeline events={saturdayEvents} />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="fade-in-up" delay={200}>
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-600 flex items-center justify-center gap-2"><FinishLineIcon /> DOMINGO 23: ¡DÍA DE LA CARRERA!</h3>
            <Timeline events={sundayEvents} />
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default ScheduleSection;