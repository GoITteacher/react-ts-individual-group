import { useState } from "react";
import css from "./LikeButton.module.css";

interface LikeButtonProps {}

const LikeButton = ({}: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(true);

  const handleSubmit = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={css["likeButton"]}>
      <p onClick={handleSubmit}>{isLiked ? "❤️" : "🤍"}</p>
    </div>
  );
};

export default LikeButton;
