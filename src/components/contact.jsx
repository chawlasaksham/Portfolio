import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container fade-in">
      <h2>Contact Me</h2>
      <p className="contact-message">
        I am always open to collaboration, new opportunities, and sharing ideas. 
        Feel free to reach out!
      </p>
      <div className="contact-details">
        <p>
        <strong>Email<FaEnvelope/>:</strong>{" "}
          <a href="mailto:chawlasaksham02@gmail.com">
             chawlasaksham02@gmail.com
          </a>
        </p>
        <p>
        <strong>Github <FaGithub  />:</strong>{" "}
          <a href="https://github.com/chawlasaksham" target="_blank" rel="noopener noreferrer">
             github.com/chawlasaksham
          </a>
        </p>
        <p>
        <strong>LinkedIn <FaLinkedin/>:</strong>{" "}
          <a href="https://in.linkedin.com/in/saksham-chawla-b1b128253" target="_blank" rel="noopener noreferrer">
          https://in.linkedin.com/in/saksham-chawla-b1b128253
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
