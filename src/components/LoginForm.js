import React, { useState } from "react";
import ShowAndHidePassword from "./ShowAndHidePassword";

export default function LoginForm({Login, admin, user, setUser, errorMessage, showErrorMessage}){
    const [details, setDetails] = useState({email: '', password: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        Login(details);
    } 

    return(
<div className="mt-60">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <div className="bg-gray-50 p-5 max-w-md mx-auto rounded shadow-md">
        <h2 className="text-4xl px-4 font-bold">Log In</h2>
        <form className="mt-10 space-y-8">
                <div className="group autofill:bg-yellow-200 flex border rounded-lg overflow-hidden focus:outline-none bg-white focus:ring-1 hover:ring-sky-500 hover:border-sky-500 invalid:text-pink-700 invalid:ring-pink-700 invalid:border-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700">
                    <i className="fa-lg fas fa-user-circle pl-4 pt-4"></i>
                    <label htmlFor="email">
                        <input
                        className="h-12 px-3 focus:outline-none
                        invalid:text-pink-700 peer autofill:bg-yellow-200"
                        placeholder="Email address"
                        type="email"
                        value={details.email}
                        name="email"
                        onChange={e => setDetails({...details, email: e.target.value})}
                        />
                    </label>
                </div>
            <ShowAndHidePassword className="border border-red-500" user={user} setUser={setUser} admin={admin} setDetails={setDetails} details={details}
            />
            <div className="text-pink-700 text-left">
                <div className={showErrorMessage}>
                    {errorMessage}
                </div>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required/>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-reguler text-gray-500">Remember me</label>
            </div>
            <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between ">
                        <input
                        className="bg-sky-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
                        type="submit"
                        value="login now"
                        onClick={handleSubmit}
                        />
                    <p
                    className="text-gray-400 text-sm 
                    underline self-center 
                    md:self-auto mt-4 md:mt-0">
                    Forgot your password?
                    </p>
                </div>
            </div>
        </form>
        </div>
    </div>
    );
}