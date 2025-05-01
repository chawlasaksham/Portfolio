import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MovingTape from "./components/tape";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MovingTape />
      </div>
     
    </>
  );
}

export default App;
