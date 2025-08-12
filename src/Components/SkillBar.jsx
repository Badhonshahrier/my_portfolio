// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Icons
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
// } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiFigma, SiExpress } from "react-icons/si";
// import Marquee from "react-fast-marquee";

// const SkillsBar = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section id="skills" className="bg-gradient-to-b from-white via-blue-100 to-white rounded-4xl py-20  my-20 ">
//         <h2
//           className="text-4xl font-bold  text-center mb-12 text-blue-800 "
//           data-aos="fade-up"
//         >
//           My Skills
//         </h2>
//       <div className="max-w-7xl mx-auto">

//         <Marquee>
//           <div className="overflow-hidden  relative">
//             <div className="animate-scroll flex gap-12 items-center">

//               {Array(2)
//                 .fill()
//                 .map(() => (
//                   <>

//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <FaHtml5 size={40} color="#e34c26" />
//                       <span className="text-sm mt-1">HTML</span>
//                     </div>

//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <FaCss3Alt size={40} color="#264de4" />
//                       <span className="text-sm mt-1">CSS</span>
//                     </div>
//                     {/* JS */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <FaJs size={40} color="#f0db4f" />
//                       <span className="text-sm mt-1">JavaScript</span>
//                     </div>
//                     {/* React */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <FaReact size={40} color="#61DBFB" />
//                       <span className="text-sm mt-1">React</span>
//                     </div>
//                     {/* Tailwind */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <SiTailwindcss size={40} color="#38bdf8" />
//                       <span className="text-sm mt-1">Tailwind</span>
//                     </div>
//                     {/* Node.js */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <FaNodeJs size={40} color="#3c873a" />
//                       <span className="text-sm mt-1">Node.js</span>
//                     </div>
//                     {/* Express */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <SiExpress size={40} />
//                       <span className="text-sm mt-1">Express</span>
//                     </div>
//                     {/* MongoDB */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <SiMongodb size={40} color="#47A248" />
//                       <span className="text-sm mt-1">MongoDB</span>
//                     </div>
//                     {/* Git & GitHub */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <FaGitAlt size={40} color="#f34f29" />
//                       <span className="text-sm mt-1">GitHub</span>
//                     </div>
//                     {/* Figma */}
//                     <div className="flex flex-col items-center text-center text-blue-800">
//                       <SiFigma size={40} color="#a259ff" />
//                       <span className="text-sm mt-1 ml-6">Figma</span>
//                     </div>
//                   </>
//                 ))}
//             </div>
//           </div>
//         </Marquee>
//       </div>
//     </section>
//   );
// };

// export default SkillsBar;

//

import React, { useEffect, useState } from "react";
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
  const [activeCategory, setActiveCategory] = useState("all");

  // Organized skill categories
  const skillCategories = {
    frontend: {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 size={40} color="#e34c26" />,
          level: 95,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt size={40} color="#264de4" />,
          level: 90,
        },
        {
          name: "JavaScript",
          icon: <FaJs size={40} color="#f0db4f" />,
          level: 85,
        },
        {
          name: "React",
          icon: <FaReact size={40} color="#61DBFB" />,
          level: 88,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={40} color="#38bdf8" />,
          level: 92,
        },
      ],
    },
    backend: {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs size={40} color="#3c873a" />,
          level: 82,
        },
        {
          name: "Express.js",
          icon: <SiExpress size={40} color="#000000" />,
          level: 80,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={40} color="#47A248" />,
          level: 85,
        },
      ],
    },
    tools: {
      title: "Tools",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt size={40} color="#f34f29" />,
          level: 88,
        },
        {
          name: "Figma",
          icon: <SiFigma size={40} color="#a259ff" />,
          level: 75,
        },
      ],
    },
  };

  const getAllSkills = () => {
    return Object.values(skillCategories).flatMap((category) =>
      category.skills.map((skill) => ({
        ...skill,
        categoryTitle: category.title,
      }))
    );
  };

  // Enhanced Marquee Component
  const EnhancedMarquee = ({ skills }) => (
    <Marquee speed={50} gradient={false} className="py-4">
      {skills.map((skill, index) => (
        <div key={`${skill.name}-${index}`} className="mx-8">
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-110 transition-all duration-300">
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-blue-800">
              {skill.name}
            </span>
            {skill.categoryTitle && (
              <span className="text-xs text-gray-500 mt-1">
                {skill.categoryTitle}
              </span>
            )}
          </div>
        </div>
      ))}
    </Marquee>
  );
  return (
    <section
      id=""
      className="bg-gradient-to-b from-white via-blue-100 to-white rounded-4xl pt-20 my-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center">
          <h2
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            My Skills & Expertise
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div
          className="flex justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {["all", ...Object.keys(skillCategories)].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6  rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category ? "" : ""
              }`}
            >
              {category === "all" ? "" : ""}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        {activeCategory === "all" ? (
          <div>
            {/* Marquee Display for All Skills */}
            <div className="mb-16" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-bold mt-4 text-center mb-8 text-blue-800">
                Technologies I Work With
              </h3>
              <div className="pb-10">
                <EnhancedMarquee skills={getAllSkills()} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default SkillsBar;
