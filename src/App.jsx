import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/navbar/navbar';
import Hero from './Hero';
import About from "./About";
import Skill from './Skill';
import Project from './Project';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Skill' element={<Skill />} />
        <Route path='/abouzari/project' element={<Project />} />
        <Route path='/abouzari/about' element={<About />} />
        <Route path='/abouzari/hero' element={<Hero />} />
        <Route path='/abouzari/contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
