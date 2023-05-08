import React, { useState } from 'react'
import { Link } from "react-router-dom";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function login() {
    console.log('login()');

    try {
      const response = await fetch('http://localhost:8080/api/v1/users/getUser/user9@gmail.com/11111111', {
        method: 'GET',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        // Login successful
        const data = await response.json();
        // Do something with the data
        console.log('Login successful:', data);
        console.log(email);
        console.log(password);

        localStorage.removeItem("email");
        localStorage.setItem("email", email);
      } else {
        // Login failed
        const data = await response.json();
        console.log('Login failed:', data);

        if (response.status === 401) {
          // Incorrect email or password
          console.log('Incorrect email or password');
        } else {
          // Other error
          console.log('An error occurred');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleLogin = () => {

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
          <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none" placeholder="Password..." type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* Forget Password */}
          <a href="#" className="underline text-right">Forgot password?</a>
        </div>
        <div>
          <Link to="/Profile/*">
            <button onClick={login} type="submit" className="bg-red-500 border-none text-white w-[500px] py-2 mt-4">Login</button>
          </Link>        </div>
        <div>
          <Link to="/Signup" className="underline">Don't have an account yet?</Link>
          <Link to="/Profile">Account</Link>
        </div>
      </form>
    </>
  );
};