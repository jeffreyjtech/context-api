import React, { useState } from 'react';

// This is a context object
export const ThemeContext = React.createContext();

function Theme({ children }) {
  // This state object is created so the object provided to the context provider actually does something
  // If we hardcoded this variable, it would work but it wouldn't do very much.
  const [mode, setMode] = useState('light');

  return (
    // The value prop is THE prop for conveying data to context consumers
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Theme;
