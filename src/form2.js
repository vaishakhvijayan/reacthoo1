import React from "react";
import {useForm} from "react-hook-form";
function Form2(){
    const{
        register,
    handleSubmit,
     formState:{errors}
    }=useForm();
    const onSubmit=(data)=>{
        console.log(data);
    };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>email</label>
            <input type="text" name="email" {...register("email")}/>
        </div>
        <div>
            <label>password</label>
            <input type="password" name="password"{...register("password")}/>
        </div>
        <div>
            <label></label>
        <button type="submit">login</button>
        </div>
        </form>
        </div>
    );
}
export default Form2;