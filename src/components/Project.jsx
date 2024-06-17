import React from 'react'
import "./Project.css"
import Carosuel from './Carosuel'
import Image from 'next/image'
import { mespace,rightArrow } from '../assests'

const Project = () => {
  return (
    <section className='md:h-[140vh]  h-screen universe-background-rev ' id='projects'>
        <div className=' flex justify-center ocean gap-1 pt-10'>
          <Image src={mespace} width={68} height={68} alt='.' className=''></Image>
            <h1 className='text-white md:text-4xl text-3xl text-center font-mono font-bold first-letter:text-6xl'>PROJECTS</h1>
        </div>
        <div className='flex justify-center  ' > <Image src={rightArrow} height={80} width={80} className='transition-all duration-150 cursor-pointer hover:scale-125 z-[99]' alt=''></Image></div>


        <div className='flex flex-col justify-center items-center h-full pb-11 md:-mt-32 -mt-20 '>

        <Carosuel />

        </div>
        
    </section>
  )
}

export default Project