import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {


  return (
    <section className=" px-4">
        
      <div className="max-w-6xl mx-auto">
       

        {/* Project Cards */}
        <div className="space-y-12 rounded-4xl p-6">
          <div
            className="grid bg-white md:grid-cols-2 gap-8 items-center border p-4 rounded-xl shadow"
            data-aos="fade-up"
          >
            <img
              src={project.image}
              alt="Project 1"
              className="rounded-lg w-full h-auto"
            />
            <div className="bg-white">
              <h3 className="text-2xl  font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((technology) => (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                
                <Link
                  to={`/details/${project.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
