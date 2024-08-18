import React, {useState } from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Background from './components/Background';
import ImageSlider from './components/ImageSlider';
import boxImage from './Assets/box.svg';
import htmlImage from './Assets/html.svg';
import branchImage from './Assets/branch.svg';
import siteImage from './Assets/siteBall.svg';
import Footer from './components/Footer';
import Work from './components/Work';

function App() {
  const [bodyAnimationStart, setBodyAnimationStart] = useState(false);

    const handleNavComplete = () => {
        setBodyAnimationStart(true);
    };
  
  return (
    <>
      <div className='icons absolute w-[5%] top-[50%] left-[15%]'>
        <img src={boxImage} className="instagram" alt="instagram" />
      </div>
      <div className='icons absolute w-[5%] top-[30%] right-[15%]'>
        <img src={htmlImage} className="instagram" alt="instagram" />
      </div>
      <div className='icons absolute w-[5%] bottom-[15%] right-[30%]'>
        <img src={branchImage} className="instagram" alt="instagram" />
      </div>
      <div className='icons absolute w-[5%] bottom-[15%] left-[30%]'>
        <img src={siteImage} className="instagram" alt="instagram" />
      </div>
      <Cursor />
      <Navigation onNavComplete={handleNavComplete} />
      <Body animate={bodyAnimationStart} />
      <Background />
      <ImageSlider />
      <Work />
      <Footer />
    </>
  );
}

export default App;


