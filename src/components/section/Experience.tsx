import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { Grid } from '@mui/material'
import './Experience.css'

function Experience() {
  return (
    <ParallaxLayer offset={2} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
        <div className='bg-[#13553D] h-[100%] '>
            <h1 className='font-mono text-center text-6xl text-white p-4 font-bold'> Experience</h1>

          <Grid container justifyContent={'space-evenly'} margin={2}>

          <Grid item sm={4}>
            <div className=''>
              <h3 className='font-mono text-center xp-title text-white text-2xl'>Full Stack Intern</h3>
            </div>
          </Grid>
          <Grid item sm={6}>
            
          </Grid>

          </Grid>
        </div>
        </ParallaxLayer>
      )
}

export default Experience