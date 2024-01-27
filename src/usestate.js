import React from 'react';
import { useState } from 'react';

function Hook1(){
    const[name,setName]=useState("vaishakh")
    const[age,setAge]= useState("23")
    return(
        <div>
            <h1>my name is {name}</h1>
            <h2>my age is {age}</h2>
            <button type="button" onClick={()=>setName("rahul")}>
                change name</button>
            <button type="button "onClick={()=>setAge("25")}>change age</button>
        </div>
    )
}
export default Hook1;
