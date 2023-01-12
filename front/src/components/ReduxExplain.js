import React from 'react'
import {useDispatch, useSelector} from "react-redux"

const ReduxExplain = () => {
   const dispatch = useDispatch();
    const {value} = useSelector(state=>state.custom)
   
    const addIncrement = () =>{
          dispatch({
            type:"increment",
          });
    };
    const addDecrement = () =>{
      dispatch({
        type:"decrement",
      });
    };
    
    const addByVal = () =>{
      dispatch({
        type:"incrementByValue",
        payload: 25
      });
    };

   return (
    <div className='p-12'>
          <h2 className=''>{value}</h2>
           <button onClick={addIncrement} className="mx-5 border">Increment</button>
           <button onClick={addDecrement} className="border">Decrement</button>
           <button onClick={addByVal} className="mx-4 border">addByVal</button>
    </div>
      
  )
}

export default ReduxExplain;