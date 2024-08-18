import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import instagram from '../Assets/instagram.svg';
import twitter from '../Assets/twitter.svg';
import linkedIn from '../Assets/linked-in.svg';
import github from '../Assets/github.svg';

gsap.registerPlugin(TextPlugin);

function Navigation({ onAnimationComplete }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for menu toggle
    const iconRefs = useRef([]),
          textRef = useRef(null),
          navRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (hasAnimated.current) return;

        hasAnimated.current = true;

        const tl = gsap.timeline({
            onComplete: () => {
                if (onAnimationComplete) {
                    onAnimationComplete();
                }
            }
        });

        gsap.set(iconRefs.current, { autoAlpha: 0 });
        gsap.set(navRef.current, { x: '100%', autoAlpha: 0 });

        tl.fromTo(
            textRef.current,
            { text: '' },
            {
                text: 'WEB\nENGINEER',
                duration: 0.7,
                ease: 'none',
                delay: 0.5,
                stagger: 0.05,
            }
        )
        .to(textRef.current, { opacity: 1, duration: 0.1 })
        .to(iconRefs.current, { autoAlpha: 1, duration: 0 })
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
        })
        .to(navRef.current, { x: '0%', autoAlpha: 1, duration: 1.7, ease: 'power3.out' }, '+=2');

    }, [onAnimationComplete]);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="App-header flex justify-between items-center text-black">
            <a href=" " className='logo'><span ref={textRef}></span></a>
            <div className='flex gap-[30px]'>
                <a href="https://instagram.com/vinolia_masango" target="_blank" rel="noopener noreferrer">
                    <img ref={el => iconRefs.current[0] = el} src={instagram} className="instagram" alt="Instagram" />
                </a>
                <a href="https://twitter.com/VinoliaMasango" target="_blank" rel="noopener noreferrer">
                    <img ref={el => iconRefs.current[1] = el} src={twitter} className="twitter" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/vinolia-masango-61a450231" target="_blank" rel="noopener noreferrer">
                    <img ref={el => iconRefs.current[2] = el} src={linkedIn} className="linkedIn" alt="LinkedIn" />
                </a>
                <a href="https://github.com/Vinolia-M" target="_blank" rel="noopener noreferrer">
                    <img ref={el => iconRefs.current[3] = el} src={github} className="github" alt="GitHub" />
                </a>
            </div>
            <div className="hamburger-menu md:hidden" onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div ref={navRef} className={`app-navigation ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                <a href='about.html' className='nav-contents'>BACKGROUND</a>
                <a href='portfolio.html' className='nav-contents'>PORTFOLIO</a>
                <a href='get-in-touch.html' className='nav-contents'>CONTACT</a>
            </div>
        </header>
    );
}

export default Navigation;
