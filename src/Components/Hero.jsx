import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Download,
  Code,
  Laptop,
  Rocket,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "React Specialist",
    "UI/UX Designer",
  ];

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-200/40 rounded-full blur-lg animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-200/30 rounded-full blur-xl animate-bounce delay-700"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* LEFT SIDE - Enhanced Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full text-blue-700 font-medium mb-8 shadow-lg backdrop-blur-sm">
              <Rocket className="text-blue-600" />
              <span>Welcome to my portfolio</span>
            </div>

            {/* Main heading with enhanced styling */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Hi, I'm </span>
              <br className="lg:hidden" />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 italic animate-pulse">
                  Badhon Shahrier
                </span>
                {/* Underline animation */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 animate-pulse"></div>
              </span>
            </h1>

            {/* Animated role subtitle */}
            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700">
                A Passionate{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500">
                    {roles[currentRole]}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-indigo-200/50 rounded-lg blur-sm opacity-30"></div>
                </span>
              </h2>
            </div>

            {/* Enhanced description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              I transform creative visions into powerful digital experiences.
              Specializing in
              <span className="font-semibold text-blue-600 mx-1">React</span>,
              <span className="font-semibold text-green-600 mx-1">Node.js</span>
              , and
              <span className="font-semibold text-purple-600 mx-1">
                modern web technologies
              </span>
              to build interactive, user-centered applications that make a
              difference.
            </p>

            {/* Professional stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-md mx-auto lg:mx-0">
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Projects
                </div>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-indigo-100">
                <div className="text-3xl font-bold text-indigo-600">3+</div>
                <div className="text-sm text-gray-600 font-medium">Years</div>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-100">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600 font-medium">Success</div>
              </div>
            </div>

            {/* Enhanced social icons */}
            <div className="flex gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://github.com/Badhonshahrier"
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <Github className="text-2xl text-gray-700 group-hover:text-gray-900 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href="https://www.linkedin.com/in/shahrier-islam-badhon-514a4b27b/"
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <Linkedin className="text-2xl text-blue-600 group-hover:text-blue-700 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-blue-300/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <Facebook className="text-2xl text-blue-600 group-hover:text-blue-700 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-blue-300/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href=""
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Download className="group-hover:animate-bounce" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <button className="group px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                <Code className="group-hover:animate-pulse" />
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Enhanced Image Section */}
          <div
            className={`flex-1 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Decorative rings */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <div className="w-full h-full border-2 border-dashed border-blue-300/50 rounded-full"></div>
              </div>
              <div
                className="absolute inset-8 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              >
                <div className="w-full h-full border-2 border-dashed border-indigo-300/50 rounded-full"></div>
              </div>

              {/* Main image container */}
              <div className="relative z-10 p-8">
                <div className="relative group">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                  {/* Image frame */}
                  <div className="relative">
                    <img
                      src="/src/assets/a-professional-studio-portrait-of-a-man-_qDqg37lrSKyb1foABECCgw_fW4hUPfNTUiD3W6fed970w.jpeg"
                      alt="Badhon Shahrier"
                      className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl border-8 border-white group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Floating skill badges */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-2xl shadow-lg animate-bounce">
                      <Code className="text-xl" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-2xl shadow-lg animate-bounce delay-1000">
                      <Laptop className="text-xl" />
                    </div>
                    <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-2xl shadow-lg animate-bounce delay-500">
                      <Rocket className="text-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech stack indicators */}
              <div className="absolute top-10 right-10 space-y-2">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow-lg border border-blue-200">
                  React
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-green-600 shadow-lg border border-green-200">
                  Node.js
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-600 shadow-lg border border-purple-200">
                  MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
