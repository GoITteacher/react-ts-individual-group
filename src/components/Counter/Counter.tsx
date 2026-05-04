import { useState } from "react";
import css from "./Counter.module.css";

const Counter = () => {
  const [x, setX] = useState(1);

  const handleDecrementClick = () => {
    setX(x - 1);
  };

  const handleIncrementClick = () => {
    setX(x + 1);
  };

  return (
    <div className={css["cocktails"]}>
      <button onClick={handleDecrementClick}>-</button>
      <p>{x}</p>
      <button onClick={handleIncrementClick}>+</button>
    </div>
  );
};

export default Counter;
