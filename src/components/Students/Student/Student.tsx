import css from "./Student.module.css";

const Student = ({ firstname, lastname }) => {
  return (
    <div className={css["student"]}>
      <p>
        {firstname} {lastname}
      </p>
    </div>
  );
};

export default Student;
