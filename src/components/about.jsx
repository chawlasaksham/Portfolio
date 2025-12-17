import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <h3 className="about-heading">ABOUT ME</h3>
      <h2 className="about-title">A Glimpse into My World</h2>
      <p className="about-description">
        Learn more about who I am, what I do, and the things I like.
      </p>

      <div className="my-reads">
        <h3 className="reads-title">✨ My Reads</h3>
        <p className="reads-description">
          Explore the books shaping my perspective
        </p>
        <div className="book-cover">
        <img 
          alt="Book cover" 
          loading="lazy" 
          width="200" 
          height="200" 
          decoding="async" 
          style={{ color: "transparent" }} 
           src="./atomic.png" 
        />

        </div>
      </div>

      <div className="hobbies">
        <h3 className="hobbies-title">✨ Beyond the Code</h3>
        <p className="hobbies-description">
          Explore my interests and hobbies
        </p> 
         <div className="hobbies-tags">
          <span>🎨 Painting</span>
          <span>✈️ Traveling</span>
          <span>🎵 Music</span>
          <span>📖 Reading</span>
          <span>🚴‍♂️ Riding</span>
        </div> 
      </div>

      <div className="tools">
        <h3 className="tools-title">✨ My Tools</h3>
        <p className="about-description">
        Explore the technologies and tools I use to craft exceptional digital experiences.
      </p>

      {/* Scrolling container */}
      <div className="tools-container">
        <div className="tools-slider">
          <div className="icon">⚛️ React</div>
          <div className="icon">📜 JavaScript</div>
          <div className="icon">🖥️ Node.js</div>
          <div className="icon">🚀 Express</div>
          <div className="icon">🎨 Tailwind CSS</div>
          <div className="icon">📂 MongoDB</div>
          <div className="icon">🐙 GitHub</div>
          </div>
        <div key="spacer2" className="spacer"></div>
        {/* Duplicate for seamless looping */}
        <div className="tools-slider">
          <div className="icon">🔥 Redux </div>
          <div className="icon">📜 BOOTSRAP</div>
          <div className="icon">🧩 Framer Motion </div>
          <div className="icon">🚀 EJS</div>
          <div className="icon">🎨 ML</div>
          <div className="icon">📄 MySQL</div>
          <div className="icon">🐘 PHP</div>
        </div>
        
      </div>

      <div className="tools-container">
      <div className="tools-sliderrev">
      <div className="icon">🚀 EJS</div>
          <div className="icon">🎨 ML</div>
          <div className="icon">📄 MySQL</div>
          <div className="icon">🐘 PHP</div>
        <div className="icon">🚀 Express</div>
          <div className="icon">🎨 Tailwind CSS</div>
          <div className="icon">🐙 GitHub</div>
        </div>
        <div key="spacer2" className="spacer"></div>
        {/* Duplicate for seamless looping */}
        <div className="tools-sliderrev">
          <div className="icon">🔥 Redux </div>
          <div className="icon">📜 BOOTSRAP</div>
          <div className="icon">🧩 Framer Motion </div>
          <div className="icon">🚀 EJS</div>
          <div className="icon">🎨 ML</div>
          <div className="icon">📄 MySQL</div>
          <div className="icon">🐘 PHP</div>
        </div>
        </div></div>
    </section>
  );
};

export default About;
