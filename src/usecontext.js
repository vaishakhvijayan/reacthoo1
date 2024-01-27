import React from "react";
import { useState } from "react";
function Component1(){
    const[user,setUser]=useState("vaishakh");
    return(
        <div>
            <h1>{`welcome${user}`}</h1>
            <Component2 user={user}/>
        </div>
    )
    }
    function Component2({user}){
        return(
            <div>
                <Component3 user={user}/>
            </div>
        );
    }
    function Component3({user}){
        return(
            <div>
                <Component4 user={user}/>
            </div>
        )
    }
    function Component4({user}){
        return(
            <div>
                <Component5 user={user}/>
            </div>
        )
    }
    function Component5({user}){
        return(
            <div>
                <h1>Component5</h1>
                <h1>{`wecome ${user}again`}</h1>
            </div>
        )
    }
    export default Component1;