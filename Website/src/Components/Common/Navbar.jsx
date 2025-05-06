// src/Components/Common/Navbar.jsx

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-8 left-12 right-12 bg-gray-100 shadow-lg rounded-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Brand */}
          <div className="flex items-center">
            <div className="text-blue-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-blue-600">BetterWeb</span>
          </div>

          {/* Center: Nav Links (desktop) */}
          <div className="hidden md:flex space-x-6">
            <a href="aboutus" className="text-blue-600 hover:text-blue-800 font-medium">
              About Us
            </a>
            <a href="features" className="text-blue-600 hover:text-blue-800 font-medium">
              Features
            </a>
            <a href="premium" className="text-blue-600 hover:text-blue-800 font-medium">
              Premium
            </a>
          </div>

          {/* Right: Signup + Login (desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link to='/signup'>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Signup
              </button>
            </Link>
            <Link to='/login'>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow rounded-b-2xl">
          <a href="aboutus" className="block text-blue-600 hover:text-blue-800 font-medium">
            About Us
          </a>
          <a href="features" className="block text-blue-600 hover:text-blue-800 font-medium">
            Features
          </a>
          <a href="premium" className="block text-blue-600 hover:text-blue-800 font-medium">
            Premium
          </a>
          <Link to='/signup'>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Signup
            </button>
          </Link>
          <Link to='/login'>
            <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
