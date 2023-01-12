import React from 'react'
import {SiMaterialdesign} from 'react-icons/si'
import {RiCodeSSlashFill} from 'react-icons/ri'
import {VscSymbolMisc}    from 'react-icons/vsc'

const About = () => {
  return (
     <section className=' my-12 grid  gap-y-2 sm:grid-cols-3 lg:p-[8rem] ' id='about'>
      
        <div className=" sm:col-span-3 p-2 pb-12">

           <h1 className='font-cba text-center text-3xl mb-6 lg:text-5xl lg:text-left '>I'm <span className='font-abc text-sky-500'>SUMIT SAHNI</span><br className='py-12'/><div className='my-3'>UX/UI Designer</div></h1>
           <div className=' text-center sm:text-left lg:w-3/5 '>
             <p className='font-cba  '>I’m an Full stack Developer, designer, and UX/UI creator based in <span className='font-semibold'>India.</span> I love the challenge that creativity brings as I’m constantly inspired to think, create, and design in different ways that are fun, impactful, and innovative. I’m pursuing with a <span className='font-semibold'>Master degree in Computer Application </span> from Sinhgad Institute of Management <span className='font-semibold'>(PUNE)</span> and am currently working as a freelance designer. For the moments I feel stagnant  and enjoy creating design. document my creative journey, and bring content that I hope is helpful, inspiring, and enjoyable for others.</p>
           </div>
          

        </div >
  
         <div className='col-span-3 lg:col-span-2 m-2 p-5  '>

            <div className=' grid grid-cols-2'>
                <div className='h-48 flex items-center justify-center md:h-64 lg:h-64 border-r-2 border-b-2 border-sky-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white'>
                  <a href="https://sinhgad-net.herokuapp.com/" className="text-1xl sm:text-4xl font-cba font-bold">MERN</a> 
                </div>

                <div className='h-48 flex items-center justify-center md:h-64 lg:h-64 border-b-2 border-sky-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white '>
                    <a href="https://sumit-sahni.github.io/Deyus/" className="text-1xl sm:text-4xl font-cba font-bold">Cart Design</a>
                </div>

                <div className='h-48 flex items-center justify-center md:h-64 lg:h-64 border-r-2 border-sky-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white'>
                   <a href="https://sumit-sahni.github.io/dashboard/" className="text-1xl sm:text-4xl font-cba font-bold">Dashboard</a>
                </div>

                <div className='h-48 flex items-center justify-center md:h-64 lg:h-64  border-sky-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white'>
                    <a href="https://sumit-sahni.github.io/portfolio/" className="text-1xl sm:text-4xl font-cba font-bold">Static Page</a>
                </div>
            </div>
         </div> 
  
         <div  className='mx-2 grid grid-cols-1 h-auto sm:w-[45rem] md:w-[47rem] lg:w-full  p-2'>
              <h1 className='text-center text-2xl font-bold my-2'>What I Do ?</h1>
            <div className='h-40 lg:h-48 flex items-center '>
                <div className='w-[30%] lg:pb-7  h-24 md:h-24 lg:h-32   flex items-center justify-center'>
                       <SiMaterialdesign size={80} /> 
                </div>
                <div className='w-[70%] md:h-24 lg:h-32  '>
                     <div className='px-2 font-bold font-cba'><h1>Wire Framing</h1></div>
                     <div className='px-2 h-auto '>
                        <p>I have knowledge about WireFraming for design templates.it helps in  visualize design pattern.</p>
                     </div>
                </div>
            </div>
            <div className='h-40 lg:h-48  flex items-center '>
                  <div className='w-[30%] lg:pb-7 h-24 md:h-24 lg:h-32   flex items-center justify-center'>
                      <RiCodeSSlashFill size={80}/>
                </div>
                <div className='w-[70%]  md:h-24 lg:h-32  inline-block'>
                <div className='px-2 font-bold font-cba'><h1>Code</h1></div>
                     <div className='px-2 h-auto '>
                        <p>I love doing code, for development of mostly front-end type projects and  backend.</p>
                     </div>
                </div>
            </div>
            <div className='h-40 lg:h-48  flex items-center'>
                <div className='w-[30%] lg:pb-7 h-24 md:h-24 lg:h-32  flex items-center justify-center'>
                     <VscSymbolMisc size={80}/>
                </div>
                <div className='w-[70%]  md:h-24 lg:h-32  inline-block'>
                <div className='px-2 font-bold font-cba'><h1>UX/UI</h1></div>
                     <div className='px-2 h-auto '>
                        <p>Currently learning UX/UI design pattern to understand the actual Design psychology.</p>
                     </div>
                </div>
            </div>
         </div>
      

     </section>
  )
}
 
 export default About