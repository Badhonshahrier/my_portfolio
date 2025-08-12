import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Project = ({ projectData }) => {
    const [projectsArray, setProjectsArray] = useState([]);

    useEffect(() => {
        if (Array.isArray(projectData)) {
            setProjectsArray(projectData);
        } else if (projectData?.projects && Array.isArray(projectData.projects)) {
            setProjectsArray(projectData.projects);
        }
    }, [projectData]);

    return (
        <div id="projects" className=" px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-blue-800 mb-12">
                Projects
            </h2>
            <div className="space-y-12">
                {projectsArray.length > 0 ? (
                    projectsArray.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                ) :""}
            </div>
        </div>
    );
};

export default Project;
