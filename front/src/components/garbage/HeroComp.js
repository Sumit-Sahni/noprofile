import React from 'react'
import {Link} from "react-scroll"
import avatar from "../Photos/sumit.png"
import { Typewriter } from 'react-simple-typewriter'


 const  HeroComp = () => {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 w-full h-[100vh] top-[90px] lg:justify-items-end   ' id='home'>
        <div className=' text-center  flex flex-col justify-end  lg:justify-center lg:items-center lg:w-full'>
              <div className=' w-1/2 mx-auto   flex justify-center items-center'>
              <span className='text-transparent text-5xl sm:text-6xl md:py-5 lg:text-6xl 2xl:text-8xl font-abc px-4  mx-auto font-extrabold  bg-clip-text bg-gradient-to-l from-cyan-600 to-blue-400'>
                 <Typewriter
                     words={["RESEARCH", "CONCEPT", "DESIGN", "TEST"]}
                     loop={10}
                     cursor
                     cursorStyle='|'
                     typeSpeed={70}
                     deleteSpeed={80}
                     delaySpeed={2000}
                    />
                   </span>
              </div>
                      
              <div className='w-full'>
                  <div className='inline-block p-8  md:py-4'>
                     <button className='bg-slate-300  px-7 py-2 rounded-3xl mx-2 hover:bg-slate-400'>
                        <Link className='cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={700} >Contact</Link>
                     </button> 
                     <button className='bg-slate-300  px-7 py-2 rounded-3xl mx-2 hover:bg-slate-400'>
                     <Link className='cursor-pointer' to="about" spy={true} smooth={true} offset={10} duration={700} >About</Link>
                     </button>
                 </div>
              </div>
        </div>    
             
         <div className="grid  sm:grid-col-1  justify-items-center  ">
             <div className='w-4/5  sm:w-2/3  h-auto  grid grid-cols-1 items-center justify-items-center'>
                   <img src={avatar} alt="avatar" className=" rounded bg-blue-500 shadow-lg shadow-blue-500/50  md:w-3/5 lg:1/2 "/>
             </div>
         </div>
      </div>
  )
}

export default HeroComp