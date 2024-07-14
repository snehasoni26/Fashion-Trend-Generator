import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full shadow-md h-25 bg-orange-100 sticky top-0 z-50">
      <div className="container mx-auto flex flex-row items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Fashionista</div>

        {/* Navigation Links */}
        <div className="flex space-x-10 text-lg">
          <a
            href="#about"
            className="text-gray-600 px-6 py-4 hover:text-white  hover:bg-gray-800 transition duration-300 rounded-md"
          >
            About
          </a>
          <a
            href="#explore"
            className="text-gray-600 px-6 py-4 hover:text-white  hover:bg-gray-800 transition duration-300 rounded-md"
          >
            Explore
          </a>
          <a
            href="#contact"
            className="text-gray-600 px-6 py-4 hover:text-white  hover:bg-gray-800 transition duration-300 rounded-md"
          >
            Contact Us
          </a>
        </div>

        {/* User Actions */}
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-gray-900 transition duration-300">
            Login
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
