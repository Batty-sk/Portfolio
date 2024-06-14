import React, { useEffect } from 'react'
import Image from 'next/image'
import { cloud } from '../assests'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const WorkExperience = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.to('#cloud1',
    {      
        x:-1000,
        duration: 1,
        ease:'sine.in',
        scrollTrigger:{
            trigger:'#w-experience',
            start: 'top center+=300px',
            end: 'bottom top',
            scrub: true,
        }
    })

    gsap.to('#cloud2',
        {      
            x:1000,
            duration: 1,
            ease:'sine.in',
            scrollTrigger:{
                trigger:'#w-experience',
                start: 'top center+=300px',
                end: 'bottom top',
                scrub: true,
            }
        })
    },[])
  return (
    <section className='h-screen' id='w-experience'>
        <div className='relative flex justify-center'>
    <div className='text-black text-center p-3'>
        <h1 className='text-3xl font-mono font-bold first-letter:text-blue-600 first-letter:text-5xl'>Work Experience</h1>
        </div>
        <div className='clouds absolute left-[58%] transform -translate-x-1/2  -translate-y-5' id='cloud2'>
            <Image className='cloud' src={cloud} height={250} width={250} alt='cloud' >
            </Image>
        </div>
        <div className='clouds absolute left-[43%] transform -translate-x-1/2  -translate-y-5' id='cloud1'>
            <Image className='cloud' src={cloud} height={250} width={250} alt='cloud' >
            </Image>
        </div>
        </div>
    </section>
  )
}

export default WorkExperience