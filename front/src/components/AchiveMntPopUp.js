import React from "react";
import styled from "styled-components";
import certificate from "../Photos/certificate.jpg"



const PopContainer = styled.div`
   position:fixed;
   top:0;
   left:0;
   width:100%;
   height:100vh;
   background-color: rgba(0,0,0,0.7);
   display: flex;
   flex-direction:row
   justify-content:center
   box-shadow: 0 0 10px rgba(55, 55, 55, 0.3);
  transition: 400ms;
}

   align-items:center;
`
const InnerPop = styled.div`
    color:black;
    background-color: rgba(255,255,255,0.9);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    width:70%;
    height:80vh;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:15px;
  
  }
  
   
    h5{
      line-height:2rem;
      font-family: "Josefin Sans", "sans-serif";
    }
    
    @media (max-width:700px){
       width:100%;
       h5{
        line-height:1.5rem
      }
    }
  
   
`

const AchiveMent = (props) =>{
   return(props.trigger)? (
      <PopContainer>
            <InnerPop >
            <img src={certificate} className=" md:h-30vh lg:w-1/2 h-[50vh] pb-2" alt="certificate"/>
          <div>
            <button className="bg-gradient-to-r from-red-500 to-blue-500 px-7 py-2 rounded-3xl  hover:text-white " onClick={()=>props.setTrigger(false)}>Close</button>
            </div>
        </InnerPop>
      </PopContainer>
   ): ""
}

export default AchiveMent