import React from "react";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaPalette,
  FaUserFriends,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b  text-white"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 p-6 md:p-10">
        
        {/* Optional: Left Side – Profile Image */}
        {/* <div className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <img
            src="/path-to-your-image.jpg"
            alt="Badhon Shahrier"
            className="w-56 h-56 object-cover rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div> */}

        {/* Right Side – Text Content */}
        <div className="md:w-full">
          <h2 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-500">
            About Me
          </h2>

          <ul className="space-y-6 text-white/90 text-lg ">
            <li className="flex gap-3 items-start">
              <FaUserFriends className="text-blue-400 text-xl mt-1" />
              <span>
                Hello! I'm <strong className="text-blue-300">Badhon Shahrier</strong>, a dedicated and detail-oriented{" "}
                <strong className="text-green-300">MERN Stack Developer</strong> passionate about building modern, accessible, and performant web applications.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <FaCode className="text-yellow-400 text-xl mt-1" />
              <span>
                I love transforming UI/UX designs into functional code using technologies like{" "}
                <strong className="text-pink-300">React, Tailwind CSS, Node.js, and MongoDB</strong>.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <FaLaptopCode className="text-purple-400 text-xl mt-1" />
              <span>
                My strength lies in building user-friendly dashboards, portfolio sites, and e-commerce platforms with smooth animations and responsive layouts.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <FaPalette className="text-indigo-400 text-xl mt-1" />
              <span>
                Outside of coding, I enjoy playing cricket 🏏, exploring music 🎧, and experimenting with design tools that spark creativity.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-xl font-semibold text-center text-teal-300">
            🚀 Open to collaborations, freelance projects, and building creative products together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
