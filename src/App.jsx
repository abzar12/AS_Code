
import './App.css'
import Navbar from './assets/components/navbar/navbar';
import Hero from './Hero';
import About from "./About";
import Skill from './Skill';
import Project from './Project';
import Home from './Home';
import Contact from './Contact';
import Footer from './assets/components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouzari/AS_code/skill' element={<Skill />} />
        <Route path='/abouzari/AS_code/project' element={<Project />} />
        <Route path='/abouzari/AS_code/about' element={<About />} />
        <Route path='/abouzari/AS_code/hero' element={<Hero />} />
        <Route path='/abouzari/AS_code/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
