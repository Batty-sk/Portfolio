import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import night_sky from '../../assests/project_background.png'
import whale from '../../assests/whale.png'
import Image from 'next/image'

const Project = () => {
  return (
    <>
    <ParallaxLayer offset={3} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
    <div style={{backgroundImage:`url(${night_sky.src})`,backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100%',backgroundPositionY:'Bottom' }}>Project</div>
    </ParallaxLayer>
    <ParallaxLayer offset={3} speed={0.5} style={{right:0,bottom:50,top:50}}>
        <Image src={whale.src} alt='whale'  height={500} width={500}/>
    </ParallaxLayer>
    </>

  )
}

export default Project