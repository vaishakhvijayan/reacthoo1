import React from "react";
import { useState,useEffect } from "react";
function Effect2(){
    const[count,setCount]= useState(0);
    const[calculation,setCalculation]=useState(0);
     console.log(count);
     useEffect(()=>{
        setCalculation(()=>count*2);
     },[count]);
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount((c)=>c+1)}>+</button>
          <h2>calculation:{calculation}</h2>  
        </div>
    )
}
export default Effect2;