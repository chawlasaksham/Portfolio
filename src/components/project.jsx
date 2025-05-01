import React from "react";
import { color, motion } from "framer-motion";
import "./project.css";

const projects = [
  {
    title: "ROUND - ABOUT",
    description:
      "A full-stack Airbnb-like platform built using the MERN stack following the MVC pattern. Includes Mapbox integration for navigation and user authentication features.",
    link: "https://round-about-3pnb.onrender.com/signup"
    ,image: "RA.png",
  },
  {
    title: "XTENSIV",
    description:
      "An inventory management system similar in structure to ROUND - ABOUT but without Mapbox. Built with Node.js and MySQL, following the RESTful API approach.",
    link: "https://xtensive.onrender.com/"
    ,image: "xtensiv.jpg",
  },
  {
    title: "SIMON SAYS GAME",
    description:
      "A fun and interactive memory game built entirely using vanilla JavaScript, HTML, and CSS to enhance concentration and pattern recognition.",
    link: "https://chawlasaksham.github.io/simon-says-game/",
    image: "simon.png",
  },
  {
    title: "SCHOOL MANAGEMENT API",
    description:
      "A Node.js-based REST API for managing student and teacher data using MySQL. Includes CRUD operations and tested endpoints using Postman.",
    link: "https://github.com/yourusername/school-api",
    image: "image.png",
  },
  {
    title: "PORTFOLIO",
    description:
      "A modern portfolio site built with React, Tailwind, and animation libraries.",
    link: "https://yourportfolio.com",
    image: "image.png",
  },
  {
    title: "STUDENT MANAGEMENT SYSTEM",
    description:"An intelligent navigation system using Dijkstra and TSP algorithms with Mapbox integration.",
    link: "https://github.com/chawlasaksham/",
    image: "image.png",
  },
];

const Project = () => {
  return (
    <div className="snap-container">
      {projects.map((project, index) => (
        <section key={index} className="snap-section">
                   <div className="scroll-text"></div><div className="scroll-icon">&#x21E3;</div> 

                   <motion.div
            className="project-card-scroll"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <h2> {project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              🔗 View Project
            </a>
            </motion.div>
                {index === projects.length - 1 && (
                  <div className="end-indicator">
                    <p>🎉 You've reached the end!</p>
                    <p>Thanks for scrolling 🙌</p>
                  </div>
                )}

            {index !== projects.length - 1 && (
              <div className="scroll-icon">&#x21E3;</div> 
            )}

        </section>
      ))}
    </div>
  );
};

export default Project;
