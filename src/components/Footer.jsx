import React from "react"; 
import {FaInstagram} from "react-icons/fa"; //install npm icons
import {FaFacebook} from "react-icons/fa"; 
import {FaYoutube} from "react-icons/fa"; 
import {FaTwitter} from "react-icons/fa"; 
export default function Footer(){
return(
    <div className = " bg-red-300 h-full w-full justify-around items-start p-20 mt-10">
        <div className>
        <ul>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center pb-10">
          Ren<span className="font-bold text-red-600">Tools</span>
        </h2>
        <div className = "flex gap-20 pb-7 justify-center ">
            {/*Social Media Icon Section */}
            <FaInstagram className = "text-2xl hover:text-indigo-700"/>
            <FaFacebook className = "text-2xl hover:text-indigo-700"/>
            <FaYoutube className = "text-2xl hover:text-indigo-700"/>
            <FaTwitter className = "text-2xl hover:text-indigo-700"/>
        </div>
        </ul>
        </div>
<div className = "p-5">
    <ul>
        <p className = "text-lg sm:text-1xl lg:text-2xl px-2">
            <ul className = "text-center justify-center items-center font-mono">
                RenTool@gmail.com
            </ul>
            <ul className = "text-center justify-center items-center font-mono">
                +1 123 456 7899
            </ul>
        </p>
    </ul>
</div>
<div className = "justify-center items-center text-center p-5 bg-red-100">
    <h1 className = "text-gray-800 font-serif">
        @RenTools 2023 | All rights reserved | 
    </h1>
</div>
</div>
)}