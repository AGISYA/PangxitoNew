"use client";
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
          <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 ease-in-out scale-100">
            <h2 className="text-xl font-bold text-center text-black mb-4">
              Menu
            </h2>
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                onClick={toggleModal}
                className="hover:text-yellow-500 transition-colors duration-200 text-black text-lg"
              >
                Home
              </a>
              <a
                href="#packages"
                onClick={toggleModal}
                className="hover:text-yellow-500 transition-colors duration-200 text-black text-lg"
              >
                Packages
              </a>
              <a
                href="#about"
                onClick={toggleModal}
                className="hover:text-yellow-500 transition-colors duration-200 text-black text-lg"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={toggleModal}
                className="hover:text-yellow-500 transition-colors duration-200 text-black text-lg"
              >
                Contact Us
              </a>
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
