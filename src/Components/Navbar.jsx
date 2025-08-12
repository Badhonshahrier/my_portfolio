import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Contact", path: "contact" },
    { name: "Resume", path: "resume" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            MyPortfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.path}
                smooth={true}
                duration={500}
                offset={-70} // navbar height adjust
                className="cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm border border-transparent hover:border-white/20"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-2xl text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.path}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="block cursor-pointer text-gray-300 hover:text-white hover:bg-white/10 font-medium px-3 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

