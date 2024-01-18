import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

function Project() {
  return (
    <ParallaxLayer offset={2} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
        <div className='bg-slate-300 '>
            <h1> Projects</h1>
        </div>
        </ParallaxLayer>
      )
}

export default Project