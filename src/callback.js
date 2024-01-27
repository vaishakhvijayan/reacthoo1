import { useState } from "react";
import Todos from "./todo";
  const App1=()=>{
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState([]);
    const increment=()=>{
        setCount((c)=>c+1);
    };
    const addTodo=()=>{
        setTodos((t)=>[...t,"New Todo"]);
    };
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
  export default App1;