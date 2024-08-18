import React from 'react';
import reway from '../Assets/reway.png';
import luminasPlay from '../Assets/luminas-play.png';

const Work = () => {
  return (
    <div className="container flex items-center flex-wrap justify-center mt-20">
      <h2 className="work text-center mb-8 text-3xl font-bold">Portfolio</h2>
      <div className="work-items grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="work-item border rounded-lg overflow-hidden shadow-lg">
          <img src={luminasPlay} alt="Project 2" className="w-full"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Luminas Play</h3>
            <p className="text-gray-700 mb-4">
            the ultimate destination for gaming enthusiasts! Crafted with Next.js for blazing-fast 
            server-side rendering and seamless navigation, React for engaging and interactive game interfaces,
            and Tailwind CSS for a stylish, responsive design, this app offers an immersive gaming experience.
            </p>
            <a href="https://luminas-play.vercel.app/" target="_blank" 
              rel="noopener noreferrer" className="text-custom-yellow hover:underline">
              Visit Site
            </a>
          </div>
        </div>

        <div className="work-item border rounded-lg overflow-hidden shadow-lg">
          <img src={reway} alt="Project 1" className="w-full"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Reway PDP</h3>
            <p className="text-gray-700 mb-4">
            Product Detail Page! Crafted with Next.js for blazing-fast performance and server-side rendering,
            React for a highly interactive and responsive interface, and Tailwind CSS for a clean, modern design,
            this PDP offers comprehensive insights into each product. With features like detailed product 
            specifications.
            </p>
            <a href="https://reway-vinolias-projects.vercel.app/" 
              target="_blank" rel="noopener noreferrer" 
              className="text-custom-yellow hover:underline">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
