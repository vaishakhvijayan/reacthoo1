import React from "react";
import { useState,useEffect } from "react";
function Effect1(){
    const[count,setCount]=useState(0);
    console.log(count);
    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=>count+1);
             },1000 );
    },);
 return(
    <div>
    <h1>i have rendered {count}times </h1>
    </div>
 )
}
export default Effect1;