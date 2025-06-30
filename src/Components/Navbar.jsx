import React, { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
 
    { name: "Contact", path: "/contact" },
    { name: "Resume", },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">MyPortfolio</Link>
          </div>


          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-500 transition duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-2xl text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-blue-500 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
