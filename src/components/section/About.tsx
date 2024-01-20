import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import "./About.css"
const About = () => {
  return (
    <ParallaxLayer offset={1} speed={1} style={{top:0,bottom:0,left:0,right:0}} >

        <div className='bg-yellow-100 h-[100%] font-extrabold text-center flex justify-between relative'>

          <div className='frame'>

          </div>

          <div className='about-me font-mono w-[70%]'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, natus, alias modi at sapiente obcaecati libero saepe repudiandae odit dolorem enim ullam temporibus incidunt sequi, consequatur iste! Nobis neque deserunt exercitationem, dolor doloribus deleniti ratione, pariatur commodi hic quisquam temporibus labore assumenda amet distinctio incidunt voluptas, ipsa inventore quaerat officia! Accusantium porro dolor officia, eligendi id explicabo pariatur deleniti impedit cumque delectus numquam inventore quibusdam corrupti officiis quo, repellendus consectetur neque eos, voluptate culpa corporis odit ad? Voluptatum, magnam suscipit corporis similique fugit tenetur eligendi, placeat nostrum labore quas fuga dolorum! Voluptates ratione voluptatum vel itaque nihil, suscipit rem! Animi.</p>
          </div>


        </div>
        </ParallaxLayer>  )
}

export default About