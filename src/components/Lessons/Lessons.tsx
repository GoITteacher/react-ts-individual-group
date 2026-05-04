import { useState } from "react";
import css from "./Lessons.module.css";

import { getLessons } from "../../api/lessons";
import type { Lesson } from "../../types/lessons";
import LessonCard from "./LessonCard/LessonCard";

const Lessons = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const handleClick = async () => {
    const res = await getLessons();
    setLessons(res.items);
  };

  return (
    <div className={css["lessons"]}>
      <button onClick={handleClick}>Get Lessons</button>
      <ul>
        {lessons.map((el) => {
          return <LessonCard value={el} />;
        })}
      </ul>
    </div>
  );
};

export default Lessons;
