"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Hero from './Hero'
import Project from './Project'
function Main() {
  return (
    <Parallax  pages={2} style={{ top: '0', left: '0' }} >
      <div className='relative ' style={{border:'5px solid black'}}>
        <Hero />
        </div>  
        <Project/>
        </Parallax>
  )
}

export default Main