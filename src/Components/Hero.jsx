import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImg from "../assets/WhatsApp_Image_2025-06-25_at_11.12.36_393c4b58-removebg-preview (1).png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-r rounded-4xl from-blue-100 via-white to-blue-50 py-12 lg:py-24 my-14">
      <div className="max-w-7xl lg:ml-20 mx-auto px-4 flex flex-col-reverse items-center lg:flex-row lg:justify-between gap-10">
        
        {/* LEFT SIDE - Info */}
        <div className="text-center lg:text-left flex-1" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 italic">
            Hi, I’m{" "}
            <span className="text-blue-600 italic">Badhon Shahrier</span>
          </h1>

          <h2 className="text-2xl text-gray-700 mb-4">
            A Passionate Frontend / MERN Stack Developer
          </h2>

          <p className="text-gray-600 mb-6">
            I'm a developer who transforms creative ideas into functional
            digital experiences. <br />
            My passion lies in building interactive, user-centered web
            applications using modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start mb-6 text-2xl">
            <a
            className="text-black"
              href="https://github.com/Badhonshahrier"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shahrier-islam-badhon-514a4b27b/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a className="text-blue-600" href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href=""
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1" data-aos="zoom-in">
          <img
            src={HeroImg}
            alt=""
            className="w-80 h-80 object-cover rounded-full mx-auto shadow-lg border-4 border-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;