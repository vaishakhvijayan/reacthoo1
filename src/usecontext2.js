import React from "react";
import { useState,createContext,useContext } from "react";
    const userContext= createContext();
     function Component1(){
  const[user,setUser]=useState("arjun");
    return(
        <>
            <userContext.Provider value={user}>
            <h1>{`welcome ${user}`}</h1>
            </userContext.Provider>

            <Component2/>
            </>
    
    )
}
function Component2(){
    return(
        <div>
            <h1>Component2</h1>
            <Component3/>
        </div>
    );
}
function Component3(){
    return(
        <div>
            <h1>Component3</h1>
            <Component4/>        
        </div>
    )
}
function Component4(){
    return(
        <div>
            <h1>Component4</h1>
        <Component5/>
        </div>
    )
}
function Component5(){
    const user= useContext(userContext);
    return(
        <div>
            <h1>Component5</h1>
            <h1>{`welcome ${user} again`}</h1>

        </div>
    );
}
export default Component1;