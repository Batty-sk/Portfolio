import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import me from '../../assests/me_in_space.png'
import Image from 'next/image'
import './Project.css'

const Project = () => {
  return (
    <>
    <ParallaxLayer offset={3} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
    <div style={{background:'black',backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100%',backgroundPositionY:'Bottom' }}>Project</div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={0.5} style={{top:0,bottom:0,left:0,right:0}} >
      <Image  src={me.src} height={50} width={100} alt='logo' className='animate-spin-float'/>
      
    </ParallaxLayer>
    

    </>

  )
}

export default Project