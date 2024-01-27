import React from "react";
import { useReducer } from "react";
 const initialState=0;
 const reducer=(state,action)=>{
    switch(action){
        case"add":
        return state+1;
        case"subtract":
        return state-1;
        case "reset":
            return 0;
            default :
            throw new Error ("unexpected action")
    }
 };
 function Usered(){
    const[count,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch("add")}>ADD</button>
            <button onClick={()=>dispatch("subtract")}>SUB</button>
            <button onClick={()=>dispatch("reset")}>RESET</button>
        </div>
    )
 }
 export default Usered;