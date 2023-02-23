import React, { createContext, useContext, useState } from "react";

type Theme =
  | "master"
  | "ultra"
  | "great"
  | "super"
  | "poke"
  | "safari"
  | "honor";

type ThemeContextType = {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "master",
  changeTheme: () => {},
});

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("master");

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
