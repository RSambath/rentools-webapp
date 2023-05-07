import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; //npm install react-hook-form
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);
  const email1 = localStorage.getItem("email");

  // fetch(`http://localhost:8080/api/v1/users`)
  // .then(response => response.json())
  // .then(data => console.log(data));

  const onSubmit = async () => {
    try {
      // const response = await axios.post('http://localhost:8080/api/v1/tools/users', { email, password });
      setMessage(false);
      localStorage.removeItem("email");
      localStorage.setItem("email", email);
      window.location.href = '/Profile';
    } catch (error) {
      setMessage(true);
    }
  };


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
      <form className="flex-col flex mx-auto text-center items-center py-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Email</label>
            <input 
              className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none" 
              placeholder="Email..." 
              type="email" 
              defaultValue={email} 
              onChange={(e) => setEmail(e.target.value)} 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Password</label>
            <input 
              className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"
              defaultValue={password}
              type="password" 
              placeholder="Password..." 
              onChange={(e) => setPassword(e.target.value)} 
              {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long"} })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}

            {/* Forget Password */}
            <a href="#" className="underline text-right">Forgot password?</a>
          </div>
          <div>
            {/* <Link to="/Profile/*">
              <button onClick={handleLogin} type="submit" className="bg-red-500 border-none text-white w-[500px] py-2 mt-4">Login</button>

            </Link>         */}
            <button type="submit" className="bg-red-500 border-none text-white w-[500px] py-2 mt-4">Login</button>
            {/* {message === true && (
              <span className="text-red-500 block">User already exists or doesn't exists</span>
            )} */}
          </div>
          <div>
            <Link to="/Signup" className="underline">Don't have an account yet?</Link>
            <Link to="/Profile">Account</Link>
          </div>                  
      </form>
    </>
  );
};