import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src="/avatar.jpg" alt="Avatar" className="avatar" />
        <br />
        <span className="status-badge">🟢 Available for new Projects</span>

        <h1>SAKSHAM</h1>
        <p>Hi, I'm a passionate MERN stack developer crafting seamless user experiences.</p>

        <div className="hero-buttons">
        <Link to="/projects" className="hero-btn">Explore More ⬇</Link>
        <Link to="/contact" className="connect-btn">👋 Let's Connect</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
