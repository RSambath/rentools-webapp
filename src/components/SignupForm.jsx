import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; //npm install react-hook-form
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setComfirm] = useState('');
  const [message, setMessage] = useState(false);
  const email1 = localStorage.getItem("email");

  const onSubmit = async () => {
    try {
      // const response = await axios.post('http://localhost:8080/api/v1/tools/users', { email, password });

      if (cPassword != password) {
        return setMessage(true);
      }

      setMessage(false);
      localStorage.removeItem("email");
      localStorage.setItem("email", email);
      window.location.href = '/Profile';
    } catch (error) {
      setMessage(true);
    }
  };

  return (
    <>
      {/* Login Text */}
      <div className="flex-col flex mx-auto text-center items-center">
        <h1 className="text-8xl mt-10 px-2 ">
          Ren<span className="font-bold text-red-600">Tools</span>
        </h1>
        <h2 className="mt-10 text-2xl">Signup for RenTools</h2>
      </div>
      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex mx-auto text-center items-center py-8 space-y-5">
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Name</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"
              defaultValue={username}
              type="text" 
              placeholder="name..." 
              onChange={(e) => setUsername(e.target.value)} 
              {...register("username", { required: "Username is required"})}
            />
            {errors.username && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Email</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"
              defaultValue={email}
              type="email" 
              placeholder="email..." 
              onChange={(e) => setEmail(e.target.value)} 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Password</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"
              defaultValue={password}
              type="password" 
              placeholder="password..." 
              onChange={(e) => setPassword(e.target.value)} 
              {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long"} })}
            />
            {errors.password && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Confirm Password</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"
              defaultValue={cPassword}
              type="password" 
              placeholder="Comfirm password..." 
              onChange={(e) => setComfirm(e.target.value)} 
              {...register("cPassword", { required: "Comfirm Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long"} })}        
            />
          {errors.cPassword && <span className="text-red-500">This field is required</span>}
          </div>
        <div>
            <button type="submit" className="bg-red-500 border-none text-white w-[500px] py-2 mt-4">Sign up</button>
            {message === true && (
              <span className="text-red-500 block">Password does not match</span>
            )}
        </div>
        <div>
            <Link to="/Login" className="underline">Already have an account?</Link>
        </div>
      </form>
    </>
  )
}

export default SignupForm