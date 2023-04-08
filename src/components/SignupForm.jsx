import React from 'react'
import {Link} from 'react-router-dom'
const SignupForm = () => {
  return (
    <>
      {/* Login Text */}
      <div className="flex-col flex mx-auto text-center items-center">
        <Link to="/" className="text-8xl mt-10 px-2 ">
          Ren<span className="font-bold text-red-600">Tools</span>
        </Link>
        <h2 className="mt-10 text-2xl">Signup for RenTools</h2>
      </div>
      {/* Login Form */}
      <form className="flex-col flex mx-auto text-center items-center py-8 space-y-5">
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Name</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"type="text" placeholder="Name..."/>
        </div>
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Email</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"type="text" placeholder="Email..."/>
        </div>
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Password</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"type="text" placeholder="Password..."/>
        </div>
        <div className="flex flex-col text-left space-y-1">
            <label className="text-lg font-bold">Confirm Password</label>
            <input className="border-2 border-red-500 rounded-xl  w-[500px] bg-transparent p-2 focus:outline-none"type="text" placeholder="Confirm Password..."/>
        </div>
        <div>
            <button type="submit" className="bg-red-500 border-none text-white w-[500px] py-2 mt-4 border border-black rounded-xl px-5 py-1">Sign up</button>
        </div>
        <div>
            <Link to="/Login" className="underline">Already have an account?</Link>
        </div>
      </form>
    </>
  )
}

export default SignupForm