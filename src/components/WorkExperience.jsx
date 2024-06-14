import React, { useEffect,useRef } from 'react'
import Image from 'next/image'
import { cloud } from '../assests'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { WORK_EXPERIENCE } from '../constants';
import { Dancing_Script } from 'next/font/google'


const DS_font = Dancing_Script({ subsets: ['latin'] ,weight: ['400', '700']})

const WorkExperience = () => {

    const containerRef = useRef(null);


    useEffect(()=>{
        if(containerRef == null)
            return
        gsap.registerPlugin(ScrollTrigger);

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
        gsap.to('#rounded-me',
            {      
                y:containerRef.current.offsetHeight,
                duration: 1,
                ease:'sine.in',
                scrollTrigger:{
                    trigger:'#w-experience',
                    start: 'top center+=100px',
                    end: 'bottom top',
                    scrub: true,
                }
            })
            gsap.fromTo('.exp-items',{
                y:150,
            },
                {     
                    y:0, 
                    opacity:1,
                    duration: 1,
                    stagger:0.5,
                    ease:'elastic.out',
                    scrollTrigger:{
                        trigger:'#w-experience',
                        start: 'top center+=100px',
                        end: 'bottom top+=200px',
                        scrub:true,
                    }
                })
    

    },[])
  return (
    <section className='h-screen' id='w-experience' ref={containerRef}>
        <div className='relative flex justify-center'>
    <div className='text-black text-center p-3'>
        <h1 className='text-4xl font-mono font-bold first-letter:text-blue-600 first-letter:text-5xl'>Work Experience</h1>
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

        <div className='relative flex justify-center items-center h-full'>
            <div className='absolute left-1/2 -translate-x-1/2 border top-0 bottom-0 w-2 border-black border-x-4 z-[-99]'></div>
            <div className='absolute left-1/2 -translate-x-1/2 border top-0 bottom-0 block h-20 w-20 rounded-full bg-cyan-400 z-[-97]' id='rounded-me'></div>
            <div className='exp-container h-full w-full  flex flex-col justify-around items-center'>
                {WORK_EXPERIENCE.map((exp,i)=>{
                    if(i){
                    return <div className='text-start relative z-[-98] opacity-0 exp-items h-32 w-[50%]  shadow-md shadow-green-100 text-black rounded-3xl border bg-zinc-100 ml-[50%] pl-8' key={i}>
                       <div className=' p-3 text-3xl'> 
                        <h3 className='font-mono font-bold'>{exp.role}</h3>
                       </div>

                    </div>
                    }
                 
                    return <div className='text-end opacity-0 relative z-[-98] exp-items h-32 w-[50%] shadow-md shadow-orange-100 text-black rounded-md border bg-zinc-100 mr-[50%] pr-8' key={i}>
                    <div className=' p-3  text-3xl'> 
                     <h3 className='font-mono font-bold'>{exp.role}</h3>
                    </div>

                 </div>
                }
                )}
            </div>
        </div>
    </section>
  )
}

export default WorkExperience