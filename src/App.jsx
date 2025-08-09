
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
import GetData from '../ContactForm';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouzari/as-code/skill' element={<Skill />} />
        <Route path='/abouzari/as-code/project' element={<Project />} />
        <Route path='/abouzari/as-code/about' element={<About />} />
        <Route path='/abouzari/as-code/hero' element={<Hero />} />
        <Route path='/abouzari/as-code/contact' element={<Contact />} />
        <Route path='/abouzari/as-code/ContactForm' element={<GetData />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
