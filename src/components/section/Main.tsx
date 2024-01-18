"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Hero from './Hero'
import Project from './Project'
import About from './About'
function Main() {
  return (
    <Parallax  pages={2} style={{ top: '0', left: '0' }}  config={{ tension: 150, friction: 30 }}>
      <div className='relative flex items-start'>
        <Hero />
        <About />
      {/*   <Project/> */}
        </div>  
        </Parallax>
  )
}

export default Main