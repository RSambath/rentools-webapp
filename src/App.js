import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
