import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import SkillBar from '../Components/SkillBar';
import Education from '../Components/Education';
import Project from '../Components/Project';
import Contact from '../Components/Contact';
import CodingBackground from '../Components/CodingBackground';

import { useLoaderData } from 'react-router';

const Home = () => {
    const projectData = useLoaderData();
    return (
        <div className="relative">

            <CodingBackground />
            
    
            <div className="relative z-10">
                <Hero />
                <About />
                <SkillBar />
                <Education />
                <Project projectData={projectData} />
                <Contact />
            </div>
        </div>
    );
};

export default Home;