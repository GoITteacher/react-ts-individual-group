import css from "./Lesson.module.css";

interface LessonProps {
  title: string;
  level: string;
}

const Lesson = ({ title, level }: LessonProps) => {
  return (
    <li>
      {title} - {level}
    </li>
  );
};

export default Lesson;
