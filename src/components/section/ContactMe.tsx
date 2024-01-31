import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import "./ContactMe.css"
import moon from "../../assests/moon.png"
import Image from 'next/image'

const ContactMe = () => {
  return (
    <>
 <ParallaxLayer offset={4} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
    <div style={{background:'radial-gradient(circle, #2a1033, #000000)',backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100%',backgroundPositionY:'Bottom' }}>
      <h1 className='text-white text-6xl text-center p-4 font-bold font-mono'>Contact Me</h1>
    </div>
    </ParallaxLayer>
    
    <ParallaxLayer offset={4} speed={-2} style={{top:100,bottom:0,left:10,right:0,zIndex:999}} >
      <Image id='moon'  src={moon.src} height={0} width={180} alt='moon' />
    </ParallaxLayer>

    </>
  )
}

export default ContactMe