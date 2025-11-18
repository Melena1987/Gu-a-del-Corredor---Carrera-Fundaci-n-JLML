import React from 'react';
import Section from '../Section';
import MuseumCard from '../MuseumCard';
import AnimateOnScroll from '../AnimateOnScroll';

const museums = [
    {
        title: 'El Pósito y Museo de Raphael',
        description: 'Antiguo edificio del s. XVIII. Descubre la esencia de Linares en su Centro de Interpretación y la colección personal del artista en su museo.',
        location: 'Calle Iglesia, 5',
        hours: '10-14h y 17-19h',
    },
    {
        title: 'Capilla y Cripta del Hospital de los Marqueses',
        description: 'Soberbio edificio neogótico que acoge el imponente mausoleo de mármol de los Marqueses de Linares, benefactores de la ciudad.',
        location: 'Paseo de los Marqueses, s/n',
        hours: '10-14h y 17-19h',
    },
    {
        title: 'Centro de Interpretación del Paisaje Minero',
        description: 'Ubicado en el antiguo muelle de Carga de la Estación de Madrid, cuenta la historia de la minería con utensilios de la época y muestras de minerales.',
        location: 'Paseo de Linarejos, s/n',
        hours: '10-13:30h',
    },
    {
        title: 'Museo Arqueológico Monográfico de Cástulo',
        description: 'Ubicado en un palacio del s. XVII, ofrece una visión completa de la antigua ciudad ibero-romana de Cástulo a través de sus hallazgos.',
        location: 'Calle General Echagüe, 2',
        hours: '09-15h',
    },
    {
        title: 'Conjunto Arqueológico de Cástulo',
        description: 'A 5 km de Linares, Cástulo es la joya arqueológica por la que pasaron íberos, cartagineses y romanos. Un lugar de princesas y guerreros.',
        location: 'Carretera JV-3003',
        hours: '09-15h',
    },
    {
        title: 'Casa-Museo Andrés Segovia',
        description: 'Ubicada en el Palacio de los Orozco (s. XVII), acerca al visitante a la figura del guitarrista universal a través de sus recuerdos personales.',
        location: 'Calle Cánovas del Castillo, 59',
    },
    {
        title: 'Taberna-Museo "Lagartijo"',
        description: 'En un edificio de 1795, este restaurante-museo es un espacio monográfico de la tauromaquia linarense con una excelente cocina tradicional.',
        location: 'Calle Ventanas, 27',
    },
];


const CultureSection: React.FC = () => {
  return (
    <Section 
      id="turismo"
      title="Turismo por Linares"
      parallaxBgImage="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763198129907_linares_carrera_fundaci_n_JLML.jpg?alt=media&token=b3f1d9od5-be17-4054-a754-f399636d5384"
    >
        <AnimateOnScroll animationClass="fade-in-up">
            <div className="text-center mb-12">
                <p className="text-lg text-white bg-red-600 inline-block p-4 rounded-lg font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
                ¡ACCESO GRATUITO a todos los museos de la ciudad el domingo 23!
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-white font-bold bg-black/50 p-2 rounded-md">
                    La Delegación de Turismo de Linares ofrece un plan de recuperación inmejorable después de cruzar la meta. Presenta tu dorsal y disfruta del patrimonio de la ciudad.
                </p>
            </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
            {museums.map((museum, index) => (
             <AnimateOnScroll key={museum.title} animationClass="scale-in" delay={(index % 3) * 100}>
                <MuseumCard
                    title={museum.title}
                    description={museum.description}
                    location={museum.location}
                    hours={museum.hours}
                />
            </AnimateOnScroll>
            ))}
        </div>
        <div className="text-center mt-12">
            <a 
                href="https://www.turismolinares.es/museos-y-centros-de-interpretacion/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 font-bold hover:underline"
            >
                Más info en Turismo Linares.
            </a>
        </div>
    </Section>
  );
};

export default CultureSection;