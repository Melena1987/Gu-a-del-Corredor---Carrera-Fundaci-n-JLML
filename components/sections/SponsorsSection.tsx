import React from 'react';
import Section from '../Section';
import AnimateOnScroll from '../AnimateOnScroll';

const SponsorsSection: React.FC = () => {
  return (
    <Section title="Gracias por hacerlo posible.">
        <div className="max-w-5xl mx-auto">
            {/* Main Sponsors */}
            <div className="grid grid-cols-2 gap-8 md:gap-12 items-center mb-16">
                <AnimateOnScroll animationClass="fade-in" className="flex justify-center">
                    <a href="https://fundacionjoseluismartinlopez.com/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web de la Fundación José Luis Martín López" className="transition-transform duration-300 hover:scale-110">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763196923875_logo_Fundaci_n_400x400.png?alt=media&token=21a2fe64-515b-485b-9cde-29860125300f" 
                            alt="Logo Fundación José Luis Martín López"
                            className="max-h-36 object-contain"
                        />
                    </a>
                </AnimateOnScroll>
                <AnimateOnScroll animationClass="fade-in" delay={150} className="flex justify-center">
                     <a href="https://www.ciudaddelinares.es/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web del Ayuntamiento de Linares" className="transition-transform duration-300 hover:scale-110">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763203011775_ayto_linares_400x400.png?alt=media&token=86835336-b0ed-43a9-bb8e-34c92eee34bc" 
                            alt="Logo Ayuntamiento de Linares"
                            className="max-h-36 object-contain"
                        />
                    </a>
                </AnimateOnScroll>
            </div>

            {/* Secondary Sponsors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 items-center">
                <AnimateOnScroll animationClass="fade-in" delay={0} className="flex justify-center">
                    <a href="https://www.silbonshop.com/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web de Silbon" className="transition-transform duration-300 hover:scale-110">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763202698814_silbon_carrera_linares_400x400.png?alt=media&token=dc98b2c9-123c-42a2-9ff8-710f2963f8da" 
                            alt="Logo Silbon"
                            className="max-h-8 object-contain"
                        />
                    </a>
                </AnimateOnScroll>
               <AnimateOnScroll animationClass="fade-in" delay={100} className="flex justify-center">
                    <a href="https://www.caixabank.es/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web de CaixaBank" className="transition-transform duration-300 hover:scale-110">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763202848945_Caixabank_400x400.png?alt=media&token=c6370af7-ce18-4c74-9b9f-39365eb6b22c" 
                            alt="Logo CaixaBank"
                            className="max-h-10 object-contain"
                        />
                    </a>
                </AnimateOnScroll>
                <AnimateOnScroll animationClass="fade-in" delay={200} className="flex justify-center">
                    <a href="https://mlcenergia.com/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web de MLC Energía" className="transition-transform duration-300 hover:scale-110">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763196923875_Logo_MLC_color_400x400.png?alt=media&token=2af27515-20ab-4d50-a7fc-7d6b552c1f16" 
                            alt="Logo MLC"
                            className="max-h-10 object-contain"
                        />
                    </a>
                </AnimateOnScroll>
                <AnimateOnScroll animationClass="fade-in" delay={300} className="flex justify-center">
                    <a href="https://fundacionsierrablanca.com/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web de Fundación Sierra Blanca" className="transition-transform duration-300 hover:scale-110">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763196923876_Findacion-Sierra-Blanca-Logo-1_400x400.png?alt=media&token=5b1c64a6-c8cc-4a05-9d4b-bba0f7cf2d3e" 
                            alt="Logo Fundación Sierra Blanca"
                            className="max-h-8 object-contain"
                        />
                    </a>
                </AnimateOnScroll>
            </div>
        </div>
    </Section>
  );
};

export default SponsorsSection;
