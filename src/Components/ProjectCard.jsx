import React from "react";
import { Link } from "react-router";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 rounded-4xl p-6">
          <div
            className="grid bg-white md:grid-cols-2 gap-8 items-center border p-4 rounded-xl shadow hover:shadow-lg transition-shadow"
            data-aos="fade-up"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-auto object-cover"
            />

            {/* Project Content */}
            <div className="bg-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3">{project.description}</p>

              {/* Features */}
              {project.features?.length > 0 && (
                <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/details/${project.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                >
                  Details
                </Link>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    <FaGlobe /> Live
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
