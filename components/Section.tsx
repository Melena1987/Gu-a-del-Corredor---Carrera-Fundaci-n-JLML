
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  parallaxBgImage?: string;
  isWhiteBackground?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, parallaxBgImage, isWhiteBackground }) => {
  // Use more padding for sections with a background to make them stand out.
  // This also creates visual separation between sections.
  const sectionPadding = parallaxBgImage ? "py-20 md:py-24" : "py-12 md:py-20";
  const sectionBgClass = parallaxBgImage ? "" : (isWhiteBackground ? "bg-white" : "bg-gray-50");

  return (
    <section id={id} className={`relative overflow-hidden ${sectionPadding} ${sectionBgClass}`}>
      {parallaxBgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-75 bg-fixed"
            style={{
              backgroundImage: `url(${parallaxBgImage})`,
              zIndex: -2,
            }}
          ></div>
          {/* Apply the same gradient overlay as the hero section */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-gray-50/50 to-transparent" style={{ zIndex: -1 }}></div>
        </>
      )}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animationClass="fade-in-up">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 ${parallaxBgImage ? 'text-white' : ''}`}>
            {title}
          </h2>
        </AnimateOnScroll>
        {children}
      </div>
    </section>
  );
};

export default Section;
