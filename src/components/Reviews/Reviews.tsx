import { useState } from "react";
import css from "./Reviews.module.css";

interface ReviewsProps {}

const Reviews = ({}: ReviewsProps) => {
  const [like, setLike] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleDislike = () => {
    setDislike(dislike + 1);
  };

  return (
    <div className={css["reviews"]}>
      <p>Like: {like}</p>
      <button onClick={handleLike}>Like</button>
      <p>Neutral: {neutral}</p>
      <button onClick={handleNeutral}>Neutral</button>
      <p>Dislike: {dislike}</p>
      <button onClick={handleDislike}>Dislike</button>
      <p>Total: {like + neutral + dislike}</p>
    </div>
  );
};

export default Reviews;
