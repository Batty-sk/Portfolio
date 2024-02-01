import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { Grid } from '@mui/material'
import './Achivements.css'
import Image from 'next/image'
import title_badge from '../../assests/badge.svg'
import tag from '../../assests/achivement_tag.svg'
import skill_ico from '../../assests/skill.svg'


function Achivements() {
  return (
    <ParallaxLayer offset={2} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
        <div className='bg-[#13553D] h-[100%] '>
          <div className='flex justify-center p-2'>
            <Image src={title_badge.src} alt='badge' height={1} width={100}/>

            <h1 className='font-mono text-center text-6xl text-white p-4 font-bold'> Achivements</h1>
            </div>  
          <Grid container justifyContent={'space-evenly'} margin={2}>

          <Grid item sm={12}>
              <div className='w-[100%] flex  flex-col'>
                <div className='flex'>
              <Image src={tag.src} alt='tag' height={1} width={50} />
                <h3 className='flex font-mono items-center text-center xp-title text-white text-2xl'>Solved <b className='text-5xl m-2'>500+</b> Coding problems across various platforms including LeetCode, HackerRank, and offline.  </h3>
                </div>
              <div className='flex justify-center items-center'>
                <Image src={skill_ico.src} alt='skill' height={1} width={50} />
                <h2 className='font-mono font-bold text-white text-2xl'>Skills Learned: </h2>
              </div>
              </div>
          </Grid>
          <Grid item sm={6}>
            
          </Grid>

          </Grid>
        </div>
        </ParallaxLayer>
      )
}

export default Achivements