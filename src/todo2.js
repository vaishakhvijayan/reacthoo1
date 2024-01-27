import { memo } from "react";
   const Todos1=({todos,addTodo})=>{
    console.log("child render");
    return(
        <>
        <h2>my Todos</h2>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>addTodo</button>

        </>
    );
   }
   export default   Todos1;