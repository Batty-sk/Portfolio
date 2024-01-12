import React from 'react'
const Header = () => {
  return (
<header className='relative z-56 md:h-0 h-48'>
<div className=' w-full flex md:justify-end justify-center rounded-s-sm rounded-e-lg mt-1 '>
  <ul className='p-5 flex bg-slate-100 rounded-full justify-around items-center me-5' style={{boxShadow:'0px 1px 5px gray'}}>
    <li className='me-5 cursor-pointer bg-black text-white rounded-full p-2 ps-3 pe-3'>Home</li>
    <li className='me-5 cursor-pointer'>About</li>
    <li className='me-5 cursor-pointer'>Experience</li>
    <li className='me-5 cursor-pointer'>Projects</li>
    <li className='me-5 cursor-pointer'>Contact</li>
  </ul>
</div>
</header>  
)
}

export default Header