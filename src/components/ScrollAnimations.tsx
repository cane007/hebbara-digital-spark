import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [delay]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'animate-fade-in-up';
      case 'down':
        return 'animate-fade-in-down';
      case 'left':
        return 'animate-fade-in-left';
      case 'right':
        return 'animate-fade-in-right';
      case 'scale':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${getAnimationClass()} ${className}`}
      style={{
        opacity: 0,
        transform: direction === 'up' ? 'translateY(30px)' : 
                   direction === 'down' ? 'translateY(-30px)' :
                   direction === 'left' ? 'translateX(30px)' :
                   direction === 'right' ? 'translateX(-30px)' :
                   'scale(0.9)'
      }}
    >
      {children}
    </div>
  );
}