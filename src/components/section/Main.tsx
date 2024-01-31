"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useState,useEffect,useRef} from 'react'
import Hero from './Hero'
import Experience from './Experience'
import Header from '../Header'
import About from './About'
import Project from './Project'
import ContactMe from './ContactMe'

function Main() {
  const [currentSection,setcurrentSection] =useState(1)
 
  return (
    <>
     <Header section={currentSection} />

    <Parallax  pages={5} style={{ top: '0', left: '0', height:'100%' }}  config={{ tension: 150, friction: 30 }}>
        <Hero />
        <About  changeBackground={setcurrentSection} />
         <Experience/> 
         <Project/>
        <ContactMe />
        </Parallax>
        </>
  )
}

export default Main