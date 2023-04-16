import React from "react";
import { Link } from "react-router-dom";
export const LoginForm = () => {
  return (
    <>
      {/* Login Text */}
      <div className="flex-col flex mx-auto text-center items-center">
        <h1 className="text-8xl mt-10 px-2 ">
          Ren<span className="font-bold text-red-600">Tools</span>
        </h1>
        <h2 className="mt-10 text-2xl">Login to RenTools</h2>
      </div>
      {/* Login Form */}
      <form className="flex-col flex mx-auto text-center items-center py-8 space-y-5">
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Email</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"type="text" placeholder="Email..."/>
        </div>
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Password</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"type="text" placeholder="Password..."/>
            {/* Forget Password */}
            <a href="#" className="underline text-right">Forgot password?</a>
        </div>
        <div>
            <button type="submit" className="bg-red-500 border-none text-white w-[500px] py-2 mt-4">Login</button>
        </div>
        {/* <div>
            <Link to="/Signup" className="underline">Don't have an account yet?</Link>
        </div> */}
      </form>
    </>
  );
};
