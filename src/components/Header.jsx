import React from 'react'
import { HEADER_NAV } from '../constants'
const Header = () => {
  return (
    <header>
        <nav className='p-4'>
            <ul className='flex md:justify-end md:flex-row flex-col  items-end  gap-2'> 
                {HEADER_NAV.map((x,i)=><li className='w-8  h-8 rounded-full shadow-sm shadow-black block hover:bg-yellow-300 transition-all duration-300 cursor-pointer  bg-zinc-100' key={i}></li>)}
</ul>
        </nav>
    </header>
  )
}

export default Header