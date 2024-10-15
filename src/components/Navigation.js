import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function Navigation({ isLightMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
  
    const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);
  
      if (!isMenuOpen) {
        gsap.set(navRef.current, { display: 'block' });
        gsap.fromTo(
          navRef.current,
          { x: '100%' },
          {
            x: '0%',
            duration: 0.5,
            ease: 'power3.out',
          }
        );
      } else {
        gsap.to(navRef.current, {
          x: '100%',
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
            gsap.set(navRef.current, { display: 'none' });
          }
        });
      }
    };
  
    return (
      <header className={`App-header flex justify-between items-center ${isLightMode ? 'text-black' : 'text-white'}`}>
        <div className="logo">
          <span>WEBSITE<br />DEVELOPER</span>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''} ${!isLightMode ? 'text-white' : 'text-black'}`}>
            <span></span>
            <span></span>
          </div>
        </div>
  
        <div ref={navRef}
          className="app-navigation z-10 hoverable fixed top-0 right-0 w-full h-full flex flex-col items-center justify-center"
          style={{ display: 'none' }}>
          <a href="about.html" className={`nav-contents ${!isLightMode ? 'text-white' : 'text-black'}`}>About me</a>
          <a href="portfolio.html" className={`nav-contents ${!isLightMode ? 'text-white' : 'text-black'}`}>Portfolio</a>
          <a href="get-in-touch.html" className={`nav-contents ${!isLightMode ? 'text-white' : 'text-black'}`}>Contact</a>
        </div>
      </header>
    );
  }
  
  export default Navigation;
  
