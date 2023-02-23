// src/components/ThemeToggler.tsx
import React, { useContext } from "react";
import "./ThemeToggler.scss";
import masterBallPNG from "../../assets/master-ball.png";
import ultraBallBallPNG from "../../assets/ultra-ball.png";
import { ThemeContext } from "../../contexts/ThemeContext";

export const ThemeToggler = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggler">
      <img src={masterBallPNG} onClick={() => changeTheme("master")} />
      <img src={ultraBallBallPNG} onClick={() => changeTheme("ultra")} />
    </div>
  );
};
