import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import HeroImg from "../assets/WhatsApp_Image_2025-06-25_at_11.12.36_393c4b58-removebg-preview (1).png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="relative rounded-4xl py-12 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl lg:ml-20 mx-auto px-4 flex flex-col-reverse items-center lg:flex-row lg:justify-between gap-10">
        {/* LEFT SIDE - Info */}
        <div className="text-center lg:text-left flex-1" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent italic">
              Badhon Shahrier
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300 mb-4">
            Frontend Web Developer || MERN Enthusiast
          </h2>

          <p className="text-gray-200 mb-6">
            I'm a developer who transforms creative ideas into functional
            digital experiences. <br />
            My passion lies in building interactive, user-centered web
            applications using modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start mb-6 text-2xl">
            <a
              className="text-white hover:text-blue-400 transition-colors duration-300"
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
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Badhon404"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              <FaSquareXTwitter />
            </a>
            <a
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href=""
            download
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex-1" data-aos="zoom-in">
          <div className="relative">
            <div className="absolute inset-0  rounded-full blur-xl"></div>
            <img
              src={HeroImg}
              className="relative w-80 h-80 object-cover rounded-full mx-auto shadow-2xl border-4 border-white/20 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
