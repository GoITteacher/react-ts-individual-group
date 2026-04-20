import type { Student } from "../../../types/Student";
import StudentItem from "./StudentItem/StudentItem";
import css from "./StudentList.module.css";

interface StudentListProps {
  students: Student[];
}

const StudentList = ({ students }: StudentListProps) => {
  return (
    <div className={css["studentList"]}>
      StudentList:
      {students.map((elem) => {
        return <StudentItem student={elem} />;
      })}
    </div>
  );
};

export default StudentList;
