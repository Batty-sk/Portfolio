import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import "./ContactMe.css"

const ContactMe = () => {
  return (
    <>
   <ParallaxLayer offset={4} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
    <div id='contact' className='h-[100%] w-[100%]'>
    </div>
    </ParallaxLayer>

    </>
  )
}

export default ContactMe