import React from 'react';
import ProjectCard from './ProjectCard';

const Project = ({ projectData }) => {
    console.log('Projects:', projectData);

    return (
        <div className="py-20 px-4 max-w-7xl mx-auto">
             <h2 className="text-center text-4xl font-bold text-blue-800  mb-12">
          Projects
        </h2>
           <div className="space-y-12">
                {projectData?.length > 0 ? (
                    projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No projects found.</p>
                )}
            </div>
        </div>
    );
};

export default Project;