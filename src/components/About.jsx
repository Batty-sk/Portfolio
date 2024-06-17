import React, { useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROGRAMMING_SKILLS,SOCIAL_LINKS } from '../constants';
import {me} from "../assests"


    const About = () => {
    if(!gsap)
        return
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        
        gsap.fromTo('.social',{
            x:-50,
        },{
            x:0,
            opacity:1,
            stagger:0.3,
            delay:3,
            ease:'circ',
            scrollTrigger:{
                trigger:'#about'
            }
        })
        gsap.fromTo('.programming-skill',{
            y:-50,
        },{
            y:0,
            stagger:0.2,
            duration:1,
            ease:'bounce',
            scrollTrigger:{
                trigger:'#about'
            }
        })
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
    <section className='md:h-screen h-fit p-1 w-full text-black flex flex-col justify-center items-center  bg-[#fffad7] overflow-hidden' id='about'>
            <div className='about-title p-5 opacity-0'>
                <h1 className='text-amber-700 font-bold font-mono md:text-5xl text-3xl'>About</h1>    
            </div>

            <div className='content-container flex md:flex-row flex-col justify-center items-center gap-5 '>
                    <div className='about-photo  flex flex-col  w-80 '>
                        <div className='w-full relative z-10  h-full flex justify-center  '>
                            <Image src={me} width={''} height={''} className='w-64 md:w-[400px] shadow-md shadow-blue-600' alt=''/>
                            </div>
  
                    </div>

                    <div className='about-skills h-full flex justify-center items-center'>
                        <ul className='flex md:flex-col gap-1 flex-wrap  max-h-80 justify-center items-center '>
                            {PROGRAMMING_SKILLS.map((x,i)=>(
                                <li key={i} className='programming-skill p-1 bg-zinc-50 border shadow-md rounded-full'>
                                    <Image src={x} height={40} width={40} alt={'skill'}></Image>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='about-details font-mono  md:max-w-[50%] max-w-[95%] flex flex-col justify-center'>
                        <p className='md:text-start text-justify leading-relaxed'>
                    I'm a <span className='font-bold md:text-3xl text-2xl text-yellow-800 '> Creative Developer </span> with a deep understanding of data structures, algorithms, system design, and full-stack technologies. I love bringing imaginative projects to life, blending technical expertise with innovative thinking. Whether it's building complex systems or crafting seamless user experiences, I'm passionate about creating solutions that are both functional and inspiring.
                    </p>

                    <div className='social-icons w-full '>
                            <ul className='socials w-full p-3 gap-1 flex justify-center'>
                {SOCIAL_LINKS.map((x,i)=>(
                    <li key={i} className='social opacity-0 rounded-full p-1  bg-zinc-50 border shadow-md relative cursor-pointer z-0'><Image src={x} height={30} width={30} alt='social'></Image></li>
                ))}
            </ul>
           </div>
                        </div>
            </div>



    </section>
  )
}

export default About