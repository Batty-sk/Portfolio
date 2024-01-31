import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import me from '../../assests/me_in_space.png'
import Image from 'next/image'
import './Project.css'
import Star1 from '../../assests/stars.png'
import Star2 from '../../assests/stars2.png'


const Project = () => {
  return (
    <>
    <ParallaxLayer offset={3} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
    <div style={{background:'black',backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100%',backgroundPositionY:'Bottom' }}>
      <h1 className='text-cyan-300 text-5xl text-center p-4 font-bold font-mono'>Projects</h1>
    </div>
    </ParallaxLayer>
    
    <ParallaxLayer offset={3} speed={0.5} style={{top:0,bottom:0,left:500,right:0,zIndex:999}} >
      <Image  src={me.src} height={50} width={100} alt='logo' className='animate-spin-float'/>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={3} style={{top:0,bottom:0,left:0,right:0,zIndex:10}} >
<div className='star' style={{backgroundImage:`url(${Star1.src})`,backgroundRepeat:'no-repeat',backgroundSize:'contain', height:'50%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={1} style={{top:300,bottom:0,left:0,right:0,zIndex:10}} >
<div className='star' style={{backgroundImage:`url(${Star1.src})`,backgroundRepeat:'no-repeat',backgroundSize:'contain', height:'50%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={2} style={{top:0,bottom:0,left:100,right:0,zIndex:10}} >
<div className='star ' style={{backgroundImage:`url(${Star2.src})`,backgroundRepeat:'no-repeat',backgroundSize:'contain', height:'70%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={2.5} style={{top:0,bottom:50,left:500,right:0,zIndex:10}} >
<div className='star ' style={{backgroundImage:`url(${Star2.src})`,backgroundRepeat:'no-repeat',backgroundSize:'contain', height:'70%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>

    <ParallaxLayer offset={3} speed={3} style={{top:0,bottom:0,left:1000,right:0,zIndex:10}} >
<div className='star ' style={{backgroundImage:`url(${Star1.src})`,backgroundRepeat:'no-repeat',backgroundSize:'contain', height:'60%',backgroundPositionY:'Bottom' }}></div>
    </ParallaxLayer>
    

    </>

  )
}

export default Project