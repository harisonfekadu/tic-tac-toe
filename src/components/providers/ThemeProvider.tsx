import React, { createContext, useContext, useState } from "react";

type ThemeColor = "dark" | "light";
type ThemeType = {
  themeColor: ThemeColor;
  toggleThemeColor: () => void;
};

const ThemeContext = createContext<ThemeType>({
  themeColor: "dark",
  toggleThemeColor: ()=>{}
});

export const useTheme: () => ThemeType = () => useContext<ThemeType>(ThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>("light");
  const toggleThemeColor: () => void = () => {
    themeColor === "dark" ? setThemeColor("light") : setThemeColor("dark");
  };
  return (
    <ThemeContext.Provider value={{ themeColor, toggleThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
