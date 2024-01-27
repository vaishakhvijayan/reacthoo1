import React from "react";
import { useState } from "react";

function Hook4(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    console.log(name);
    console.log(email);
 return(
     <div>
     <label>name</label>
     <input type="text" name="name" value={name} 
     onChange={(event)=>setName(event.target.value)}></input>

     <br/>
     <br/>

     <label>email</label>
     <input type="text" name="email" value={email}
     onChange={(event)=>setEmail(event.target.value)}></input>
  </div>
    )
}
export default Hook4;