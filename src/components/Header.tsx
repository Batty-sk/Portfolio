import React from 'react'
import "./Header.css"
const Header = () => {
  return (
<header className='relative md:h-0 h-48' style={{zIndex:10000}}>
<div className=' w-full flex md:justify-end justify-end rounded-s-sm rounded-e-lg mt-1 '>
  <ul className='p-5 flex md:flex-row flex-col md:justify-around justify-end md:items-center items-end me-5'>
    <li className='me-5 mt-2 cursor-pointer h-7 w-7 bg-yellow-400 rounded-full box-shadow '></li>
    <li className='me-5 mt-2 cursor-pointer h-7 w-7  bg-slate-300 rounded-full box-shadow '></li>
    <li className='me-5 mt-2 cursor-pointer h-7 w-7  bg-slate-300 rounded-full box-shadow '></li>
    <li className='me-5 mt-2 cursor-pointer h-7 w-7  bg-slate-300 rounded-full box-shadow '></li>
  </ul>
</div>
</header>  
)
}

export default Header