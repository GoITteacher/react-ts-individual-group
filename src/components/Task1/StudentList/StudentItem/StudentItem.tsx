import type { Student } from "../../../../types/Student";
import css from "./StudentItem.module.css";

interface StudentItemProps {
  student: Student;
}

const StudentItem = ({ student }: StudentItemProps) => {
  return (
    <div className={css["studentItem"]}>
      <h6>Student:</h6>
      <p>{student.name}</p>
      <p>{student.age}</p>
      {student.isActive && <p>Student is active</p>}
      {!student.isActive && <p>Student is not active</p>}
    </div>
  );
};

export default StudentItem;
