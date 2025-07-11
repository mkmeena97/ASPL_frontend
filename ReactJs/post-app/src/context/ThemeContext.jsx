
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

export default function ThemeProviderCustom({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const value = {
    darkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
