import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useVisibleOnScreen = (): Dispatch<SetStateAction<HTMLDivElement | null>> => {
  const [htmlElement, setHtmlElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const aboutSectionEntry = entries.find(entry => htmlElement && entry.target === htmlElement);

      if (aboutSectionEntry) {
        console.log('entered bruh');
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    });

    if (htmlElement) {
      console.log('observing...');
      observer.observe(htmlElement);
    }

    return () => {
      if (htmlElement) {
        console.log('unobserving...');
        observer.unobserve(htmlElement);
      }
    };
  }, [htmlElement]);

  return setHtmlElement
};

export default useVisibleOnScreen;
