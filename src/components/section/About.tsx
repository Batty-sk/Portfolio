import {useEffect,useRef} from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import "./About.css"
import Github from "../../assests/github.png"
import Linkedin from "../../assests/linkedin.png"
import Image from 'next/image'
import Link from 'next/link'  
import useVisibleOnScreen from '@/Hooks/useVisibleOnScreen'

const About = () => {
  const setIsAboutSectionVisible = useVisibleOnScreen();
  // if the isAboutSectionisVisible then we can just send the signal to update the background 
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aboutSectionRef.current !== null && aboutSectionRef.current !== undefined) {
      console.log('updating the ref value ... ')
      setIsAboutSectionVisible(aboutSectionRef.current!);
    }
  
  }, [aboutSectionRef]);

  return (
    <ParallaxLayer offset={1} speed={1} style={{top:0,bottom:0,left:0,right:0}} >
        <div ref={aboutSectionRef} className='bg-yellow-100 h-[100%] font-extrabold text-center flex  flex-wrap justify-between relative'>
         <div className='w-[100%] font-mono'>
          <h1 className='text-5xl text-yellow-900 ' >About Me</h1>
         </div>
          <div className='frame'>

          </div>

          <div className='about-me font-mono w-[70%]'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, natus, alias modi at sapiente obcaecati libero saepe repudiandae odit dolorem enim ullam temporibus incidunt sequi, consequatur iste! Nobis neque deserunt exercitationem, dolor doloribus deleniti ratione, pariatur commodi hic quisquam temporibus labore assumenda amet distinctio incidunt voluptas, ipsa inventore quaerat officia! Accusantium porro dolor officia, eligendi id explicabo pariatur deleniti impedit cumque delectus numquam inventore quibusdam corrupti officiis quo, repellendus consectetur neque eos, voluptate culpa corporis odit ad? Voluptatum, magnam suscipit corporis similique fugit tenetur eligendi, placeat nostrum labore quas fuga dolorum! Voluptates ratione voluptatum vel itaque nihil, suscipit rem! Animi.</p>
          </div>
          <div className='flex flex-col justify-center font-mono w-[100%]'>
            <h2 className='text-3xl'>Follow Me On </h2>
            <div className='flex justify-center mt-3'>
              <Link href={'https://github.com/Batty-sk'} target='_blank' className='me-2'><Image src={Github.src} alt='Github' width={64} height={64}></Image></Link>
              <Link href={'https://linkedin.com/in/saurav-kumar-5225a2292'} target='_blank'> <Image src={Linkedin.src} alt='Linkedin' width={64} height={64}></Image></Link>

            </div>
        </div>
        </div>


        </ParallaxLayer>  )
}

export default About