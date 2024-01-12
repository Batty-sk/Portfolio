import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

function Project() {
  return (
    <ParallaxLayer offset={1} speed={1} factor={1}>
        <div className='bg-slate-300 h-full'>
            <h1> Projects</h1>
        </div>
        </ParallaxLayer>
      )
}

export default Project