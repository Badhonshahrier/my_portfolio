import { useState } from "react"
import "aos/dist/aos.css"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiFigma, SiExpress } from "react-icons/si"
import Marquee from "react-fast-marquee"

const SkillsBar = () => {
  const [activeCategory, setActiveCategory] = useState("all")

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
  }

  const getAllSkills = () => {
    return Object.values(skillCategories).flatMap((category) =>
      category.skills.map((skill) => ({
        ...skill,
        categoryTitle: category.title,
      })),
    )
  }
  const EnhancedMarquee = ({ skills }) => (
    <Marquee speed={50} gradient={false} className="py-4">
      {skills.map((skill, index) => (
        <div key={`${skill.name}-${index}`} className="mx-8">
          <div className="flex flex-col items-center text-center group hover:transform hover:scale-110 transition-all duration-300">
            <div className="w-20 h-20 flex items-center justify-center bg-white/50 border border-white/20 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:border-white/40 transition-all duration-300 mb-3">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-white">{skill.name}</span>
            {skill.categoryTitle && <span className="text-xs text-gray-400 mt-1">{skill.categoryTitle}</span>}
          </div>
        </div>
      ))}
    </Marquee>
  )

  return (
    <section id="" className="relative min-h-screen pt-20  overflow-hidden">
      

      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* Enhanced Header */}
        <div className="text-center">
          <h2
            className="md:text-5xl text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            My Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full" />
        </div>
       
{/* Skills Display */}
        {activeCategory === "all" ? (
          <div>
            {/* Marquee Display for All Skills */}
            <div className="" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-bold mt-4 text-center text-white">Technologies I Work With</h3>
              <div className="pt-10">
                <EnhancedMarquee  skills={getAllSkills()} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  )
}

export default SkillsBar

