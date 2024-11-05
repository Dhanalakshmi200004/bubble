import React, { useState, useEffect } from "react";
import "./Bubble.css";

function Bubble() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const generateRandomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(generateRandomPosition());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="bubble-container" onMouseMove={handleMouseMove}>
      <div
        className="bubble"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      ></div>
    </div>
  );
}

export default Bubble;
