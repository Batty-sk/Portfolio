import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import "./Project.css"
import { PROJECTS } from '../constants'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { githubsocial, link } from '../assests'
import { clicksound } from '../assests'

const Carosuel = () => {
  const [animate, setAnimate] = useState(-1)
  useEffect(()=>{
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo('.projectds-cards',{
        x:-500,
      },
    {
      x:0,
      stagger:0.2,
      duration:0.5,
      ease:'shine',
      scrollTrigger:{
        trigger:'#projects',

      }

    })

  },[])

  const handleClick = (event,i)=>{
    console.log('clicked',event.target)
    // check for the card click.
   const click= new Audio('/ps4-select-button.mp3')
    click.play()
    console.log('brohh')
    setAnimate(i)
  }

  return (
    
    <div className='relative w-[90%] max-h-full  border border-white flex justify-center '>
        {PROJECTS.map((x,i)=>{
          return(
            <div key={i} onClick={(x)=>handleClick(x,i)}  className={`absolute cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-500 hover:scale-105  projects-cards w-80 flex flex-col justify-center shadow-md transform shadow-black items-center -translate-x-1/2 bg-zinc-200 rounded-md  pt-10  -translate-y-1/2 right-1/2 `} style={{
              left:`${60-(i*8)}%`,
              rotate:`-${i*5}deg`,
              zIndex:`${animate==i?99:50-(i*10)}`,
              
            }}>
             <div className='relative w-full h-full flex flex-col gap-3 justify-center items-center'>
              <div className='w-56 h-[16rem] block bg-zinc-200 '>
                <Image src={x.image} alt={x.name} height={'100%'} width={'100%'}></Image>
              </div>
              <div className='p-3 flex justify-center items-center gap-2'>
                <a href={x.github} target='_blank' className='w-fit h-fit transition-all duration-150 rounded-full hover:bg-zinc-300'>
                <Image src={githubsocial} width={30} height={30} alt='github'></Image>
                </a>
              <h3 className=' text-white bg-black rounded-md p-2 m-3 font-mono'>{x.name}</h3>
              <a href={x.link} target='_blank' className='w-fit h-fit transition-all duration-150 rounded-full hover:bg-zinc-300'>
              <Image  src={link} width={30} height={30} alt='github'></Image>
              </a>
  </div>
          </div>
          </div>)

        })}
       

    </div>
  )
}

export default Carosuel