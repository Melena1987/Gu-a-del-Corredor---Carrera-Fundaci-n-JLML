import React from 'react';
import Section from '../Section';
import AnimateOnScroll from '../AnimateOnScroll';
import InterestPointCard from '../InterestPointCard';
import { IdentificationIcon, CheckroomIcon, FinishLineIcon, CarIcon } from '../Icons';

const points = [
    {
        icon: <CarIcon className="w-8 h-8" />,
        title: 'Zona de Parking',
        description: 'Parking público junto a las pistas',
        mapUrl: 'https://maps.app.goo.gl/WhkGjo5yhe4f7rNe7'
    },
    {
        icon: <IdentificationIcon className="w-8 h-8" />,
        title: 'Recogida de Dorsales',
        description: 'Pistas de Atletismo San José',
        mapUrl: 'https://www.google.es/maps/place/Pistas+Azules/@38.0963615,-3.6294718,685m/data=!3m1!1e3!4m14!1m7!3m6!1s0xd6e9b2c06d2b52b:0x5c22e6ee4d94e74b!2sPolideportivo+San+Jos%C3%A9++Centro+de+Recepci%C3%B3n+de+Deportistas!8m2!3d38.0973062!4d-3.6274671!16s%2Fg%2F11ckwc4bdm!3m5!1s0xd6e9b08b04576ad:0xb2cf4281d9fa8db1!8m2!3d38.0965447!4d-3.6272797!16s%2Fg%2F11sgdf7lyt?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        icon: <CheckroomIcon className="w-8 h-8" />,
        title: 'Servicio de Guardarropa',
        description: 'Junto a la zona de Salida/Meta',
        mapUrl: 'https://www.google.es/maps/place/Estaci%C3%B3n+del+Paseo+%22Madrid%22/@38.1012826,-3.6338789,685m/data=!3m1!1e3!4m6!3m5!1s0xd6e9be8febe9bbd:0x5097390e14113321!8m2!3d38.1004552!4d-3.6313147!16s%2Fg%2F11krgwt985?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        icon: <FinishLineIcon className="w-8 h-8" />,
        title: 'Salida / Meta',
        description: 'Paseo de Linarejos (Estación de Madrid)',
        mapUrl: 'https://www.google.es/maps/place/Estaci%C3%B3n+del+Paseo+%22Madrid%22/@38.1012826,-3.6338789,685m/data=!3m1!1e3!4m6!3m5!1s0xd6e9be8febe9bbd:0x5097390e14113321!8m2!3d38.1004552!4d-3.6313147!16s%2Fg%2F11krgwt985?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D'
    },
];

const PointsOfInterestSection: React.FC = () => {
    return (
        <Section
            id="puntos-interes"
            title="Puntos de Interés"
            parallaxBgImage="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763224938691_abel-anton.jpg?alt=media&token=122f9d13-c364-4752-8e52-d3b48e36489d"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {points.map((point, index) => (
                    <AnimateOnScroll key={point.title} animationClass="scale-in" delay={index * 150}>
                        <InterestPointCard {...point} />
                    </AnimateOnScroll>
                ))}
            </div>
        </Section>
    );
};

export default PointsOfInterestSection;