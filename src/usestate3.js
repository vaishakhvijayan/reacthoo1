import React from "react";
import { useState } from "react";

function Hook3(){
    const[person,setPerson]=useState({name:"vaishakh",age:"22",
    place:"payyanur"});
    

    const updateName=()=>{
        setPerson(previousState=>{
        return {...previousState,name:"rahul"}
    })
    }
return(
    <div>
        <h1>my name is {person.name},my age is {person.age} 
        and my place is {person.place}</h1>
        <button type="button" onClick={updateName}>CHANGE NAME</button>
    </div>
)

}
export default Hook3;