import React, { useEffect } from "react";
import { useParams, useLoaderData } from "react-router";
import {
  FaGithub,
  FaGlobe,
  FaTools,
  FaHammer,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const allProjects = useLoaderData();
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === Number(id));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.h1
        className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-10"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        {project.title}
      </motion.h1>

      {/* Image */}
      <motion.div
        className="overflow-hidden rounded-2xl shadow-xl mb-12"
        data-aos="zoom-in"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Description */}
      <Section title="Project Overview">
        <p className="text-white/90 text-lg leading-relaxed">
          {project.description}
        </p>
      </Section>

      {/* Features */}
      <Section title="Features" icon={<FaTools className="text-green-400" />}>
        <ul className="space-y-1 text-white/90 list-disc list-inside">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </Section>

      {/* Technologies */}
      <Section
        title="Technologies Used"
        icon={<FaHammer className="text-blue-400" />}
      >
        <p className="text-white/90">{project.technologies.join(", ")}</p>
      </Section>

      {/* Challenges */}
      {project.challenges && (
        <Section
          title="Challenges"
          icon={<FaLightbulb className="text-yellow-400" />}
        >
          <ul className="space-y-1 text-white/90 list-disc list-inside">
            {project.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* Future Plans */}
      {project.futurePlans && (
        <Section
          title="Future Plans"
          icon={<FaRocket className="text-purple-400" />}
        >
          <ul className="space-y-1 text-white/90 list-disc list-inside">
            {project.futurePlans.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* External Links */}
      <div className="flex flex-wrap gap-4 justify-center mt-12">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-6 py-3 text-white font-medium rounded-lg shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-2"
          >
            <FaGlobe /> Live Site
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Section = ({ title, icon, children }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8 shadow-lg"
    data-aos="fade-up"
  >
    <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
      {icon}
      {title}
    </h3>
    {children}
  </motion.div>
);

export default ProjectDetails;
