import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'
import {Link} from "react-scroll"
import I from '../Photos/Me.png'
import Graph from './Graph'
import AchiveMent from './AchiveMent'
import Logo from "../Photos/Logo2.jpg"
import Contact from './Contact';
import Footer from './Footer.jsx';

const Me = () => {

    const [nav, setNav] = useState(true)
  

    const handleNavbar = () =>{
       setNav(!nav)
    }

    const {ref:myRef, inView:myElementIsVisible} = useInView({
      triggerOnce:true,
      threshold:0,
  });


  return (
       <> 
         <div className='w-full h-[100px] py-5 z-10 bg-black text-white relative'>
          <div className='px-10 lg:px-12 flex justify-between items-center w-full h-full'>
             <div className='flex items-center'>
               <NavLink to="/">
               {/* <h1 className='text-3xl lg:text-4xl font-bold mr-4 font-abc '>Home</h1> */}
               <img src={Logo} width={40} alt='logo'></img> 
               </NavLink>
                
             </div>
              <ul className='hidden md:flex items-center text-xl font-light '>
                 <li><Link className='cursor-pointer ' to="Achivement" spy={true} smooth={true} offset={-100} duration={700} >Achivement</Link></li>
                 <button className='px-7 py-2 rounded-3xl hover:underline underline-offset-4'>
                 <Link className='cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={700} >Contact</Link>
                 </button>
              </ul>
              <div className='md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer"/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <ul className={nav ? "hidden" : "absolute bg-black w-full h-[1000vh] px-8 md:hidden" }>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="Achivement" spy={true} smooth={true} offset={-100} duration={700} >Achivement</Link>
                 </li>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={700} >Contact</Link>
                 </li>
              </ul>
        
        </div>


         {/* ABOUT SECTION  */}

       <section className='  w-full h-full top-[100px]  lg:h-[115vh] lg:top-[90px]  bg-black  px-4  lg:py-20 outline'>
        
            <div className='w-full h-10% md:w-[70%] lg:h-auto  mx-auto  text-white'>
                       <div className='w-full  h-40 p-5   md:p-4 '>
                          <div>
                              <h1 className=' text-2xl  lg:text-3xl  xl:text-4xl font-light'>Hi! I am <span className=' text-red-600 font-cba font-bold'>Sumit Sahni</span> a UI designer 🎨 with a <br/>  background in Master's in CS Application 💻</h1>
                          </div>
                       </div>

                       <div className='w-full h-auto'>
                       <div className='w-full  h-full flex flex-col-reverse lg:flex-row'>
                            <div className='lg:w-1/2 h-auto lg:text-xl p-4 '>
                                 <h1>
                                    <span className='w-96 font-thin'>
                                    <p>Currently at Pune Maharashtra studying Master's in Computer Application, set to post graduate in May 2023.</p></span>
                                 </h1>
                                      <div className='p-4'></div> 
                                 <h1>
                                 <span className='w-96 font-thin'>
                                    <p>I have made a life out of thinking (sometimes a bit too much) about how people come together and connect in the physical and digital worlds around them.</p>     
                               </span>
                                 </h1>
                                    <div className='p-4'></div> 
                                 <h1>
                                    <span className='w-96 font-thin'>
                                       <p>I believe that the projects I have worked on have been the highlight of my design journey. I have been influenced to constantly look for problems and design solutions for them; for challenges like these are what drive me to work. And I love every moment of the process.</p>
                                   </span>
                                 </h1>
                                     <div className='p-4'></div>
                                 <h1>
                                    <span className='w-96 font-thin'>
                                       <p>I aim towards combining my learnings of UI design  to integrate diverse perspectives and a collaborative approach to the product innovation process.</p>
                                   </span>
                                 </h1>

                                    <div className=' flex flex-row justify-between w-[8rem]  py-12'>
                                       <div>     
                                         <h1 className='cursor-pointer text-xl font-semibold text-white ' to="about" spy={true} smooth={true} offset={10} duration={700}><a href='https://drive.google.com/file/d/1Nt4pRJMZT8ly9czIr6yR6baHLzZ5mC9V/view'><u>resume</u></a></h1>
                                       </div> 
                                         <h1 className='text-[10px] mx-2' >○</h1>
                                       <div>     
                                         <Link className='cursor-pointer text-xl font-semibold text-white ' to="contact" spy={true} smooth={true} offset={10} duration={700}><u>contact</u></Link>
                                       </div> 
                                    </div>
                                
                            </div>
                            
                            <div className='h-1/2 lg:w-2/3 lg:h-[40rem]   p-4 overflow-hidden flex flex-row items-start justify-center '>
                                <img ref={myRef} src={I} alt="siom"   className={`${myElementIsVisible ? ' transform duration-1000 delay-7000 rotate-[360deg]':false} w-3/4 md:w-3/5 h-[65%]  object-contain  cursor-pointer`} />
                            </div>
                               
                            </div>
                       </div>                 
            </div>          
        </section>
          <Graph/>   
         <AchiveMent/> 
          <Contact/>   
          <Footer/>
       </>
        


  )
}

export default Me