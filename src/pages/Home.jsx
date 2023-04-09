import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Menu from "../components/Menu/Menu"
import Checkbox from "../components/Menu/Checkbox"
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage/>
      <Checkbox/> 
      <Menu />
      <Footer/>
    </div>
  );
};
export default Home;
