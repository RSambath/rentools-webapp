import React from "react";
import { LoginForm } from "../components/LoginForm";
const Login = () => {
  return (
    <div className="h-screen flex w-full">
        {/* Image */}
      <div className="h-screen w-3/5 loginCover">
      </div>
        {/* Login */}
      <div className="flex-grow">
        <LoginForm/>
      </div>
    </div>

  )
};

export default Login;
