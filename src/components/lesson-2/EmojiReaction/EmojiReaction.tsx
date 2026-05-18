import { useState } from "react";
import css from "./EmojiReaction.module.css";
// Створи компонент EmojiReaction. Спочатку повинен відображатись emoji 👍. При натисканні на кнопку emoji має змінюватись на 👎.
const EmojiReaction = () => {
  const [emoji, setEmoji] = useState(true);

  return (
    <div className={css["emojiReaction"]}>
      <button
        onClick={() => {
          setEmoji(!emoji);
        }}
      >
        {emoji ? "👍" : "👎"}
      </button>
    </div>
  );
};

export default EmojiReaction;
