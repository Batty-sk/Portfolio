import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

const Project = () => {
  return (
    <ParallaxLayer offset={3} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
    <div>Project</div>
    </ParallaxLayer>
  )
}

export default Project