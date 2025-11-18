import React, { useState } from 'react';
import MapCard from '../MapCard';
import MapDetailsModal from '../MapDetailsModal';
import AnimateOnScroll from '../AnimateOnScroll';

const description5k = 'Salida 11:00h desde el Paseo de Linarejos sentido ascendente, Plaza de la Constitución (carril junto a Jardines Santa Margarita), calle Julio Burell, Plaza Colón,calle Viriato, calle Yanguas Messías, calle Cánovas del Castillo, calle Yanguas Jiménez, calle General Echagüe, calle Huarte de San Juan, calle Iglesia, calle Carnecería, Plaza del Ayuntamiento (por el carril junto a escaleras del parking), Avenida de Andalucía sentido hacia el minero, vuelta en la rotonda de Plaza Aníbal e Himilce, Avenida Andalucía sentido Ayuntamiento, Plaza del Ayuntamiento (carril junto a Palacio Consistorial), Plaza Ramón y Cajal, Pasaje del Comercio, Corredera de San Marcos baja, 8 puertas, Corredera San Marcos alta, Plaza de la Constitución (carril junto a Farmacia), subida por el carril de sentido descendente del Paseo de Linarejos, Glorieta de América, Paseo de la Ermita hasta el Club 79, cambio de sentido Paseo de la Ermita hasta Glorieta de América, Bajada por el sentido ascendente del Paseo de Linarejos hasta el cambio de sentido tras la entrada al Parking, entrada por la fuente de la Paloma en la zona central peatonal del Paseo de Linarejos, Llegada a META';

const mapData = [
  {
    title: 'Recorrido Escolar (800m)',
    description: 'Un circuito para los más pequeños.',
    detailedDescription: 'Salida desde Paseo de Linarejos a la altura de la entrada a la Estación de Madrid, subida por el carril de sentido descendente hacia la Glorieta de América, cambio de sentido para coger la bajada por el sentido ascendente del Paseo de Linarejos hasta la llegada de Línea de META',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_escolar.png?alt=media&token=4a2973b4-f835-4f6d-9649-a056bd9df5c2',
    courseMapUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_escolar.png?alt=media&token=4a2973b4-f835-4f6d-9649-a056bd9df5c2',
    googleMapsUrl: 'https://www.google.com/maps/d/edit?mid=1NoNd3v3fSDoV890Pr09Jo9cGs6-yW4A&usp=sharing',
  },
  {
    title: 'Recorrido Infantil (2.600m)',
    description: 'El circuito para los futuros campeones.',
    detailedDescription: 'Salida desde el Paseo de Linarejos sentido ascendente, Plaza de la Constitución (carril junto a Jardines Santa Margarita), calle Julio Burell, Plaza Colón,calle Viriato, Isaac Peral, 8 puertas, Corredera San Marcos Alta, Plaza de la Constitución (carril junto a Farmacia), subida por el carril del Paseo de Linarejos sentido descendente, Glorieta de América, bajada por el carril del Paseo de Linarejos sentido ascendente, LLEGADA a meta.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_infantil.png?alt=media&token=d52a416e-da6f-45eb-a0a2-9c19cc0b731c',
    courseMapUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_infantil.png?alt=media&token=d52a416e-da6f-45eb-a0a2-9c19cc0b731c',
    googleMapsUrl: 'https://www.google.com/maps/d/edit?mid=1iSHhqT3EGUK99aswW3WYRPSnbh4vkQQ&usp=sharing',
  },
  {
    title: 'Recorrido 5K',
    description: 'Un circuito rápido y emocionante por el corazón de Linares.',
    detailedDescription: description5k,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_popular.png?alt=media&token=3ae970fc-92e9-4896-90ed-e5adf5ee4412',
    courseMapUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_popular.png?alt=media&token=3ae970fc-92e9-4896-90ed-e5adf5ee4412',
    googleMapsUrl: 'https://www.google.com/maps/d/edit?mid=1lC5lvjpehsXdI5h2aysZifj_bG50UxU&usp=sharing',
  },
  {
    title: 'Recorrido 10K',
    description: 'Dos vueltas al circuito de 5K para completar el desafío.',
    detailedDescription: `(2 Vueltas) ${description5k}`,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_popular.png?alt=media&token=3ae970fc-92e9-4896-90ed-e5adf5ee4412',
    courseMapUrl: 'https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763204960826_popular.png?alt=media&token=3ae970fc-92e9-4896-90ed-e5adf5ee4412',
    googleMapsUrl: 'https://www.google.com/maps/d/edit?mid=1RYbbZai_Iz6GOi0ZgLnU70uUo412qpM&usp=sharing',
  },
];

const MapsSection: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<typeof mapData[0] | null>(null);

  const handleShowDetails = (map: typeof mapData[0]) => {
    setSelectedMap(map);
  };

  const handleCloseModal = () => {
    setSelectedMap(null);
  };

  return (
    <>
      <section id="recorridos" className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animationClass="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-800">
              Recorridos
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mapData.map((map, index) => (
              <AnimateOnScroll key={map.title} animationClass="scale-in" delay={index * 150}>
                <MapCard 
                  {...map} 
                  onShowDetails={() => handleShowDetails(map)} 
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      {selectedMap && (
        <MapDetailsModal
          title={selectedMap.title}
          description={selectedMap.detailedDescription}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default MapsSection;