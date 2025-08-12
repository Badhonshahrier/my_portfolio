import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleScrollOrNavigate = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-white cursor-pointer select-none"
          onClick={() => handleScrollOrNavigate("home")}
        >
          <img src="https://i.ibb.co.com/v6Wwnnyk/images-removebg-preview.png" className="w-14 object-cover" alt="" />
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollOrNavigate(link.id)}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollOrNavigate(link.id)}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-lg"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
