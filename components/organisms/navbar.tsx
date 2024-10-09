"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between p-5 bg-white shadow-lg w-full text-red-950 relative z-10">
        <div className="text-2xl font-extrabold text-yellow-500">PANGXITO</div>
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link
            href="#home"
            className="text-red-950 hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
          >
            Home
          </Link>
          <Link
            href="#packages"
            className="text-red-950 hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
          >
            Packages
          </Link>
          <Link
            href="#about"
            className="text-red-950 hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-red-950 hover:text-yellow-500 hover:scale-110 hover:tracking-wider transition-transform duration-300 ease-out"
          >
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link
            href="#cart"
            className="text-3xl text-black hover:text-yellow-500 transition-colors duration-200"
          >
            <RiShoppingCart2Line />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/signin"
              className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-white text-yellow-500 border border-yellow-500 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
          <button
            onClick={toggleModal}
            className="md:hidden text-3xl text-black hover:text-yellow-500 transition-colors duration-200"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 ease-in-out scale-100 w-4/5 md:w-1/3">
            <h2 className="text-xl font-bold text-center text-red-950 mb-6">
              Menu
            </h2>
            <nav className="flex flex-col space-y-4 text-center">
              <Link
                href="#home"
                onClick={toggleModal}
                className="text-red-950 hover:text-yellow-500 transition-colors duration-200 text-lg"
              >
                Home
              </Link>
              <Link
                href="#packages"
                onClick={toggleModal}
                className="text-red-950 hover:text-yellow-500 transition-colors duration-200 text-lg"
              >
                Packages
              </Link>
              <Link
                href="#about"
                onClick={toggleModal}
                className="text-red-950 hover:text-yellow-500 transition-colors duration-200 text-lg"
              >
                About Us
              </Link>
              <Link
                href="#contact"
                onClick={toggleModal}
                className="text-red-950 hover:text-yellow-500 transition-colors duration-200 text-lg"
              >
                Contact Us
              </Link>

              {/* Login and Sign Up for mobile */}
              <Link
                href="/signin"
                onClick={toggleModal}
                className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={toggleModal}
                className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
              >
                Sign Up
              </Link>
              <button
                onClick={toggleModal}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-200"
              >
                Close
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
