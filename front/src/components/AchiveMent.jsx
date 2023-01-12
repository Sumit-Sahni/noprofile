import React from 'react'
import AchiveMntPopUp from './AchiveMntPopUp'
import { useState } from 'react';
import siom from "../Photos/siom.jpg"


const AchiveMent = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
   
  const PopupHandle = () =>{
        setButtonPopup(!buttonPopup)
  }
   


  return (
    <section className='h-auto w-full text-white bg-black ' id='Achivement'>
      <div className='p-4  w-2/3 lg:w-5/6 lg:h-auto  flex flex-col md:flex-row justify-between mx-auto ' >
      <div className='md:w-40 lg:w-80  mx-auto p-4 '>
        <img src={siom} alt=""  />
      </div>
      <div className='w-1/2 mx-auto  flex justify-center items-center p-4 '>
      <AchiveMntPopUp trigger={buttonPopup} setTrigger={setButtonPopup} className="absolute"/>
         <div>
            <h1 className="font-abc text-4xl font-semibold">Achivement</h1>
            <h1 onClick={PopupHandle} className="text-center cursor-pointer text-red-800 hover:text-red-600">show</h1>
         </div>
       
      </div>
    
      </div>                           
    </section> 
  )
}

export default AchiveMent