import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
import Tools from "./pages/Tools";
import Rent from "./pages/Rent";
import Item from "./pages/Item";
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
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:id" element={<Rent />} />
        <Route path="/item" element={<Item />} />
        <Route path="/Profile/*" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
