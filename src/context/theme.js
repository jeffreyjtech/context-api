import React, { useState } from 'react';

// This is a context object
export const ThemeContext = React.createContext();

function Theme({ children }) {
  // This state object is created so the object provided to the context provider actually does something
  // If we hardcoded this variable, it would work but it wouldn't do very much.
  const [mode, setMode] = useState('light');

  const toggleMode = (newMode) => {
    switch (newMode) {
      case 'light': setMode(newMode); break;
      case 'dark': setMode(newMode); break;
      default:/*do nothing*/;
    }
  }


  return (
    // The value prop is THE prop for conveying data to context consumers
    // Putting a state's setter function into this object eg: { mode, setMode } is super danger 
    // The toggleMode function validates the input before invoking setMode with the input
    // Wrapper/validator functions like this are probably a good play?
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Theme;
