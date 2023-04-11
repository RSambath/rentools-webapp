import React from "react"; 
export default function AboutSection(){
  return(
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img src="/Images/BicycleAbout.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-90"/>
    <div className="mx-auto max-w-8xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight sm:text-6xl text-white">About Us</h2>
        <p className = "mt-7 text-xl text-white">
       RenTools is a platform that enables creatives, outdoor, and adventure fans to share their favorite gear with each other in a secure setting. It enables consumers to list and rent products with one another so they can test out new experiences before buying them.
        </p>
      </div>
      </div>
      </div>
  ) 
}

