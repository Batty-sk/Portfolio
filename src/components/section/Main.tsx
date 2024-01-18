"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Hero from './Hero'
import Project from './Project'
import About from './About'
function Main() {
  return (
    <Parallax  pages={3} style={{ top: '0', left: '0', height:'100%' }}  config={{ tension: 150, friction: 30 }}>
      <div className='relative flex items-start' style={{background:'aliceblue'}}>
        <div style={{background:'aliceblue'}}>
        <Hero />
        </div>
        <About />
         <Project/> 
        </div>  
        </Parallax>
  )
}

export default Main