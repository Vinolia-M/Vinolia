import React from "react";
import instagram from '../Assets/instagram.svg';
import twitter from '../Assets/twitter.svg';
import linkedIn from '../Assets/linked-in.svg';
import github from '../Assets/github.svg';
import ticktok from '../Assets/tiktock.svg';

const Footer = () => {
  return (
    <footer className="py-4 mt-20">
      <div className="foot flex justify-between items-baseline my-0 mx-[200px] border-b-2 border-b-black py-[10px]">
        <p>Portfolio</p>
        <div className='flex gap-[20px] w-[200px]'>
          <a href="https://instagram.com/vinolia_masango" target="_blank" rel="noopener noreferrer"><img src={instagram} className="instagram" alt="instagram" /></a>
          <a href="https://twitter.com/VinoliaMasango" target="_blank" rel="noopener noreferrer"><img src={twitter} className="twitter" alt="twitter" /></a>
          <a href="https://www.linkedin.com/in/vinolia-masango-61a450231" target="_blank" rel="noopener noreferrer"><img src={linkedIn} className="linkedIn" alt="linked-in" /></a>
          <a href=" " target="_blank" rel="noopener noreferrer"><img src={ticktok} className="ticktok" alt="ticktok" /></a>
          <a href="https://github.com/Vinolia-M" target="_blank" rel="noopener noreferrer"><img src={github} className="github" alt="github" /></a>
        </div>
      </div>
      <div className="container mx-auto mt-[26px] text-center">
        <p>&copy; {new Date().getFullYear()} Your Vinolia. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
