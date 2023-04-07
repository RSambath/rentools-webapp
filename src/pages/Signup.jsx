import React from 'react'
import SignupForm from '../components/SignupForm';
const Signup = () => {
  return (
    <div className="h-screen flex w-full">
        {/* Image */}
      <div className="h-screen w-3/5 loginCover">
      </div>
        {/* Login */}
      <div className="flex-grow">
        <SignupForm/>
      </div>
    </div>
  )
}

export default Signup