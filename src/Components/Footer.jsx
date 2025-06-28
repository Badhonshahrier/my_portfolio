import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
        
        {/* Brand or About */}
        <div>
          <h3 className="text-xl font-bold text-blue-600">Badhon Shahrier</h3>
          <p className="text-sm mt-2">
            Frontend / MERN Stack Developer <br />
            Bringing ideas to life with code & creativity.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>Email: <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="blank" className="text-blue-600 hover:underline">badhonshahrier404@gmail.com</a></p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
          <div className="flex justify-center sm:justify-start gap-4 text-2xl text-blue-600">
            <a href="https://github.com/Badhonshahrier" target="_blank" rel="">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/shahrier-islam-badhon-514a4b27b/" target="_blank" rel="" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="" >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-sm text-center text-gray-500 mt-6">
        © {currentYear} Badhon Shahrier. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;