"use client"
import React from 'react'
import { HEADER_NAV } from '../constants'
import { useEffect,useState } from 'react'
const Header = () => {
  const [color,setColor] = useState([0,'blue'])


  useEffect(()=>{
    const handleScroll=()=>{
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / sectionHeight);
      handleColorSwitch(currentSection)
    }

    const handleColorSwitch = (currentSection)=>{
      switch(currentSection){
        case 0:
          setColor([0,'blue'])
          break
        case 1:
          setColor([1,'yellow'])
          break
        case 2:
          setColor([2,'orange'])
          break;
        case 3:
            setColor([3,'#f9f7cd'])
            break;
        default:
          setColor([3,'#f9f7cd'])
      }
    }

    if(window){
      window.addEventListener('scroll',handleScroll)
    }
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <header className='fixed top-0 w-full z-50'>
        <nav className='p-4'>
            <ul className='flex md:justify-end md:flex-row flex-col  items-end  gap-2'> 
                {HEADER_NAV.map((x,i)=>
                 <a href={x}>
                <li className='w-8  h-8 rounded-full shadow-sm shadow-black block hover:bg-yellow-300 transition-all duration-300 cursor-pointer  ' key={i} style={{
                  background:`${i==color[0]?color[1]:'rgb(244,244,245)'}`
                }}></li>
               </a>
                )}
</ul>
        </nav>
    </header>
  )
}

export default Header