import React,{useState} from "react";
function Form3(){
    const[state,setState]=useState({
        email:"",
        password:""
    });
    const handleChange = (event)=>{
        const {name,value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]:value
        }));
    };
        const handleSubmit=(event)=>{
            event.preventDefault();
            console.log(state);
        };
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <div >
                <label>email</label>
                <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}/>
            </div>

            <div >
                <label>password</label>
                <input
                type="password"
                name="password"
                value={state.password}
               onChange={handleChange} />
             </div>

             <div>
                <label></label>
                <button type="submit">login</button>
             </div>

            </form>
            </div>
        );
    }

export default Form3;