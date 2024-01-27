import { useState,useCallback } from "react";
import Todos1 from "./todo2";
import Todos from "./todo";
const App2=()=>{
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState([]);
    const increment=()=>{
        setCount((c)=>c+1);
    };
    const addTodo= useCallback(()=>{
        setTodos((t)=>[...t,"New Todo"]);
    },[Todos]);
    return(
        <div>
            <Todos todos={todos} addTodo={addTodo}/>
            <hr/>
            <div>
                count={count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
  }
  export default App2;

