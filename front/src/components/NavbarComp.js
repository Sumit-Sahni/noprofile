import React from 'react'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import {Link} from "react-scroll"
import Logo from "../Photos/Logo.jpg"

const NavbarComp = () => {

     const [nav, setNav] = useState(true)

     const handleNavbar = () =>{
        setNav(!nav)
     }

      
    

  return (
        <div className='w-screen h-[100px] py-5 z-10 bg-slate-300 fixed'>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <div className='flex items-center'>
                 <h1 className='text-3xl lg:text-4xl font-bold mr-4 '><img src={Logo} alt='logo' width={40}></img> </h1>
             </div>
              <ul className='hidden md:flex items-center text-xl font-light '>
                 <li><Link className='cursor-pointer ' to="book" spy={true} smooth={true} offset={10} duration={700}><NavLink to='/books'>Books</NavLink></Link></li>
                 <button className='px-7 py-2 rounded-3xl hover:underline underline-offset-4'>
                 <Link className='cursor-pointer' to="project" spy={true} smooth={true} offset={-150} duration={700}>Work</Link>
                 </button>
              </ul>
              <div className=' md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer"/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <ul className={nav ? "hidden" :  ` absolute bg-slate-300 w-full h-[100vh] px-8 md:hidden `}>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="about" spy={true} smooth={true} offset={-110} duration={700}><NavLink to='/me'>About</NavLink></Link>
                 </li>
                 
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="project" spy={true} smooth={true} offset={-180} duration={700} >Work</Link>
                 </li>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link className='cursor-pointer ' to="book" spy={true} smooth={true} offset={10} duration={700}><NavLink to='/books'>Books</NavLink></Link>
                 </li>
              </ul>
        
        </div>
  )
}

export default NavbarComp;