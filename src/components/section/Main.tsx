"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useState,useEffect,useRef} from 'react'
import Hero from './Hero'
import Project from './Project'
import About from './About'

function Main() {



 
  return (
    <>
 
    <Parallax  pages={3} style={{ top: '0', left: '0', height:'100%' }}  config={{ tension: 150, friction: 30 }}>
        <Hero />
        <About  />
         <Project/> 
        </Parallax>
        </>
  )
}

export default Main