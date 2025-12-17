import React from "react";
import { color, motion } from "framer-motion";
import "./project.css";
import iqinsight from "../assets/projects/iqinsight.png";
import webmind from "../assets/projects/webmind.png";
import roundabout from "../assets/projects/RA.png";
import ragai from "../assets/projects/ragai.png";
import sentiment from "../assets/projects/sentiment-analysis.png";
import xtensiv from "../assets/projects/xtensiv.jpg";
import cpu from "../assets/projects/cpu-schedule.png";
import california from "../assets/projects/california-housing.png";
import diagrammer from "../assets/projects/diagrammer.png";
import secureVoting from "../assets/projects/secure-voting.png";
import workflowbuild from "../assets/projects/workflowbuild.png";
import notAvailable from "../assets/projects/image.png";

const projects = [
  {
    title: "IQINSIGHT",
    description:
      "An AI-powered business intelligence platform transforming transactional and review data into insights.",
    link: "https://github.com/chawlasaksham/InsightIQ-Smart-Business-Analytics-Emotion-Intelligence-Platform",
    image: iqinsight,
  },
  {
    title: "WEB MIND AI",
    description:
      "A Chrome extension powered by Google Gemini for summarizing webpages and AI interaction.",
    link: "https://github.com/chawlasaksham/Web-Mind-AI",
    image: webmind,
  },
  {
    title: "ROUND - ABOUT",
    description:
      "A MERN-based Airbnb-like platform with Mapbox integration and authentication.",
    link: "https://github.com/chawlasaksham/ROUND__ABOUT",
    image: roundabout,
  },
  {
    title: "RAG AI",
    description:
      "A Retrieval Augmented Generation (RAG) AI implementation project.",
    link: "https://github.com/chawlasaksham/RAG-AI",
    image: ragai,
  },
  {
    title: "SENTIMENT ANALYSIS",
    description:
      "Machine learning web app for customer review sentiment analysis.",
    link: "https://github.com/chawlasaksham/Review-sentiment-analysis-using-ML",
    image: sentiment,
  },
  {
    title: "XTENSIV",
    description:
      "Inventory management system built using Node.js and MySQL.",
    link: "https://github.com/chawlasaksham/XTENSIVE",
    image: xtensiv,
  },
  {
    title: "CPU SCHEDULER",
    description:
      "CPU scheduling algorithm simulator built using Python Flask.",
    link: "https://github.com/chawlasaksham/CPU-scheduler",
    image: cpu,
  },
  {
    title: "CALIFORNIA HOUSING",
    description:
      "Machine learning project for predicting housing prices.",
    link: "https://github.com/chawlasaksham/California-Housing-project",
    image: california,
  },
  {
    title: "DIAGRAMMER",
    description:
      "Diagram builder module developed during internship.",
    link: "https://github.com/chawlasaksham/Diagrammer",
    image: diagrammer,
  },
  {
    title: "SECURE VOTING SYSTEM",
    description:
      "Secure online voting system using Flask and SQLAlchemy.",
    link: "https://github.com/chawlasaksham/secure-voting-system",
    image: secureVoting,
  },
  {
    title: "WORKFLOW BUILDER",
    description:
      "Frontend-only clone of n8n workflow builder.",
    link: "https://github.com/chawlasaksham/Workflow-Builder---other-look",
    image: workflowbuild,
  },

  // fallback
  {
    title: "PORTFOLIO",
    description:
      "A modern animated portfolio website built with React.",
    link: "https://portfolio-hlyh.onrender.com/",
    image: notAvailable,
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
              🔗 View Project(GITHUB)
            </a>
            
            <h4>deployement link on Github</h4>
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
