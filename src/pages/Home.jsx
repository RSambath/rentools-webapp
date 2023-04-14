import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImage from "../components/HeroImage";
import Checkbox from "../components/Checkbox";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import login from "./Login";
import { Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <div className="flex m-auto w-4/5">
        <Checkbox />
        <Menu />
      </div>      <Footer />
    </div>
  );
};
export default Home;
