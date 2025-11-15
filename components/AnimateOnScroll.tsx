import React, { useRef, useState, useEffect } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animationClass: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'scale-in';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  animationClass,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold, triggerOnce]);

  const initialClasses = `transition-all duration-700 ease-out`;
  const animationStateClasses = {
    'fade-in': {
      start: 'opacity-0',
      end: 'opacity-100',
    },
    'fade-in-up': {
      start: 'opacity-0 translate-y-8',
      end: 'opacity-100 translate-y-0',
    },
    'fade-in-left': {
        start: 'opacity-0 -translate-x-8',
        end: 'opacity-100 translate-x-0',
    },
    'scale-in': {
        start: 'opacity-0 scale-90',
        end: 'opacity-100 scale-100',
    }
  };

  const selectedAnimation = animationStateClasses[animationClass];
  
  const finalClassName = [
    className,
    initialClasses,
    isVisible ? selectedAnimation.end : selectedAnimation.start
  ].join(' ');

  return (
    <div ref={ref} className={finalClassName} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
