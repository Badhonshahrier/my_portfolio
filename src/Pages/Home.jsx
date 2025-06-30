import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import SkillBar from '../Components/SkillBar';
import Education from '../Components/Education';

import { useLoaderData } from 'react-router';
import Project from '../Components/Project';
import Contact from '../Components/Contact';

const Home = () => {
    const projectData=useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <SkillBar></SkillBar>
            <Education></Education>
            <Project projectData={projectData}></Project>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;