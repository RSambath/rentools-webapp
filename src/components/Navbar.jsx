import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side*/}
      <div className="flex items-center">
        <div className="cursor-pointer mt-2">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Ren<span className="font-bold text-red-600">Tools</span>
        </h1>
      </div>
      {/* Search bar */}
      <div className="bg-red-200 rounded-full flex items-center px-2 sm:w-[400px] w-[200px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search for items..."
        />
      </div>
      {/* Right side*/}
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium text-xl flex flex-col p-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-red-500 rounded md:border-0 md:p-0 hover:text-black"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-red-500 rounded md:border-0 md:p-0 hover:text-black"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-red-500 rounded md:border-0 md:p-0 hover:text-black"
            >
              Help
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-red-500 rounded md:border-0 md:p-0 hover:text-black"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar