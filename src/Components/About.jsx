import React, { useEffect, useState } from "react";
import {
  Code,
  Laptop,
  Palette,
  Users,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id=""
      className="relative min-h-screen flex items-center justify-center px-6 py-20  text-white"
    >
      <div
        className={`max-w-6xl w-full flex flex-col md:flex-row bg-white/10 rounded-3xl shadow-2xl overflow-hidden border border-white/10 p-6 md:p-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Right Side – Text Content */}
        <div className="md:w-full">
          <h2 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-500">
            About Me
          </h2>

          <ul className="space-y-6 text-white/90 text-lg">
            {/* Introduction */}
            <li className="flex gap-3 items-start hover:transform hover:scale-105 transition-transform duration-300">
              <Users className="text-blue-400 text-xl mt-1 flex-shrink-0" />
              <span>
                Hello! I'm <strong className="text-blue-300">Badhon Shahrier</strong>, a dedicated and detail-oriented{" "}
                <strong className="text-green-300">MERN Stack Developer</strong> passionate about building modern, accessible, and performant web applications. 
                I began my coding journey with a strong curiosity about how websites and apps work behind the scenes. Over time, I honed my skills in full-stack development and fell in love with building dynamic web apps that solve real-world problems.
              </span>
            </li>
            
            {/* Work & Passion */}
            <li className="flex gap-3 items-start hover:transform hover:scale-105 transition-transform duration-300">
              <Code className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
              <span>
                I specialize in transforming stunning UI/UX designs into functional code using technologies like{" "}
                <strong className="text-pink-300">React, Tailwind CSS, Node.js, and MongoDB</strong>. I particularly enjoy creating responsive, smooth, and user-friendly web apps such as dashboards, portfolio sites, and e-commerce platforms.
              </span>
            </li>
            
            {/* Strengths */}
            <li className="flex gap-3 items-start hover:transform hover:scale-105 transition-transform duration-300">
              <Laptop className="text-purple-400 text-xl mt-1 flex-shrink-0" />
              <span>
                My strength lies in building user-friendly, high-performance web applications with intuitive designs and seamless animations. I focus on ensuring that every product I build is not only functional but also enjoyable to use.
              </span>
            </li>
            
            {/* Hobbies */}
            <li className="flex gap-3 items-start hover:transform hover:scale-105 transition-transform duration-300">
              <Palette className="text-indigo-400 text-xl mt-1 flex-shrink-0" />
              <span>
                Outside of coding, I enjoy playing cricket 🏏, exploring music 🎧, and experimenting with design tools like Figma to fuel my creativity. I believe these hobbies help me approach coding from different perspectives and improve my design sense.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-xl font-semibold text-center text-teal-300 animate-pulse">
             Open to collaborations, freelance projects, and building creative products together!
          </p>

          <div className="flex justify-center gap-8 mt-8">
            <a 
              href="https://github.com/BadhonShahrier" 
              target="_blank" 
              
              className="group"
            >
              <Github className="text-gray-300 text-3xl hover:text-teal-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </a>
            <a 
              href="https://www.linkedin.com/in/badhon-dev404/" 
              target="_blank" 
              
              className="group"
            >
              <Linkedin className="text-gray-300 text-3xl hover:text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </a>
            <a 
              href="mailto:badhonshahrier404@gmail.com" 
              target="_blank" 
              
              className="group"
            >
              <Mail className="text-gray-300 text-3xl hover:text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

