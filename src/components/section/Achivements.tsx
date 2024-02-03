import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { Grid } from '@mui/material'
import './Achivements.css'
import Image from 'next/image'
import title_badge from '../../assests/badge.svg'
import tag from '../../assests/achivement_tag.svg'
import skill_ico from '../../assests/skill.svg'
import problem_sol from '../../assests/problem_solving.svg'
import data_structures from '../../assests/dsa.svg'
import complexity from '../../assests/complexity.svg'
import algorithm from '../../assests/algorithm_thinking.svg'
import python from '../../assests/python.svg'
import teamwork from '../../assests/teamwork.svg'
import computer_vision from '../../assests/computer_vision.svg'



function Achivements() {
  return (
    <ParallaxLayer offset={2} speed={1} style={{top:0,bottom:0,left:0,right:0}} id='achivements' >
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
              <div className='flex justify-center items-center mt-3'>
                <div className='flex items-center'>
                <Image src={skill_ico.src} alt='skill' height={1} width={50} />
                <h2 className='font-mono font-bold text-white text-2xl'>Skills Learned: </h2>
                </div>
                <div className='flex bg-white p-3 rounded-md'>
                <ul className='font-bold flex items-center font-mono'>
                    <li >
                    <Image src={problem_sol.src} alt='prob' height={1} width={50} /> 
                    Python |
                    </li>
                    <li >
                    <Image src={data_structures.src} alt='prob' height={1} width={50} /> 
                    Data structures |
                    </li>
                    <li >
                    <Image src={complexity.src} alt='prob' height={1} width={50} /> 
                    Complexity Analysis | 
                    </li>
                    <li >
                    <Image src={algorithm.src} alt='prob' height={1} width={50} /> 
                    Algorithmic thinking 
                    </li>
                  </ul>  
                </div>
              </div>
              </div>
          </Grid>
          <Grid item sm={12} marginTop={10}>
          <div className='w-[100%] flex  flex-col'>
                <div className='flex'>
              <Image src={tag.src} alt='tag' height={1} width={50} />
                <h3 className='flex font-mono items-center text-center xp-title text-white text-2xl'>Secured<b className='text-5xl m-2'>3rd </b>Position in <b className='m-2'>Hackathon Event</b> Organized By Chandigarh University in 2021.</h3>
                </div>
              <div className='flex justify-center items-center mt-3'>
                <div className='flex items-center'>
                <Image src={skill_ico.src} alt='skill' height={1} width={50} />
                <h2 className='font-mono font-bold text-white text-2xl'>Skills Learned: </h2>
                </div>
                <div className='flex bg-white p-3 rounded-md'>
                <ul className='font-bold flex items-center font-mono'>
                    <li >
                    <Image src={python.src} alt='prob' height={1} width={50} /> 
                    Python |
                    </li>
                    <li >
                    <Image src={computer_vision.src} alt='prob' height={1} width={50} /> 
                    Computer vision |
                    </li>
                    <li >
                    <Image src={teamwork.src} alt='prob' height={1} width={50} /> 
                    Teamwork | 
                    </li>
                  </ul>
               </div>
    
              </div>
              </div>

              <div className='w-[100%] flex mt-3  flex-col'>
                <div className='flex'>
              <Image src={tag.src} alt='tag' height={1} width={50} />
                <h3 className='flex font-mono items-center text-center xp-title text-white text-3xl'><b>Certifications:</b></h3>
                </div>
              <div className='flex justify-center items-center mt-3'>
                  
               </div>
    
              </div>
          </Grid>

          </Grid>
        </div>
        </ParallaxLayer>
      )
}

export default Achivements