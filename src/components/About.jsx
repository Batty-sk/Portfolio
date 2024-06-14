import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
    if(!gsap)
        return
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.fromTo('.about-title',{ 
            y:100,
            ease:'back'
        },{y:0,
            opacity:1,
            duration:2,
            ease:'back',
            scrollTrigger:{
                trigger:'#about', //trigger the animation when about container is visible.
            }
        })
    },[])
  return (
    <section className='h-[500px] w-full text-black flex justify-center  bg-[#fffad7]' id='about'>
            <div className='about-title p-5 opacity-0'>
                <h1 className='text-amber-700 font-bold font-mono text-4xl'>About</h1>    
            </div>

            <div className='content-container flex justify-center gap-2'>
                    <div className='about-photo'>


                    </div>
                    <div className='about-skills'></div>
                    <div className='about-details'></div>
            </div>

    </section>
  )
}

export default About