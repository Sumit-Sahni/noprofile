import React from 'react'
import { useInView } from 'react-intersection-observer'
import MERN from '../Photos/MERN.jpg'
import Figma from '../Photos/Figma.jpg'
import Eshop from '../Photos/Eshop.jpg'
import Port from '../Photos/Port.jpg'
import Footer from './Footer.jsx';


const Project = () => {
    // const myRef = useRef();
    const {ref:myRef1, inView:myElementIsVisible1} = useInView({
        triggerOnce:true,
        threshold:0,
        delay:1000
    });
    const {ref:myRef2, inView:myElementIsVisible2} = useInView({
        triggerOnce:true,
        threshold:0.3,
        delay:1250
    });
    const {ref:myRef3, inView:myElementIsVisible3} = useInView({
        triggerOnce:true,
        threshold:0.3,
        delay:1250
    });
    const {ref:myRef4, inView:myElementIsVisible4} = useInView({
        triggerOnce:true,
        threshold:0.3,
        delay:1250
    });



   
   

  return (
    <>
       <section  className=' w-full h-[310vh] md:h-auto pb-48 grid grid-cols-1 gap-12 relative px-4  justify-center items-center' id='project'>
                        <div  ref={myRef1}   className={` opacity-5 ${myElementIsVisible1 ? 'opacity-100 transform transition duration-300 ease-out':null}  cursor-pointer w-full md:w-[96%] lg:w-3/4 xl:w-2/3 h-[90%] md:h-[25rem] lg:h-[55vh] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center   bg-white rounded-2xl  hover:text-white hover:font-bold hover:bg-gradient-to-r from-green-400 to-blue-500  `}>
                         <div className=' h-96 lg:w-12 hidden  md:hidden   lg:flex flex-col items-center justify-center'>
                            <p className='rotate-180 ' style={{"writingMode":"vertical-rl"}}>UX Design + Research  (by Sumit)</p>
                         </div>
                         <div className='w-[100%] h-[100%] md:h-full lg:h-full lg:w-1/2 overflow-hidden rounded'>
                              <img src={MERN} alt="MERN" className='w-[100%] h-[100%]  object-cover'  /> 
                         </div>
  
                         <div className=' h-60 md:w-68 lg:w-1/2 flex items-center justify-center flex-col px-6 cursor-pointer'>
                           <div className=' w-full h-60 flex flex-col justify-evenly  hover:font-bold'>
                               <div className=''>
                                     <h1 className='lg:text-4xl font-semibold font-cba'>College Project</h1>
                               </div>
                               <div  className=''>
                                      <p className=' font-thin '>The work I did during my College 2nd semestar I got to  lead the whole project, which was made using MEARN stack. it was a great learning experience. </p>
                               </div>
                               <div className=''>
                                    <h1><a href="https://sinhgad-net.herokuapp.com/" className="font-cba font-bold"><u>Explore</u></a></h1>
                                   
                               </div>
                           </div>
                        </div>
                    </div>
                   
    
               




                <div ref={myRef2} className={` opacity-5 ${myElementIsVisible2 ? 'opacity-100 transform  transition duration-300 ease-out ':'opacity-5'}  cursor-pointer w-full md:w-[96%] lg:w-3/4 xl:w-2/3 h-[90%] md:h-[25rem] lg:h-[55vh]    mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center  bg-white rounded-xl  hover:text-white  hover:bg-gradient-to-r from-green-400 to-blue-500  transform   `}>
                      <div className='h-96 lg:w-12  hidden md:hidden   lg:flex flex-row items-center justify-center'>
                          <p className='rotate-180 ' style={{"writingMode":"vertical-rl"}}>UX Design + Research  (by Sumit)</p>
                      </div>
                      <div className='w-[100%] h-[100%] md:h-full lg:h-full lg:w-1/2 overflow-hidden rounded'>
                          <img src={Figma} alt="MERN" className='w-[100%] h-[100%]  object-cover'  />
                      </div>

                      <div className=' h-60 lg:w-1/2 flex items-center justify-center flex-col px-6 cursor-pointer'>
                         <div className=' w-full h-60 flex flex-col justify-evenly'>
                             <div className=''>
                                   <h1 className='lg:text-4xl font-semibold font-cba'>Figma Design</h1>
                             </div>
                             <div className=''>
                                  <p className=' font-thin'>The work I did during learning UI Design. Essentially it was quit challenging to complete with fully Responsive but with the help of CSS Framework Tailwind I complete the design</p>
                             </div>
                             <div className=''>
                                  <h1><a href="https://sumit-sahni.github.io/outshade/" className="font-cba font-bold"><u>Explore</u></a></h1>
                             </div>
                         </div>
                      </div>
                </div>


                <div ref={myRef3} className={` opacity-5 ${myElementIsVisible3 ? 'opacity-100 transform transition duration-300 ease-out ':'opacity-5'}   cursor-pointer w-full md:w-[96%] lg:w-3/4 xl:w-2/3 h-[90%] md:h-[25rem] lg:h-[55vh]    mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center  bg-white rounded-xl  hover:text-white  hover:bg-gradient-to-r from-green-400 to-blue-500`}>
                      <div className=' h-96 lg:w-12  hidden md:hidden   lg:flex flex-row items-center justify-center'>
                          <p className='rotate-180 ' style={{"writingMode":"vertical-rl"}}>UX Design + Research  (by Sumit)</p>
                      </div>
                      <div className='w-[100%] h-[100%] md:h-full lg:h-full lg:w-1/2 overflow-hidden rounded'>
                          <img src={Eshop} alt="MERN" className='w-[100%] h-[100%]  object-cover'  />
                      </div>

                      <div className=' h-60 lg:w-1/2 flex items-center justify-center flex-col px-6 cursor-pointer'>
                         <div className=' w-full h-60 flex flex-col justify-evenly'>
                             <div className=''>
                                   <h1 className='lg:text-4xl font-semibold font-cba'>E-commerce</h1>
                             </div>
                             <div className=''>
                                  <p className=' font-thin'>Disclamer!!(Not Focuc more on UI). The work I did during Learning Redux based Project, All the logic from filters to add to cart, Paymet filter, Add delete product all this logic implemented in this single project.</p>
                             </div>
                             <div className=''>
                                  <h1><a href="https://toothsi-app.herokuapp.com/" className="font-cba font-bold"><u>Explore</u></a></h1>
                             </div>
                         </div>
                      </div>
                </div>

                <div  ref={myRef4} className={`opacity-5 ${myElementIsVisible4 ? 'opacity-100 transform transition duration-300 ease-out ':'opacity-5'}  cursor-pointer w-full md:w-[96%] lg:w-3/4 xl:w-2/3 h-[90%] md:h-[25rem] lg:h-[55vh]    mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center  bg-white rounded-xl  hover:text-white  hover:bg-gradient-to-r from-green-400 to-blue-500`}>
                      <div className=' h-96 lg:w-12  hidden md:hidden   lg:flex flex-row items-center justify-center'>
                          <p className='rotate-180 ' style={{"writingMode":"vertical-rl"}}>UX Design + Research  (by Sumit)</p>
                      </div>
                      <div className='w-[100%] h-[100%] md:h-full lg:h-full lg:w-1/2 overflow-hidden rounded'>
                          <img src={Port} alt="MERN" className='w-[100%] h-[100%]  object-cover'  />
                      </div>

                      <div className=' h-60 lg:w-1/2 flex items-center justify-center flex-col px-6 cursor-pointer'>
                         <div className=' w-full h-60 flex flex-col justify-evenly'>
                             <div className=''>
                                   <h1 className='lg:text-4xl font-semibold font-cba'>Google Cloud</h1>
                             </div>
                             <div className=''>
                                  <p className='font-thin '>This project solely based on HTML, Javascript and CSS</p>
                             </div>
                             <div className=''>
                                  <h1><a href="https://sumit-sahni.github.io/Banklist/" className="font-cba font-bold"><u>Explore</u></a></h1>
                             </div>
                         </div>
                      </div>
                </div>

       </section>
       <section className='w-full h-48 bg-slate-300  flex flex-col items-center justify-center ' id='contact'>
          <div className=' xsm:w-3/5 lg:w-3/5 xl:w-1/2 mx-auto'>
                    <div className='text-xl md:text-3xl font-thin px-4 md:px-12 text-center '>
                       <p>
                       Thanks for checking out my work! 🙌🏻
                       tap to know more about <u><a href="/me" className='text-red-600 font-semibold' >me</a></u> or look at my <u><a href="https://drive.google.com/file/d/1Nt4pRJMZT8ly9czIr6yR6baHLzZ5mC9V/view" className='text-red-600 font-semibold'>resume!</a></u>
                       </p>
                    </div>
          </div>
    </section>
       <Footer/>
       </>
  )
}

export default Project