import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import boxImage from '../Assets/box.svg';
import htmlImage from '../Assets/html.svg';
import branchImage from '../Assets/branch.svg';
import siteImage from '../Assets/siteBall.svg';

const CodeBlocks = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, i) => {
      const timeline = gsap.timeline();

      timeline.to(icon,
        {
          y: -5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 2 + i * 0.3,
        }
      );
    });

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      iconsRef.current.forEach((icon) => {
        const rect = icon.getBoundingClientRect();

        const offsetX = ((clientX - rect.left) / rect.width) * 20 - 10;
        const offsetY = ((clientY - rect.top) / rect.height) * 20 - 10; 
        gsap.to(icon, {
          x: offsetX,
          y: offsetY,
          rotationX: offsetY / 10, 
          rotationY: -offsetX / 10, 
          duration: 0.3,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={el => iconsRef.current[1] = el} className='icons absolute w-[4%] top-[10%] right-[15%]'>
        <img src={htmlImage} className="icon" alt="html" />
      </div>
      <div ref={el => iconsRef.current[2] = el} className='icons absolute w-[4%] bottom-[15%] right-[25%]'>
        <img src={branchImage} className="icon" alt="branch" />
      </div>
      <div ref={el => iconsRef.current[3] = el} className='icons absolute w-[4%] bottom-[4%] left-[35%]'>
        <img src={siteImage} className="icon" alt="site" />
      </div>
      <div ref={el => iconsRef.current[4] = el} className='icons absolute w-[4%] top-[20%] left-[13%]'>
        <img src={boxImage} className="icon" alt="box" />
      </div>
    </>
  );
};

export default CodeBlocks;