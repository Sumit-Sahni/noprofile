import React from 'react'
import { NavLink } from 'react-router-dom';
import {Link} from "react-scroll"

const Introduction = () => {
  return (
        <section  className='grid grid-cols-1  w-full h-[80vh] md:h-[50vh] top-[80px] lg:h-[120vh] lg:top-[25px] items-center relative '   id='home'>
               <div className='text-center md:text-start w-full h-60 md:h-48 md:w-3/4 xl:w-3/4 lg:h-80  mx-auto flex flex-col justify-around px-8 lg:px-14 2xl:px-14 '>
                   <div className='xs:w-full  lg:w-4/5' >
                      <h1 className='text-xl lg:text-3xl  font-cba'>I am <span className=' lg:text-3xl'><u className='text-red-600 font-bold'><NavLink to="/me">Sumit Sahni,</NavLink></u></span> recently looking for <span className=' animate-pulse'>work!</span> </h1>
                   </div>
                   <div className='w-full  lg:w-4/5 py-4 '>
                        <p className=' text-xl lg:text-3xl '>I have a knack for building experiences that bring people together in the digital world, the physical world, or somewhere in between while sipping gallons of coffee!</p>
                   </div>
                   <div>     
                          <Link className='cursor-pointer text-2xl font-light ' to="about" spy={true} smooth={true} offset={10} duration={700}><NavLink to="/me"><u>about</u></NavLink></Link>
                   </div>  
                                                 
               </div>
               <div>
               <Link className='cursor-pointer' to="project" spy={true} smooth={true} offset={-150} duration={700}>
               <p className='text-center pb-8 animate-pulse '>↓ projects&nbsp;↓</p>     
               </Link>
               </div>
        </section>
  )
}

export default Introduction;