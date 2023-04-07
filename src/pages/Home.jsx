import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImage from "../components/HeroImage"; 
import Footer from "../components/Footer"; 
import login from "./Login";
import { Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroImage/>
      <Footer/>
    </div>
  );
};
export default Home;
