"use client"
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import sea from "../../assests/sea.png"
import sun from "../../assests/sun.png"
import Image from 'next/image'
import './Hero.css'

const Hero = () => {


  return (
      <>
      <ParallaxLayer offset={0} speed={-2} factor={1}>
      <Image src={sun.src} alt="sun" width={100} height={1} className='z-10' id='sun'></Image>

      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5} factor={1}>
        <div className='h-screen w-screen flex justify-center items-end'>
        <Image src={sea.src} alt="sea" width={10000} height={1} className='z-15 flex sea '></Image>

      </div>
      </ParallaxLayer>
  
    </>
      

  )
}


export default Hero