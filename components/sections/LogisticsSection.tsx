import React from 'react';
import Section from '../Section';
import InfoCard from '../InfoCard';
import { IdentificationIcon, CheckroomIcon } from '../Icons';
import AnimateOnScroll from '../AnimateOnScroll';

const LogisticsSection: React.FC = () => {
  return (
    <Section 
      id="info-esencial"
      title="Logística Esencial del Corredor"
      parallaxBgImage="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763197858932_reyes_estevez_-_Carreralinares.jpeg?alt=media&token=637d8020-7502-4f12-9964-8462a56e0383"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AnimateOnScroll animationClass="scale-in">
          <InfoCard icon={<IdentificationIcon />} title="Recogida de Dorsales">
            <p className="font-semibold text-gray-900">Ubicación:</p>
            <p className="mb-4">
              <a href="https://www.google.es/maps/place/Estaci%C3%B3n+del+Paseo+%22Madrid%22/@38.1012826,-3.6338789,685m/data=!3m1!1e3!4m6!3m5!1s0xd6e9be8febe9bbd:0x5097390e14113321!8m2!3d38.1004552!4d-3.6313147!16s%2Fg%2F11krgwt985?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Salida/Meta (Estación de Madrid)
              </a>
            </p>
            <p className="font-semibold text-gray-900">Horarios:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Sábado 22: 17:00h a 20:00h</li>
              <li>Domingo 23: 08:00h a 10:15h</li>
            </ul>
            <a href="#dorsal" className="mt-4 block text-center bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors duration-300">
              ¿Sabes ya cuál es tu número? ¡Encuéntralo aquí!
            </a>
            <p className="mt-4 text-sm text-blue-600 font-medium">No olvides tu DNI/NIE. Para recoger el de otra persona, trae autorización firmada y fotocopia de su DNI.</p>
          </InfoCard>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="scale-in" delay={200}>
          <InfoCard icon={<CheckroomIcon />} title="Servicio de Guardarropa">
            <p className="font-semibold text-gray-900">Ubicación:</p>
            <p className="mb-4">
              <a href="https://www.google.es/maps/place/Estaci%C3%B3n+del+Paseo+%22Madrid%22/@38.1012826,-3.6338789,685m/data=!3m1!1e3!4m6!3m5!1s0xd6e9be8febe9bbd:0x5097390e14113321!8m2!3d38.1004552!4d-3.6313147!16s%2Fg%2F11krgwt985?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Junto a Salida/Meta (Estación de Madrid)
              </a>
            </p>
            <p className="font-semibold text-gray-900">Horario:</p>
            <p className="text-gray-600">Domingo 23, de 10:00h a 12:30h.</p>
            <p className="mt-4 text-sm text-blue-600 font-medium">Recibirás una pulsera/pegatina con tu número de dorsal para identificar tus pertenencias.</p>
          </InfoCard>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default LogisticsSection;