import React, { useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROGRAMMING_SKILLS,SOCIAL_LINKS } from '../constants';


const About = () => {
    if(!gsap)
        return
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        
        gsap.fromTo('.social',{
            y:-200,
        },{
            y:0,
            stagger:0.3,
            delay:4,
            scrollTrigger:{
                trigger:'#about'
            }
        })
        gsap.fromTo('.programming-skill',{
            x:-200,
        },{
            x:0,
            stagger:0.5,
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
    <section className='h-screen w-full text-black flex flex-col justify-center items-center  bg-[#fffad7] overflow-hidden' id='about'>
            <div className='about-title p-5 opacity-0'>
                <h1 className='text-amber-700 font-bold font-mono text-4xl'>About</h1>    
            </div>

            <div className='content-container flex justify-center gap-5 '>
                    <div className='about-photo  flex flex-col  w-80'>
                        <div className='w-full relative z-10 bg-[#f7f1c6] h-full border'>
                            Photu</div>
            <div className='social-icons w-full '>
            <ul className='socials w-full p-3 flex justify-center'>
                {SOCIAL_LINKS.map((x,i)=>(
                    <li key={i} className='social relative cursor-pointer z-0'><Image src={x} height={30} width={30} alt='social'></Image></li>
                ))}
            </ul>
           </div>
                    </div>

                    <div className='about-skills'>
                        <ul className='flex flex-col gap-1 flex-wrap max-h-80 '>
                            {PROGRAMMING_SKILLS.map((x,i)=>(
                                <li key={i} className='programming-skill'>
                                    <Image src={x} height={40} width={40} alt={'skill'}></Image>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='about-details font-mono max-w-[50%] flex justify-center'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde at quod mollitia, natus incidunt aliquid placeat veritatis optio quos. Repudiandae, repellendus quis error eius non deleniti fuga architecto laboriosam obcaecati quisquam vitae eaque. Omnis enim soluta voluptates, animi dolorum laboriosam deserunt praesentium, labore incidunt sapiente facilis commodi pariatur quidem cupiditate vitae nemo nesciunt corporis magnam, natus at excepturi placeat ut! Ipsum tempora provident necessitatibus soluta eos excepturi quibusdam consequuntur voluptas? Amet, eos recusandae repudiandae iure aliquid doloribus nihil quos odio, dolor nam, hic facere aut ut aspernatur tempore magni ipsa necessitatibus exercitationem libero voluptatum corporis! Fugit cupiditate accusantium eaque nesciunt?
                    </div>
            </div>



    </section>
  )
}

export default About