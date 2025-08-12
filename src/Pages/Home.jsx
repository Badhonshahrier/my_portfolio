import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";
import Hero from "../Components/Hero";
import About from "../Components/About";
import SkillBar from "../Components/SkillBar";
import Education from "../Components/Education";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import CodingBackground from "../Components/CodingBackground";

const Home = () => {
    const projectData = useLoaderData();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

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
