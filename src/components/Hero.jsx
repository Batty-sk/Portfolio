import React, { useEffect } from 'react';
import Image from 'next/image';
import { sun, ocean } from '../assests'; // Adjust the path as per your project structure
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import './Hero.css';
import { Dancing_Script } from 'next/font/google'


const DS_font = Dancing_Script({ subsets: ['latin'] ,weight: ['400', '700']})


const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#sun', {
      y: 500,
      rotation: 180,
      ease: 'power1.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(
        '.text-container',
        {
          y: 500,
          bottom:-500,
          opacity: 0, 
        },
        {
          y: 0, 
          bottom:0,
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out', 

        }
      );
  
  }, []);

  return (
    <section id='hero' className='h-screen relative  flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0 z-0'>
        <Image src={sun} height={152} width={152} id='sun' priority className='sun' alt='sun' />
      </div>

      <div className='text-container opacity-0'>
        <h1 className='text-7xl font-bold font-mono first-letter:text-blue-500 text-black'>HI,
              <span className={`${DS_font.className} text-3xl text-black font-extralight`}> Iam</span>
        </h1>
            <h1 className={`${DS_font.className} text-5xl text-black`}>Saurav Kumar</h1>
      </div>
      <div className='absolute bottom-0 left-0 right-0 z-1 w-full'>
        <div className='ocean '>
          <Image src={ocean}  objectFit='cover'  alt='ocean'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
