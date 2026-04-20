import StudentList from "./StudentList/StudentList";
import css from "./Task1.module.css";

const students = [
  { name: "Іван", age: 20, isActive: true },
  { name: "Марія", age: 22, isActive: false },
  { name: "Олег", age: 19, isActive: true },
  { name: "Анна", age: 21, isActive: false },
];

const Task1 = () => {
  return (
    <div className={css["task1"]}>
      <StudentList students={students} />
    </div>
  );
};

export default Task1;
