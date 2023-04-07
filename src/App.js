import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
import { Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
