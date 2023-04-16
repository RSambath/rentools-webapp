import React, { useState } from 'react'
import { Link } from "react-router-dom";
export const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    localStorage.removeItem("email");
    localStorage.setItem("email", email);

    // perform login
  };
  return (
    <>
      {/* Login Text */}
      <div className="flex-col flex mx-auto text-center items-center">
        <Link to="/" className="text-8xl mt-10 px-2 ">
          Ren<span className="font-bold text-red-600">Tools</span>
        </Link>
        <h2 className="mt-10 text-2xl">Login to RenTools</h2>
      </div>
      {/* Login Form */}
      <form className="flex-col flex mx-auto text-center items-center py-8 space-y-5">
        <div className="flex flex-col text-left space-y-1">
          <label className="text-lg font-bold">Email</label>
          <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none" placeholder="Email..." type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col text-left space-y-1">
          <label className="text-lg font-bold">Password</label>
          <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none" type="text" placeholder="Password..." />
          {/* Forget Password */}
          <a href="#" className="underline text-right">Forgot password?</a>
        </div>
        <div>
          <Link to="/Profile/*">
            <button onClick={handleLogin} type="submit" className="bg-red-500 border-none text-white w-[500px] py-2 mt-4">Login</button>

          </Link>        </div>
        <div>
          <Link to="/Signup" className="underline">Don't have an account yet?</Link>
          <Link to="/Profile">Account</Link>
        </div>
      </form>
    </>
  );
};
