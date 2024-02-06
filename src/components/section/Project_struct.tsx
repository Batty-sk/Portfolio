import React from 'react'
import Image from 'next/image'
import { Grid, Button } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link'

type prop={
  img:string,
  name:string
}
const Project_struct= ({img,name}:prop) => {  
  return (
    <Grid item md={5} >
    <div className='flex flex-col p-3 ' style={{boxShadow:'0px 0px 8px purple'}}>
        <div className='flex '>
      <div style={{boxShadow:'0px 5px 8px black  '}}><Image src={img} height={1} width={350} alt='' />
       </div>
       <div className='flex flex-col justify-center items-center'>
        <h2 className='text-white font-mono text-3xl ms-5 mb-3 '>{name}</h2>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkIcon />}
        >
          
        <Link  className='text-white bg- ' href={'https://cineflix.netlify.app'}>Watch</Link>
        </Button>
        </div>
        </div>
        <div className='text-white mt-3 text-justify font-mono'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quis id libero praesentium quaerat, officia error iusto excepturi exercitationem, qui sunt assumenda repellat iste repellendus? Earum doloremque ratione error id! Nobis cum ullam necessitatibus impedit odio? Fuga maxime ullam facere.</div>
    </div>
    </Grid>
  )
}

export default Project_struct