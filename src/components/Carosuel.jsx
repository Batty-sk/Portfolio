import React,{useEffect} from 'react'
import Image from 'next/image'
import "./Project.css"
import { PROJECTS } from '../constants'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
const Carosuel = () => {
  
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

  const handleClick = ()=>{
    // check for the card click.
  }
  const handleHover =()=>{

  }
  return (
    
    <div className='relative w-[90%] max-h-full  border border-white flex justify-center '>
        {PROJECTS.map((x,i)=>{
          return(
            <div key={i} onClick={handleClick} onMouseEnter={handleHover}  className={`absolute cursor-pointer transition-all duration-200 hover:shadow-md hover:shadow-orange-500  projects-cards w-80 flex flex-col justify-center shadow-md transform shadow-black items-center -translate-x-1/2 bg-zinc-200 rounded-md  pt-10  -translate-y-1/2 right-1/2 `} style={{
              left:`${60-(i*8)}%`,
              rotate:`-${i*5}deg`,
              zIndex:`${50-(i*10)}`,
              
            }}>
             <div className='relative w-full h-full flex flex-col gap-3 justify-center items-center'>
              <div className='w-56 h-[16rem] block bg-zinc-200 '>
                <Image src={x.image} alt={x.name} height={'100%'} width={'100%'}></Image>
              </div>
              <h3 className='p-3 text-white bg-black rounded-md m-3 font-mono'>{x.name}</h3>
  
          </div>
          </div>)

        })}
       

    </div>
  )
}

export default Carosuel