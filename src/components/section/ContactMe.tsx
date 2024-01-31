import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import "./ContactMe.css"
import moon from "../../assests/moon.png"
import Image from 'next/image'

const ContactMe = () => {
  return (
    <>
 <ParallaxLayer offset={4} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
    <div style={{background:'radial-gradient(circle, #2a1033, #000000)',backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100%',backgroundPositionY:'Bottom' }}>
      <h1 className='text-white text-6xl text-center p-4 font-bold font-mono'>Contact Me</h1>
    </div>
    </ParallaxLayer>
    
    <ParallaxLayer offset={4} speed={-2} style={{top:100,bottom:0,left:120,right:0,zIndex:999}} >
      <Image id='moon'  src={moon.src} height={0} width={160} alt='moon' />
    </ParallaxLayer>

    <ParallaxLayer offset={4} speed={0.2} style={{top:100,bottom:100,left:0,right:0,zIndex:999}} >
    <div className="min-h-screen  flex items-center justify-center">
  <div className="bg-transparent bg-opacity-85 p-10 rounded-lg shadow-lg max-w-md w-full" style={{border:'3px solid rosybrown'}}>
    <form action="#" method="POST" className="space-y-4">
      <div>
        <label htmlFor="email" className="block font-mono text-white mb-3">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="example@example.com" className="w-full border  rounded-md px-4 py-2 focus:outline-none focus:border-purple-500" />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-white mb-3">Message:</label>
        <textarea id="message" name="message" rows={4} placeholder="Write your message here" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500"></textarea>
      </div>
      <button type="submit" className="w-full  text-black py-2 px-4 rounded-md hover:bg-lime-400 transition duration-300 font-mono" style={{background:'bisque'}}>Send Message</button>
    </form>
  </div>
</div>;



    </ParallaxLayer>

    </>
  )
}

export default ContactMe