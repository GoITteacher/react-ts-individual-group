import { useState } from "react";
import css from "./GreetingCard.module.css";

/* 
2. Створи компонент GreetingCard. Спочатку компонент повинен показувати текст Good morning. Після натискання на кнопку текст має змінюватись на Good evening.
*/

const GreetingCard = () => {
  const [greeting, setGreeting] = useState(true);
  const handleBtnClick = () => {
    setGreeting(!greeting);
  };

  return (
    <div className={css["greetingCard"]}>
      <button onClick={handleBtnClick}>
        {greeting ? "Good morning" : "Good evening"}
      </button>
    </div>
  );
};

export default GreetingCard;
