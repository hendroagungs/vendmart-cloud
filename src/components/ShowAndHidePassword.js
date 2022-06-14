import React, { useState } from 'react';

function ShowAndHidePassword({details, setDetails}){
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword =()=>{
        if(passwordType==="password")
        {
        setPasswordType("text")
        return;
        }
        setPasswordType("password")
    }
    return(
        <div className="flex border rounded-lg overflow-hidden focus:ring-1 hover:ring-sky-500 hover:border-sky-500">
            <i className="pt-4 pl-4 bg-white fa-md fas fa-lock "></i>
                <input type={passwordType} 
                onChange={e => setDetails({...details, password: e.target.value})} 
                value={details.password} 
                name="password" 
                className="w-full rounded h-12 px-4 focus:outline-none" 
                placeholder="Password" 
                />
                <button onClick={togglePassword} >
                { passwordType==="password"? <i className="pt-2 pr-4 bg-white fa-md fas fa-eye-slash cursor-pointer"></i> :<i className="pt-2 pr-4 bg-white fa-md fas fa-eye cursor-pointer"></i> }    
                </button>
        </div>
        
    )
}
export default ShowAndHidePassword;