import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
  useEffect(() => {
    const revealElements = gsap.utils.toArray('.reveal');

    revealElements.forEach(element => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="container bg-component text-center max-w-[110rem] mx-auto py-12 px-6">
      <div className='reveal hoverable'>
        <h1>Technologies I work <span className='tech'>with</span></h1>
        <p>
          When coding, I leverage technologies like React for dynamic UI,<br />
          TypeScript for robust type safety, and Tailwind CSS for seamless styling.<br />
          This combination enhances performance, code reliability, and design<br />
          consistency, ensuring efficient and maintainable applications.
        </p>
      </div>
      <div className='reveal font-bold border border-black p-[14px] rounded-lg'>
        <p className='mb-0'>
          HTML5  |  CSS (LESS, SCSS)  |  Bootstrap |  Tailwind  |  JavaScript  |  TypeScript  |  React  |  Angular  |  Git-github & Bitbucket  |  GraphQL
        </p>
      </div>
    </div>
  );
};

export default Background;
