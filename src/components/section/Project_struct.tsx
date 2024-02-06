import React from 'react'
import Image from 'next/image'
import project_cineflix from '../../assests/project_cineflix.png'


const Project_struct = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between'>
      <div style={{boxShadow:'0px 0px 8px white  '}}><Image src={project_cineflix.src} height={1} width={350} alt='' />
       </div>
        <h3 className='text-white font-mono '>Movie Companion App</h3>
        </div>
        <div className='text-white'>Description</div>
    </div>
  )
}

export default Project_struct