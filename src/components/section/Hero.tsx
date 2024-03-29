"use client"
import React from 'react'
import {  ParallaxLayer } from '@react-spring/parallax'
import sea from "../../assests/sea.png"
import sun from "../../assests/sun.png"
import Image from 'next/image'
import './Hero.css'
import { url } from 'inspector'

const Hero = () => {


  return (
      <>
      <ParallaxLayer offset={0} speed={-3}>
      <Image src={sun.src} alt="sun" width={180} height={1} className='z-10' id='sun'></Image>

      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2} style={{top:0,bottom:0,left:0,right:0,zIndex:9}} >
        {/* Content you want to move left and right */}
     {/*    <div className='flex  h-[100%] justify-center items-center'>
        <h1 className='text-9xl text-center  font-extrabold '>
          Hi,
        </h1>
        <h1 className='text-8xl text-center  font-extrabold'>Im Saurav Kumar</h1>
        </div> */}
      </ParallaxLayer>

         <ParallaxLayer offset={0.5} speed={1.5} style={{top:0,bottom:0,zIndex:'10'}} id='sea'>
        <div className='flex h-[100%] justify-center items-center  wave-animation ' id='sea-img' style={{backgroundImage:`url(${sea.src})`,backgroundAttachment:'scroll',backgroundRepeat:'no-repeat',backgroundSize:'cover ' }} >
       </div>
      </ParallaxLayer>

    </>
      

  )
}


export default Hero