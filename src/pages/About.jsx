import React from 'react';
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection"; 
import StorySection from "../components/StorySection"; 
import AboutValues from "../components/AboutValues"; 
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutSection/>
      <StorySection/>
      <AboutValues/>
      <Footer/>
    </div>
  )
}
export default About