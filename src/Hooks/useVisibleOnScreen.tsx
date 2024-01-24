import { useState, useEffect, Dispatch, SetStateAction } from 'react';
let count = 0
const useVisibleOnScreen = (Updatesection:any): Dispatch<SetStateAction<HTMLHeadingElement | null>> => {
  const [htmlElement, setHtmlElement] = useState<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const aboutSectionEntry = entries.find(entry => htmlElement && entry.target === htmlElement);

      if (aboutSectionEntry) {
        if (count > 1){
          Updatesection(2)
        }
        count+=1
        
        
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    });

    if (htmlElement) {
      console.log('observing...',htmlElement);
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
