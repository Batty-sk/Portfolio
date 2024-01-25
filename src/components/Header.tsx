import "./Header.css"

type prop={
  section:number
}
const Header = (section:prop) => {

  console.log(section)

  return (
<header className='relative md:h-0 h-48' style={{zIndex:10000}}>
<div className=' w-full flex md:justify-end justify-end rounded-s-sm rounded-e-lg mt-1 '>
  <ul className='p-5 flex md:flex-row flex-col md:justify-around justify-end md:items-center items-end me-5 m-0'>
    {[1,2,3,4].map((x,i)=>{
      if (x==section.section){
    return <li className='me-5 mt-2 cursor-pointer h-7 w-7 bg-yellow-400 rounded-full box-shadow ' key={i}></li>
      }
      else{
        return <li className='me-5 mt-2 cursor-pointer h-7 w-7 bg-slate-200 rounded-full box-shadow ' key={i}></li>

      }
    }
    )}
  </ul>
</div>
</header>  
)
}

export default Header