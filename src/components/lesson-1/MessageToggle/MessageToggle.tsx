import { useState } from "react";
import css from "./MessageToggle.module.css";

interface MessageToggleProps {}

const MessageToggle = ({}: MessageToggleProps) => {
  const [isShowMessage, setIsShowMessage] = useState(true);
  const toggle = () => {
    setIsShowMessage(!isShowMessage);
  };
  return (
    <div className={css["messageToggle"]}>
      {isShowMessage && <p>MessageToggle</p>}
      <button onClick={toggle}>
        {isShowMessage ? "hide" : "show"} Message
      </button>
    </div>
  );
};

export default MessageToggle;
