import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

function Experience() {
  return (
    <ParallaxLayer offset={2} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
        <div className='bg-[#13553D] h-[100%] '>
            <h1 className='font-mono text-center text-6xl text-white p-4 font-bold'> Experience</h1>

            <div className='flex h-[100%] justify-evenly '>
              <div>
                <h3 className='text-white font-mono'>Full Stack Intern </h3>
              </div>
                <ul>
                  <li></li>
                  <li></li>
                </ul>

            </div>
        </div>
        </ParallaxLayer>
      )
}

export default Experience