import { useState } from "react";
import css from "./ColorSwitcher.module.css";

const ColorSwitcher = () => {
  const [color, setColor] = useState("green-box");
  const handleColor = () => {
    if (color === "green-box") {
      setColor("blue-box");
    } else {
      setColor("green-box");
    }
  };
  return (
    <div className={css["colorSwitcher"]}>
      <div className={css[color]}></div>
      <button onClick={handleColor}>Change color</button>
    </div>
  );
};

export default ColorSwitcher;
