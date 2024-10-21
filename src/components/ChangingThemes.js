import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import shufflImage from '../Assets/shuffle.svg';
import LeftArrow from '../Assets/left-arrow-short.svg';
import RightArrow from '../Assets/right-arrow--short.svg';

const themes = [
  { color: "#d3d3d3", text: "Creativity Meet Technology", introText: "I bring value to web development projects by merging technical expertise with creativity and aesthetics." },
  { color: "#91AC9A", text: "Innovating with Passion", introText: "I love creating solutions that push boundaries." },
  { color: "#348f8a", text: "Building Digital Experiences", introText: "Building seamless digital experiences is my passion." },
  { color: "#B5838D", text: "Designing with Purpose", introText: "Design is more than visuals it’s about solving problems with purpose." },
];

const ChangingThemes = ({ setBodyText, setBodyBackgroundColor, setIntroText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shuffleContainerRef = React.useRef(null);
  const circleButtonRef = React.useRef(null);

  useEffect(() => {
    gsap.fromTo(shuffleContainerRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, delay: 5.9, duration: 0.8, ease: 'power2.out' }
    );

    gsap.fromTo(circleButtonRef.current, 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, delay: 5.9, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(nextIndex);
    updateTheme(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + themes.length) % themes.length;
    setCurrentIndex(prevIndex);
    updateTheme(prevIndex);
  };

  const updateTheme = (index) => {
    gsap.to("body", {
      backgroundColor: themes[index].color,
      duration: 0.5,
    });
    
    setBodyText(themes[index].text);
    setBodyBackgroundColor(themes[index].color);
    setIntroText(themes[index].introText);
  };

  return (
    <>
      <button className="circle" ref={circleButtonRef} onClick={handleNext}>
        <img src={shufflImage} alt="Shuffle" />
      </button>
      <div className="overflow-hidden absolute bottom-[10%] w-full text-center p-2">
      <div className="shuffle-container" ref={shuffleContainerRef}>
        <div className="count">{currentIndex + 1}/{themes.length}</div>
        <div className="arrows-container flex justify-center items-center gap-[80px] text-[20px] font-semibold">
          <button className="left" onClick={handlePrevious}>
            <img src={LeftArrow} alt="Left Arrow" />
          </button>
          <div>Explore Beauty</div>
          <button className="right" onClick={handleNext}>
            <img src={RightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default ChangingThemes;