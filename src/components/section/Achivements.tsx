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
import c from '../../assests/c_lang.png'
import c__ from '../../assests/c_plus.png'
import python from '../../assests/python.svg'
import teamwork from '../../assests/teamwork.svg'
import computer_vision from '../../assests/computer_vision.svg'
import dsa_certificate from '../../assests/job_ready_boot.png'




function Achivements() {
  return (
    <ParallaxLayer offset={2} speed={1} style={{top:0,bottom:0,left:0,right:0}} id='achivements' >
        <div className='bg-[#13553D] h-[100%] '>
          <div className='flex justify-center p-2'>
            <Image src={title_badge.src} alt='badge' height={1} width={100}/>

            <h1 className='font-mono text-center text-6xl text-white p-4 font-bold'> Achivements</h1>
            </div>  
          <Grid container justifyContent={'space-evenly'} margin={2}>

          <Grid item sm={3} className='flex items-center'>
  
              <Image src={tag.src} alt='tag' height={1} width={50} />
                <h3 className=' font-mono items-center text-center xp-title text-white'><b className='text-9xl m-2'>500+</b></h3>
          </Grid> 
          <Grid item  sm={8}> 

              <Grid item sm={12}>
                <p className='font-mono text-white text-2xl'>
                  Coding Problems Solved across various platform including leetcode , hackerrank and offline.
                </p>
                </Grid>
                <Grid item sm={12} marginTop={10}>
                <div className='flex items-center'>
                <Image src={skill_ico.src} alt='skill' height={1} width={50} />
                <h2 className='font-mono font-bold text-white text-2xl'>Skills Used: </h2>
                <div className='flex bg-white p-3 rounded-md'>
                <ul className='font-bold flex flex-wrap items-center font-mono'>
                   
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
                    Algorithmic thinking |
                    </li>
                    <li >
                    <Image src={python.src} alt='prob' height={1} width={50} /> 
                    Python |
                    </li>
                    <li >
                    <Image src={c.src} alt='prob' height={1} width={50} /> 
                    C |
                    </li>
                    <li >
                    <Image src={c__.src} alt='prob' height={1} width={50} /> 
                    C++ 
                    </li>
                  </ul>  
                </div>
              </div>
              </Grid>
              </Grid>


  <Grid item sm={3} className='flex items-center' marginTop={10}>
  
  <Image src={tag.src} alt='tag' height={1} width={50} />
    <h3 className=' font-mono items-center text-center xp-title text-white'><b className='text-9xl m-2'>35+</b></h3>
</Grid> 
<Grid item  sm={8} marginTop={10}> 

  <Grid item sm={12}>
    <p className='font-mono text-white text-2xl'>
      <b>Projects</b> Created in Different Technologies
    </p>
    </Grid>
    <Grid item sm={12} marginTop={10}>
    <div className='flex items-center'>
    <Image src={skill_ico.src} alt='skill' height={1} width={50} />
    <h2 className='font-mono font-bold text-white text-2xl'>Skills Learned: </h2>
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
  </Grid>
  </Grid>
  </Grid>

</div>
        
        </ParallaxLayer>
      )
}

export default Achivements