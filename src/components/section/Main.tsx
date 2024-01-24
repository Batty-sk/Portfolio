"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useState,useEffect,useRef} from 'react'
import Hero from './Hero'
import Project from './Project'
import About from './About'

function Main() {
  const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      console.log('yes sir broothererere.')
      const aboutSectionEntry = entries.find(entry => entry.target === aboutSectionRef.current);
      
      if (aboutSectionEntry) {
        setIsAboutSectionVisible(aboutSectionEntry.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold based on your needs
    });

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
      console.log('first step done!')
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <Parallax  pages={3} style={{ top: '0', left: '0', height:'100%' }}  config={{ tension: 150, friction: 30 }}>
      <div className='relative flex items-start' style={{background:'aliceblue'}}>
        <div style={{background:'aliceblue'}}>
        <Hero />
        </div>

        <div ref={aboutSectionRef}>
        <About  />
        </div>
         <Project/> 
        </div>  
        </Parallax>
  )
}

export default Main