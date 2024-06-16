import React from 'react'
import "./Project.css"
import Carosuel from './Carosuel'
import Image from 'next/image'
import { mespace } from '../assests'

const Project = () => {
  return (
    <section className='h-[120vh] universe-background-rev ' id='projects'>
        <div className='pt-5 flex justify-center ocean gap-1'>
          <Image src={mespace} width={68} height={68} alt='.' className=''></Image>
            <h1 className='text-white text-4xl text-center font-mono font-bold first-letter:text-6xl'>PROJECTS</h1>
        </div>
        <div className='flex flex-col  justify-center items-center h-full pb-11 '>
        <Carosuel />

        </div>
        
    </section>
  )
}

export default Project