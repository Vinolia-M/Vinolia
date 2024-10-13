import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import moon from '../Assets/moon.svg';
import sun from '../Assets/sun.svg';

const Modes = () => {
  const [isLightMode, setIsLightMode] = useState(true); // Default to light mode
  const containerRef = useRef(null);

  // Toggles between light and dark mode
  const toggleMode = (mode) => {
    setIsLightMode(mode === "light");

    // Animate the mode-dark-container based on the mode clicked
    const position = mode === "light" ? 60 : 0; // Adjust according to layout
    gsap.to(containerRef.current, {
      x: position,
      duration: 0.5,
      ease: "power2.out",
    });

    // Change the background color of the body
    document.body.style.backgroundColor = mode === "light" ? "#d3d3d3" : "#000000";
    document.body.style.color = mode === "light" ? "#000000" : "#d3d3d3";
  };

  return (
    <div className={`mode-container ${isLightMode ? 'light' : 'dark'}`}>
      <div ref={containerRef} className="mode-dark-container"></div>
      <div className="relative left-[39%] top-[19px] z-10 flex items-center justify-center gap-[38px] border border-[#6B705C] rounded-[10px] w-[120px]">
        {/* Change icon colors based on mode */}
        <div onClick={() => toggleMode("light")}>
          <img src={sun} alt="sun" className={`${isLightMode ? 'text-black' : 'text-white'}`} />
        </div>
        <div onClick={() => toggleMode("dark")}>
          <img src={moon} alt="moon" className={`${!isLightMode ? 'text-white' : 'text-black'}`} />
        </div>
      </div>
    </div>
  );
};

export default Modes;
