import React, { useEffect } from 'react';
import gsap from 'gsap';

const DownButton = () => {
  const circleTextRef = React.useRef(null);

  useEffect(() => {
    gsap.fromTo(circleTextRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, delay: 5.9, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="down-container overflow-hidden">
      <svg className="circleText" ref={circleTextRef} viewBox="0 0 500 500">
        <path id="textcircle" fill="none"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"/>
        <text dy="-25">
          <textPath href="#textcircle">SCROLL . DOWN . SCROLL . DOWN</textPath>
        </text>
      </svg>
    </div>
  );
};

export default DownButton;
