import React from "react";
import { useState,useEffect,useRef } from "react";
function Useref1(){
    const[title,setTitle]=useState("MY tittle")
    const titleref=useRef();
    useEffect(()=>{
        console.log("useEffect");
        document.title=title;
    });
     const handleClick=()=>{
        setTitle(titleref.current.value);
        console.log("render");
     }
    return(
        <div>
      <input ref={titleref}/>
       <br/>
       <br/>
       <button onClick={handleClick}>change title</button>
        </div>
    )
}
export default Useref1;