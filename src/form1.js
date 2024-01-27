import React,{useState} from "react";
function Form1(){
    const[state,setState]=useState({
        email:"",
        password:""
    });
    const handleInputChange=(event)=>{
        const{name,value}=event.target;
        setState((prevProps)=>({
            ...prevProps,
            [name]:value
        }));
        const handleSubmit=(event)=>{
            event.preventDefault();
            console.log(state);
        };
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label>email</label>
                <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}/>
            </div>

            <div className="form-control">
                <label>password</label>
                <input
                type="password"
                name="password"
                value={state.password}
               onChange={handleInputChange} />
             </div>

             <div className="form-control">
                <label></label>
                <button type="submit">login</button>
             </div>

            </form>
            </div>
        );
    }
}
export default Form1;