import { useState,useMemo } from "react";
  const Memo1=()=>{
    const[number,setNumber]=useState(0)
    const squareNum1=useMemo(()=>{
        return squareNum(number)
    },[number]);
  const[counter,setCounter]=useState(0);
  const onChangeHandler=(e)=>{
    setNumber(e.target.value);
  }
  const counterHander=()=>{
    setCounter(counter+1);
  }
  return(
    <div>
      <h1>welcome</h1>
      <input type="number" value={number} onChange={onChangeHandler}></input>
   <h1>square output:{squareNum1}</h1>
   <button onClick={counterHander}>counter increment</button>
   <h2>counter:{counter}</h2>
    </div>
  )
}
function squareNum(number){
  console.log("finding square number")
  return Math.pow(number,2);
}
export default Memo1;