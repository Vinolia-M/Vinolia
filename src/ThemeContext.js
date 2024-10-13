// src/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true); // Default to light mode

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the Theme Context
export const useTheme = () => useContext(ThemeContext);
