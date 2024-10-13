import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import instagram from '../Assets/instagram.svg';
import twitter from '../Assets/twitter.svg';
import linkedIn from '../Assets/linked-in.svg';
import github from '../Assets/github.svg';

const Socials = ({ isLightMode }) => {
    const iconRefs = useRef([]);
    const hasAnimated = useRef(false);
  
    useEffect(() => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
  
      const tl = gsap.timeline();
  
      gsap.set(iconRefs.current, { autoAlpha: 0 });
  
      tl.to(iconRefs.current, { autoAlpha: 1, delay: 4.5, duration: 0 })
        .add(() => {
          iconRefs.current.forEach((icon, index) => {
            gsap.fromTo(
              icon,
              { y: -200, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.7,
                ease: 'bounce.out',
                delay: index * 0.2,
              }
            );
          });
        });
    }, []);
  
    return (
      <div className='grid gap-[30px]'>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img ref={el => iconRefs.current[0] = el} src={instagram} className={`instagram ${!isLightMode ? 'text-white' : ''}`} alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img ref={el => iconRefs.current[1] = el} src={twitter} className={`twitter ${!isLightMode ? 'text-white' : ''}`} alt="Twitter" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img ref={el => iconRefs.current[2] = el} src={linkedIn} className={`linkedIn ${!isLightMode ? 'text-white' : ''}`} alt="LinkedIn" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img ref={el => iconRefs.current[3] = el} src={github} className={`github ${!isLightMode ? 'text-white' : ''}`} alt="GitHub" />
        </a>
      </div>
    );
  };
  
  export default Socials;
  
