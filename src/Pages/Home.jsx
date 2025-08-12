// import React from 'react';
// import Hero from '../Components/Hero';
// import About from '../Components/About';
// import SkillBar from '../Components/SkillBar';
// import Education from '../Components/Education';
// import Project from '../Components/Project';
// import Contact from '../Components/Contact';
// import CodingBackground from '../Components/CodingBackground';

// import { useLoaderData } from 'react-router';

// const Home = () => {
//     const projectData = useLoaderData();
//     return (
//         <div className="relative">

//             <CodingBackground />
            
    
//             <div className="relative z-10">
//                 <Hero />
//                 <About />
//                 <SkillBar />
//                 <Education />
//                 <Project projectData={projectData} />
//                 <Contact />
//             </div>
//         </div>
//     );
// };

// export default Home;



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
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="skills"><SkillBar /></section>
                <section id="education"><Education /></section>
                <section id="projects"><Project projectData={projectData} /></section>
                <section id="contact"><Contact /></section>
            </div>
        </div>
    );
};

export default Home;
