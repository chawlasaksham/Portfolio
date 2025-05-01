import React, { useEffect, useRef } from "react";
import "./tape.css"; // Import the CSS file

const MovingTape = () => {
  const tapeRef = useRef(null);

  useEffect(() => {
    const tape = tapeRef.current;
    // Duplicate text for a smooth infinite scrolling effect
    if (tape) {
      tape.innerHTML += tape.innerHTML;
    }
  }, []);

  return (
    <div className="tape-container">
      <div className="tape" ref={tapeRef}>
        <span>✨ CONNECT ✨</span>
        <span>🔥 INNOVATE 🔥</span>
        <span>💻 CODE IT 💻</span>
        <span>💡 BUILD IT 💡</span>
        <span>✨ CONNECT ✨</span>
        <span>🌟 CREATE 🌟</span>
        <span>💻 CODE IT 💻</span>
        <span>💡 BUILD IT 💡</span>
      </div>
    </div>
  );
};

export default MovingTape;
