import React from "react";
import Hero from "./Hero";
import Skill from "./Skill";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

function Home() {
    return (
        <>
            <Hero />
            <Skill />
            <Project />
            <About />
            <Contact />
        </>
    )
}
export default Home;