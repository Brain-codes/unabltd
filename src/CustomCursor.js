import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Import CSS file for styling

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => document.removeEventListener("mousemove", updatePosition);
  }, []);

  const cursorClass = isHovering ? "cursor cursor-small" : "cursor";

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={cursorClass} style={{ left: position.x, top: position.y }}>
      <svg
        width="69"
        height="69"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="34.5"
          cy="34.5"
          r="33.75"
          stroke="#53B228"
          stroke-width="1.5"
        />
        <circle cx="34.5001" cy="34.5" r="22.1786" fill="#53B228" />
      </svg>
      {" "}
    </div>
  );
};

export default CustomCursor;


