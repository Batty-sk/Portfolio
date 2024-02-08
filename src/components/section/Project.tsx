import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import me from '../../assests/me_in_space.png'
import Image from 'next/image'
import './Project.css'
import Star1 from '../../assests/stars.png'
import Star2 from '../../assests/stars2.png'
import { Grid } from '@mui/material'
import Project_struct from './Project_struct'
import project_cineflix from '../../assests/project_cineflix.svg'
import project_magic_cards from '../../assests/project_magic_cards.svg'
import project_video_conferencing from '../../assests/project_video_conferencing.svg'


const Project = () => {
  return (
    <>
    <ParallaxLayer offset={3} speed={1} style={{top:0,bottom:0,left:0,right:0,height:'200vh'}} >
    <div style={{background:'radial-gradient(circle, #2a1033, #000000)',backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100%',backgroundPositionY:'Bottom' }}>
      <h1 className='text-cyan-300 text-6xl text-center p-4 font-bold font-mono'>Projects</h1>
      <div className='h-[100%] w-[100%] mt-3 bg-transparent'>

    <Grid  container justifyContent={'space-evenly'}>
      <Project_struct img={project_cineflix.src} name='Movie Companion App'width={350} />

      <Project_struct img={project_magic_cards.src} name='Magic Cards' width={315} />
      <Project_struct img={project_video_conferencing.src} name='Video Conferencing App' width={355} />
      <Project_struct img={project_video_conferencing.src} name='TagMagnet' width={355} />

      </Grid>


      </div>
    </div>
    </ParallaxLayer>
    
    <ParallaxLayer offset={3} speed={0.5} style={{top:0,bottom:0,left:500,right:0,zIndex:9}} >
      <Image  src={me.src} height={50} width={100} alt='logo' className='animate-spin-float'/>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={3} style={{top:0,bottom:0,left:0,right:0,zIndex:0}} >
<div className='star' style={{backgroundImage:`url(${Star1.src})`,backgroundRepeat:'repeat',backgroundSize:'contain', height:'70%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={1} style={{top:300,bottom:0,left:0,right:0,zIndex:0}} >
<div className='star' style={{backgroundImage:`url(${Star1.src})`,backgroundRepeat:'repeat',backgroundSize:'contain', height:'50%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={2} style={{top:0,bottom:0,left:100,right:0,zIndex:0}} >
<div className='star-reverse ' style={{backgroundImage:`url(${Star2.src})`,backgroundRepeat:'repeat',backgroundSize:'contain', height:'70%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={2.5} style={{top:0,bottom:50,left:500,right:0,zIndex:0}} >
<div className='star-reverse ' style={{backgroundImage:`url(${Star2.src})`,backgroundRepeat:'repeat',backgroundSize:'contain', height:'70%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>

    <ParallaxLayer offset={3} speed={3} style={{top:0,bottom:0,left:1000,right:0,zIndex:0}} >
<div className='star-reverse ' style={{backgroundImage:`url(${Star1.src})`,backgroundRepeat:'repeat',backgroundSize:'contain', height:'60%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    

    </>

  )
}

export default Project