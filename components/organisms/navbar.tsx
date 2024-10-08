"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-5 bg-white shadow-lg w-full text-red-950 relative z-10">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-yellow-500">Pangxito</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 font-medium">
        <a
          href="#home"
          className="hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
        >
          Home
        </a>
        <a
          href="#packages"
          className="hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
        >
          Packages
        </a>
        <a
          href="#about"
          className="hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
        >
          Contact Us
        </a>
      </nav>

      {/* Cart and Booking Button */}
      <div className="flex items-center space-x-6">
        <a
          href="#cart"
          className="text-3xl text-black hover:text-yellow-500 transition-colors duration-200"
        >
          <RiShoppingCart2Line />
        </a>
        <a
          href="#booking"
          className="hidden md:block bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-200"
        >
          Booking Now
        </a>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-3xl text-black hover:text-yellow-500 transition-colors duration-200">
          <FaBars />
        </button>
      </div>
    </header>
  );
}
