import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-96 bg-black text-white flex flex-col items-center justify-center ' id='contact'>
          <div className=' xsm:w-3/5 lg:w-3/5 xl:w-1/2 mx-auto'>
                    <div className='text-xl md:text-3xl font-thin px-4 md:px-12 text-center '>
                       <p>
                       ☕   I'm always interested in connecting with fellow designers of all experience levels — feel free to reach out by <u><a href="mailto:sumit.123sahni@gmail.com?subject=Let's grab coffee" target="_self"><span className='font-semibold'>Email</span></a></u>, <u><a href="https://www.linkedin.com/in/sumit-sahni-852756204/"><span className='font-semibold'>LinkedIn</span></a></u>.
                       </p>
                    </div>
          </div>
    </section>
  )
}

export default Contact