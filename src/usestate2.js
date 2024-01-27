import React from "react";
import { useState } from "react";
function Hook2(){
    const[person,setPerson] =useState({name:"vaishakh",age:"23",place:"cheemeni"});
    return(
    <div>
        <h1>my name is {person.name},my age is {person.age}and my place is {person.place}</h1>
    </div>
    )
}
export default Hook2;