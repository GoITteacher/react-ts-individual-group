import type { Lesson } from "../../../types/lessons";
import css from "./LessonCard.module.css";

interface LessonCardProps {
  value: Lesson;
}

const LessonCard = ({ value }: LessonCardProps) => {
  const handleTitleClick = () => {
    console.log(value.title);
  };

  return (
    <div className={css["lessonCard"]}>
      <p>{value._id}</p>
      <h3 onClick={handleTitleClick}>{value.teacher}</h3>
      <p>{value.title}</p>
    </div>
  );
};

export default LessonCard;
