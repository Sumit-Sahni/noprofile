import React from 'react'
import Email from './Email'

const Footer = () => {
  return (
      <section className=' border-none bg-slate-300 p-12 h-full grid  md:grid-cols-1 lg:grid-cols-2'>
        
       <div className='flex items-start justify-center '>
        <div className=' w-full pb-3 sm:w-1/2 sm:mx-auto'>
             <Email/>
        </div>
        
       </div>

       <div className='w-full  flex items-start lg:items-center justify-center' id="contact">
        <div >
          <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 ">
           <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/#" className="hover:underline">Sumit Sahni™</a>. All Rights Reserved.
           </span>
           <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
               <li>
                   <a href="/#" className="mr-4 hover:underline md:mr-6 ">Home</a>
               </li>
               <li>
                   <a href="/#" className="mr-4 hover:underline md:mr-6 ">About</a>
               </li>
               <li>
                   <a href="/#" className="hover:underline">Contact</a>
               </li>
           </ul>
          </footer>
          </div>
       </div>
      </section>

  )
}


export default Footer