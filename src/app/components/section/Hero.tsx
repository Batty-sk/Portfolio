"use client"
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Hero = () => {


  return (
      <>
    <Parallax  pages={2} style={{ top: '0', left: '0' }} >
      <ParallaxLayer offset={0} speed={2.5}  >
        <h1>Parallax</h1>
      </ParallaxLayer>


      <ParallaxLayer offset={1} speed={2.5}  >
        <h1>Projects</h1>
      </ParallaxLayer>
    </Parallax>
  
    </>
      

  )
}


export default Hero