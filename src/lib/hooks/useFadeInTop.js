import { useEffect, useRef } from 'react';

const useFadeInTop = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.style.opacity = 0;
      element.style.transform = 'translateY(-10px)';
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            element.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
            observer.unobserve(element);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(element);
    }
  }, []);

  return elementRef;
};

export default useFadeInTop;