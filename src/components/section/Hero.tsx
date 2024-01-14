"use client"
import React from 'react'
import {  ParallaxLayer } from '@react-spring/parallax'
import sea from "../../assests/sea.png"
import sun from "../../assests/sun.png"
import Image from 'next/image'
import './Hero.css'

const Hero = () => {


  return (
      <>
      <ParallaxLayer offset={0} speed={5} >
      <Image src={sun.src} alt="sun" width={180} height={1} className='z-10' id='sun'></Image>

      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2} style={{left:'20%', top:'12%',zIndex:'1000'}}>
        <div >
          <h1 className='' style={{display:'relative',fontSize:'150px', fontWeight:'bolder',zIndex:'1000'}}>Saurav Kumar</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5} >
        <div className='h-screen w-screen flex justify-center items-end'>
        <Image src={sea.src} alt="sea" width={10000} height={1} className='z-15 flex sea '></Image>

      </div>
      </ParallaxLayer>
  
    </>
      

  )
}


export default Hero