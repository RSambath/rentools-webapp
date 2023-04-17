import React from 'react'
import { Link } from 'react-router-dom';
export default function HeroImage(){
   return(
    <div className = "bg-white">
        <main>
            {/* Hero */}
            <div className = "relative">
                <div className = "absolute hidden h-3/4 w-1/2 bg-gray-300 lg:block"/>
                <div className = "relative bg-gray-300 lg:bg-transparent">
                <div className="mx-auto max-w-8xl px-1 sm:px-1 lg:grid lg:grid-cols-2 lg:px-9">
                <div className="mx-auto max-w-2xl py-20 lg:max-w-none lg:py-64">
                  <div className="lg:pr-18">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      BEGIN SHARING YOUR GEAR ON Ren<span className="font-bold text-red-600">Tools</span>
                    </h2>
                    <p className = "mt-5 text-xl text-gray-800">
                        <li>Earn money by using your unused gear as a side hustle. </li>
                        <br></br>
                        <li>Help adventure enthusiasts in your community. </li>
                    </p>
                    <div className = "mt-5">
                        <Link className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-blue-500" to= "/about">LEARN MORE</Link>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className = "h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-3/4 lg:w-1/2">
                <img src = "/Images/HeroImage.jpg" alt = "" className = "h-full w-full object-cover object-center"/>
                </div>
                </div>
                </main>
    </div>
   )
}