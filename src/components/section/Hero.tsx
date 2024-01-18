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

      <ParallaxLayer offset={0} speed={2} style={{top:0,bottom:0,left:0,right:0,border:'2px solid black',zIndex:9}} >
        {/* Content you want to move left and right */}
        <div className='flex flex h-[100%] justify-center items-center'>
        <h1 className='text-9xl text-center border font-extrabold '>
          Hi,
        </h1>
        <h1 className='text-8xl text-center border font-extrabold'>Im Saurav Kumar</h1>
        </div>
      </ParallaxLayer>

         <ParallaxLayer offset={0} speed={1.5} style={{top:0,bottom:0,border:'5px solid red',zIndex:'10'}} id='sea'>
        <div className='flex justify-center items-center br ' >
{/*           <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est illo, dolorem harum ab eum amet alias. Vel sint quo adipisci, officia, doloribus autem reiciendis qui veniam, magnam odit numquam! Aut nemo doloribus minus temporibus consequatur eos porro harum placeat impedit veritatis dicta at, sequi ipsam aspernatur in ullam, possimus dolor delectus beatae ea culpa voluptatem vero fuga quidem. Saepe sed esse laboriosam tempore fugit, quas voluptas, aspernatur reprehenderit obcaecati recusandae dolorem natus illo dolores, at cupiditate molestias suscipit dolore quo. Doloribus odio molestias excepturi? Iusto nam amet delectus, et quis exercitationem ratione voluptate, harum nesciunt ullam porro eligendi reprehenderit maxime?</h2>
 */}         <Image src={sea.src} alt="sea" width={10000} height={1} className=''></Image>
       </div>
      </ParallaxLayer>

    </>
      

  )
}


export default Hero