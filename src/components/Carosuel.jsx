import React from 'react'
import Image from 'next/image'
import { link,githubsocial } from '../assests'
import "./Project.css"
const Carosuel = () => {
  return (
    <div className='relative w-[90%] max-h-full  border border-white flex justify-center '>
        <div className='absolute  left-1/2 z-50 w-80 flex flex-col justify-center shadow-md shadow-black items-center -translate-x-1/2 bg-zinc-100 p-4 rounded-md  pt-10 to-v -translate-y-1/2 right-1/2'>
           <div className='relative w-full h-full flex flex-col justify-center items-center'>
            <div className='w-56 h-72 block bg-zinc-200 '>

            </div>
            <h3 className='p-3 text-white bg-black m-3 font-mono'>Video Conferencing App</h3>

        </div>
        </div>

    </div>
  )
}

export default Carosuel