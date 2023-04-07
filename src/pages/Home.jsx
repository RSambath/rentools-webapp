import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import login from "./Login";
import { Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
