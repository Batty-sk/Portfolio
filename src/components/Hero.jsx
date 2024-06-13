import React, { useEffect } from 'react'
import Image from "next/image"
import { sun } from '../assests'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
const Hero = () => {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.sun',{
            y:500,
            rotation: 180,
            ease:'power1.inOut',
            scrollTrigger:{
                trigger:'#hero', 
                start:'top top',
                end:'bottom top',
                scrub:true,
            }
        })
    })
  return (
    <section id='hero'  className='h-[50vh]'>
        <div className='sun-parent relative'>
            <div className='absolute top-0 left-0'>
                <Image src={sun} height={152} width={152} id='sun' priority className='sun' 
 alt='sun'/>
            </div>
        </div>
    </section>
)
}

export default Hero