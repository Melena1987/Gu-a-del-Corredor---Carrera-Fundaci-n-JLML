
import React from 'react';
import Section from '../Section';
import InfoCard from '../InfoCard';
import { IdentificationIcon, CheckroomIcon } from '../Icons';

const LogisticsSection: React.FC = () => {
  return (
    <Section 
      id="info-esencial"
      title="Logística Esencial del Corredor"
      parallaxBgImage="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763197858932_reyes_estevez_-_Carreralinares.jpeg?alt=media&token=637d8020-7502-4f12-9964-8462a56e0383"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <InfoCard icon={<IdentificationIcon />} title="Recogida de Dorsales">
          <p className="font-semibold text-gray-900">Ubicación:</p>
          <p className="mb-4">
            <a href="https://maps.app.goo.gl/Zt69AzqNX9nNsMwj6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Pistas de San José
            </a>
          </p>
          <p className="font-semibold text-gray-900">Horarios:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Sábado 22: 17:00h a 20:00h</li>
            <li>Domingo 23: 08:00h a 10:15h</li>
          </ul>
          <p className="mt-4 text-sm text-blue-600 font-medium">No olvides tu DNI/NIE. Para recoger el de otra persona, trae autorización firmada y fotocopia de su DNI.</p>
        </InfoCard>
        <InfoCard icon={<CheckroomIcon />} title="Servicio de Guardarropa">
          <p className="font-semibold text-gray-900">Ubicación:</p>
          <p className="mb-4 text-gray-600">"Guardarropa Estación de Madrid"</p>
          <p className="font-semibold text-gray-900">Horario:</p>
          <p className="text-gray-600">Domingo 23, de 10:00h a 13:30h.</p>
          <p className="mt-4 text-sm text-gray-500">Deja tus pertenencias de forma segura durante la carrera.</p>
        </InfoCard>
      </div>
    </Section>
  );
};

export default LogisticsSection;