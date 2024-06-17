import React, { useState } from 'react'
import { moon } from '../assests'
import gsap from 'gsap'
import { useEffect } from 'react'
import Image from 'next/image'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useIsMobile from '../useIsMobile'

const Contact = () => {
    const isMobile = useIsMobile()
    const [name,setName] = useState('')
    const [email,setEmail] =useState('')
    const [message,setMessage ] =useState('')
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.img-container',{
            y:-200
        },{
            y:0,
            opacity:1,  
            stagger:0.5,
            duration:1,
            ease:'elastic.out',
            scrollTrigger:{
                trigger:'#contact',
                start: 'top center+=100px',
                end: 'bottom top+=200px',
                scrub:true,
            }
        })
    },[])

     const handleSubmit = (e) => {
      e.preventDefault();
      const subject = `Message From ${email}`;
      const body = `name: ${name} Message: ${message}`;
      const mailtoLink = `mailto:saorav.skumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };
    
  return (
    <section className='h-fit pt-20 pb-10 universe-background ' id='contact'>
    <div className='relative '>
    <div className='md:text-4xl text-2xl font-mono text-white text-center font-bold p-5 relative first-letter:text-5xl first-letter:font-extrabold z-10'>Contact Me</div>
    {isMobile?null:<div className='img-container opacity-0 absolute top-10 left-10 z-0 '>
        <Image src={moon} alt='moon' height={''} width={''} className='md:h-[200px] md:w-[200px] h-[150px] w-[150px] '></Image>
    </div>}

     <div className='contact-form flex justify-center'>
     <form onSubmit={handleSubmit} className="bg-[#ffffff15] text-white  relative z-20 font-mono md:w-[70%] w-[90%] p-8 rounded-lg shadow-lg max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 rounded  bg-zinc-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            id="name"
            value={name}
            onChange={(x)=>{setName(x.currentTarget.value)}}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 rounded bg-zinc-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email"
            id="email"
            value={email}
            onChange={(x)=>{setEmail(x.currentTarget.value)}}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 rounded  bg-zinc-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            id="message"
            rows="5"
            value={message}
            onChange={(x)=>{setMessage(x.currentTarget.value)}}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
     </div>
    
    </div>
    </section>
  )
}

export default Contact

