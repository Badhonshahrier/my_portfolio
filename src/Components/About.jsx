import React from "react";


const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white/80 backdrop-blur-md shadow-xl rounded-3xl overflow-hidden border border-blue-200">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-b from-white via-blue-100 to-white p-8">
          <img
    
            alt="Badhon Shahrier"
            className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-md hover:scale-105 transition-transform"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4 underline decoration-blue-400 decoration-4">
            About Me
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              👋 I’m <strong className="text-blue-600">Badhon Shahrier</strong>, a dedicated & detail-oriented
              <strong> MERN Stack Developer</strong> with a passion for building modern web interfaces.
            </li>
            <li>
              💻 I enjoy turning designs into clean, functional code using technologies
              like <span className="font-medium">React, Tailwind CSS, Node.js & MongoDB</span>.
            </li>
            <li>
              🎯 I love creating user-focused apps with smooth animations & great performance,
              whether it’s a dashboard, e-commerce site or portfolio.
            </li>
            <li>
              ⚽ Outside of code, I enjoy cricket, music, and playing around with design tools —
              anything that sparks my creativity.
            </li>
          </ul>

          <p className="mt-6 text-md font-semibold text-blue-700">
            🚀 I’m open to collaborations, freelance gigs, and building innovative products together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;