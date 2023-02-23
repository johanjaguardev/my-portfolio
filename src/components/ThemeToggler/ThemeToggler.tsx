// src/components/ThemeToggler.tsx

import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const ThemeToggler = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <label htmlFor="theme-toggle">Toggle theme:</label>
      <button onClick={() => changeTheme("master")}>Change to master</button>
      <button onClick={() => changeTheme("great")}>Change to great</button>
      <em>{theme}</em>
    </div>
  );
};
