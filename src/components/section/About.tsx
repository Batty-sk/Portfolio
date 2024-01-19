import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

const About = () => {
  return (
    <ParallaxLayer offset={1} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
        <div className='bg-yellow-100 h-[100%] font-extrabold text-center '>
            <h1> About</h1>
        </div>
        </ParallaxLayer>  )
}

export default About