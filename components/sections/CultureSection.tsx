import React from 'react';
import Section from '../Section';
import MuseumCard from '../MuseumCard';

const museums = [
  {
    title: 'Pósito de Linares',
    description: 'El Pósito, antiguo edificio del siglo XVIII recientemente rehabilitado, es un nuevo espacio turístico y cultural de la ciudad.',
  },
  {
    title: 'Museo de Raphael',
    description: 'El Museo de Raphael está situado en El Pósito, un bellísimo edificio del siglo XVIII que acoge la colección personal del artista.',
  },
  {
    title: 'Capilla y Cripta del Hospital de los Marqueses de Linares',
    description: 'El Hospital de los Marqueses de Linares, donde falleció el diestro Manolete, es un soberbio conjunto monumental de finales del siglo XIX.',
  },
  {
    title: 'Centro de Interpretación del Paisaje Minero',
    description: 'Ubicado en el antiguo muelle de Carga de la Estación de Madrid, el centro cuenta la historia de la minería en la comarca.',
  },
  {
    title: 'Museo Arqueológico Monográfico de Cástulo',
    description: 'Este emblemático edificio renacentista y nobiliario del siglo XVI, perteneciente a la familia Dávalos Biedma, alberga los hallazgos de la ciudad de Cástulo.',
  },
  {
    title: 'Conjunto Arqueológico de Cástulo',
    description: 'La ciudad ibero-romana de Cástulo, emplazada en la margen derecha del río Guadalimar, constituye uno de los yacimientos más importantes de la Península.',
  },
  {
    title: 'Casa-Museo Andrés Segovia',
    description: 'La voluntad expresa del artista universal Andrés Segovia de ser enterrado en su ciudad fue el germen de este museo, ubicado en el Palacio de los Orozco.',
  },
  {
    title: 'Taberna-Museo "Lagartijo"',
    description: 'Museo monográfico de la tauromaquia linarense. Debe su nombre al diestro Rafael Molina Lagartijo, torero cordobés apodado "El Califa".',
  },
];


const CultureSection: React.FC = () => {
  return (
    <Section 
      id="turismo"
      title="Turismo por Linares"
      parallaxBgImage="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763198129907_linares_carrera_fundaci_n_JLML.jpg?alt=media&token=b3f1d9od5-be17-4054-a754-f399636d5384"
    >
        <div className="text-center mb-12">
            <p className="text-lg text-white bg-red-600 inline-block p-4 rounded-lg font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
            ¡ACCESO GRATUITO a todos los museos de la ciudad el domingo 23!
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-white font-bold bg-black/50 p-2 rounded-md">
                La Delegación de Turismo de Linares ofrece un plan de recuperación inmejorable después de cruzar la meta. Presenta tu dorsal y disfruta del patrimonio de la ciudad.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-6xl mx-auto">
            {museums.map((museum) => (
            <MuseumCard
                key={museum.title}
                title={museum.title}
                description={museum.description}
            />
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