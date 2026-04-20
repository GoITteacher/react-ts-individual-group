import Lesson from "./Lesson/Lesson";
import css from "./Lessons.module.css";
const arr = [
  {
    _id: "69c6572d976ea3d663b04450",
    title: "Individual Lesson",
    subject: "NextJS",
    level: "beginner",
    durationMinutes: 120,
    teacher: "Volodymyr",
    publishedAt: "2026-03-28T00:00:00.000Z",
    summary: "awdawdawdawdawd",
    createdAt: "2026-03-27T10:08:45.701Z",
    updatedAt: "2026-03-27T10:08:45.701Z",
  },
  {
    _id: "698729184946769d34f3e22c",
    title: "Seeded Lesson 17",
    subject: "Mathematics",
    level: "beginner",
    durationMinutes: 107,
    teacher: "Mina Alvarez",
    publishedAt: "2026-04-15T11:59:20.581Z",
    summary: "Lesson summary 17.",
  },
  {
    _id: "698729184946769d34f3e224",
    title: "Seeded Lesson 9",
    subject: "Art History",
    level: "advanced",
    durationMinutes: 60,
    teacher: "Imani Brook",
    publishedAt: "2026-02-19T11:59:20.581Z",
    summary: "Lesson summary 9.",
  },
  {
    _id: "698729184946769d34f3e231",
    title: "Seeded Lesson 22",
    subject: "Biology",
    level: "beginner",
    durationMinutes: 82,
    teacher: "Mina Alvarez",
    publishedAt: "2026-04-10T11:59:20.581Z",
    summary: "Lesson summary 22.",
  },
  {
    _id: "698729184946769d34f3e221",
    title: "Seeded Lesson 6",
    subject: "Philosophy",
    level: "advanced",
    durationMinutes: 78,
    teacher: "Mina Alvarez",
    publishedAt: "2026-06-20T11:59:20.581Z",
    summary: "Lesson summary 6.",
  },
  {
    _id: "698729184946769d34f3e22f",
    title: "Seeded Lesson 20",
    subject: "Art History",
    level: "beginner",
    durationMinutes: 97,
    teacher: "Mina Alvarez",
    publishedAt: "2026-05-31T11:59:20.581Z",
    summary: "Lesson summary 20.",
  },
  {
    _id: "698729184946769d34f3e21c",
    title: "Seeded Lesson 1",
    subject: "Art History",
    level: "beginner",
    durationMinutes: 83,
    teacher: "Sophie Zelenko",
    publishedAt: "2026-04-12T11:59:20.581Z",
    summary: "Lesson summary 1.",
  },
  {
    _id: "698729184946769d34f3e225",
    title: "Seeded Lesson 10",
    subject: "Art History",
    level: "beginner",
    durationMinutes: 69,
    teacher: "Mina Alvarez",
    publishedAt: "2026-07-25T11:59:20.581Z",
    summary: "Lesson summary 10.",
  },
  {
    _id: "698729184946769d34f3e22a",
    title: "Seeded Lesson 15",
    subject: "Mathematics",
    level: "intermediate",
    durationMinutes: 93,
    teacher: "Imani Brook",
    publishedAt: "2026-02-25T11:59:20.581Z",
    summary: "Lesson summary 15.",
  },
  {
    _id: "698729184946769d34f3e226",
    title: "Seeded Lesson 11",
    subject: "Philosophy",
    level: "intermediate",
    durationMinutes: 81,
    teacher: "Jordan Reed",
    publishedAt: "2026-02-22T11:59:20.581Z",
    summary: "Lesson summary 11.",
  },
];

const Lessons = () => {
  return (
    <div className={css["lessons"]}>
      {arr.map((el) => {
        return <Lesson title={el.title} level={el.level} />;
      })}
    </div>
  );
};

export default Lessons;
