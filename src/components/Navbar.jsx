import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side*/}
      <div className="flex items-center">
        <Link to="/" className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Ren<span className="font-bold text-red-600">Tools</span>
        </Link>
      </div>
      {/* Search bar */}
      <div className="bg-gray rounded-full border border-color flex items-center px-2 sm:w-[400px] w-[200px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search for items..."
        />
      </div>
      {/* Right side*/}
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium text-xl flex flex-col p-1 -mr-6 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link className="block py-2 pl-3 pr-4 text-red-500 rounded md:border-0 md:p-0 hover:text-black" to="/">Home</Link>
          </li>
          <li>
            <Link className="block py-2 pl-3 pr-4 text-red-500 rounded md:border-0 md:p-0 hover:text-black" to="/about">About</Link>
          </li>
          <li>
            <Link className="block py-2 pl-3 pr-4 text-red-500 rounded md:border-0 md:p-0 hover:text-black" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar