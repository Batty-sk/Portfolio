import React from 'react'
import "./Project.css"
import Carosuel from './Carosuel'

const Project = () => {
  return (
    <section className='h-screen universe-background ' id='projects'>
        <div className='pt-5'>
            <h1 className='text-white text-4xl text-center font-mono font-bold first-letter:text-6xl'>PROJECTS</h1>
        </div>
        <div className='flex flex-col  justify-center items-center h-full pb-11 '>
        <Carosuel />

        </div>
        
    </section>
  )
}

export default Project