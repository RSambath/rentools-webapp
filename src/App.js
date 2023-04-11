import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Item from "./pages/Item";
import Payment from "./pages/Payment";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile/*" element={<Profile />} />
        <Route path="/Item" element={<Item />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
