import React, {useState } from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Modes from './components/Modes';
import { ThemeProvider } from "./ThemeContext";
import CodeBlocks from './components/CodeBlocks';
import DownButton from './components/DownButton';

function App() {
  const [bodyAnimationStart, setBodyAnimationStart] = useState(false);

    const handleNavComplete = () => {
        setBodyAnimationStart(true);
    };
  
  return (
    <ThemeProvider>
      <Modes />
      <CodeBlocks />
      <Cursor />
      <DownButton />
      <Navigation onNavComplete={handleNavComplete} />
      <Body animate={bodyAnimationStart} />
    </ThemeProvider>
  );
}

export default App;


