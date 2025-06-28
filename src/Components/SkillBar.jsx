import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFigma, SiExpress } from "react-icons/si";
import Marquee from "react-fast-marquee";

const SkillsBar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="bg-gradient-to-b from-white via-blue-100 to-white rounded-4xl py-20  my-20 ">
        <h2
          className="text-4xl font-bold  text-center mb-12 text-blue-800 "
          data-aos="fade-up"
        >
          My Skills
        </h2>
      <div className="max-w-7xl mx-auto">
        


        <Marquee>
          <div className="overflow-hidden  relative">
            <div className="animate-scroll flex gap-12 items-center">
        
              {Array(2)
                .fill()
                .map(() => (
                  <>
            
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <FaHtml5 size={40} color="#e34c26" />
                      <span className="text-sm mt-1">HTML</span>
                    </div>
                  
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <FaCss3Alt size={40} color="#264de4" />
                      <span className="text-sm mt-1">CSS</span>
                    </div>
                    {/* JS */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <FaJs size={40} color="#f0db4f" />
                      <span className="text-sm mt-1">JavaScript</span>
                    </div>
                    {/* React */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <FaReact size={40} color="#61DBFB" />
                      <span className="text-sm mt-1">React</span>
                    </div>
                    {/* Tailwind */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <SiTailwindcss size={40} color="#38bdf8" />
                      <span className="text-sm mt-1">Tailwind</span>
                    </div>
                    {/* Node.js */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <FaNodeJs size={40} color="#3c873a" />
                      <span className="text-sm mt-1">Node.js</span>
                    </div>
                    {/* Express */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <SiExpress size={40} />
                      <span className="text-sm mt-1">Express</span>
                    </div>
                    {/* MongoDB */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <SiMongodb size={40} color="#47A248" />
                      <span className="text-sm mt-1">MongoDB</span>
                    </div>
                    {/* Git & GitHub */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <FaGitAlt size={40} color="#f34f29" />
                      <span className="text-sm mt-1">GitHub</span>
                    </div>
                    {/* Figma */}
                    <div className="flex flex-col items-center text-center text-blue-800">
                      <SiFigma size={40} color="#a259ff" />
                      <span className="text-sm mt-1 ml-6">Figma</span>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SkillsBar;
