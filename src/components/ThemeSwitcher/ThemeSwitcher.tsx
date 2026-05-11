import { useState } from "react";
import css from "./ThemeSwitcher.module.css";
import clsx from "clsx";

interface ThemeSwitcherProps {}

const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState("darkMode");

  const handleClick = () => {
    if (theme === "darkMode") {
      setTheme("lightMode");
    } else {
      setTheme("darkMode");
    }
  };

  return (
    <div className={clsx(css["themeSwitcher"], css[theme])}>
      <h1>Test Theme Component</h1>
      <button onClick={handleClick}>
        Switch to {theme === "darkMode" ? "lightMode" : "darkMode"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
