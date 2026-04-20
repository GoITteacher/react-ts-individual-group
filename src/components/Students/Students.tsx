import Student from "./Student/Student";
import css from "./Students.module.css";

const arr = [
  {
    _id: "69ca172c774a2b3f0c69a869",
    firstName: "string",
    lastName: "string",
    major: "string",
    cohortYear: 2000,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-30T06:24:44.349Z",
    updatedAt: "2026-03-30T06:24:44.349Z",
  },
  {
    _id: "69be8913b3a01fc963935217",
    firstName: "Ivan",
    lastName: "Sidorov",
    major: "Boss",
    cohortYear: 1985,
    gpa: 1,
    enrolled: true,
    createdAt: "2026-03-21T12:03:31.543Z",
    updatedAt: "2026-03-21T12:04:14.748Z",
  },
  {
    _id: "69be890eb3a01fc963935215",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T12:03:26.063Z",
    updatedAt: "2026-03-21T12:03:26.063Z",
  },
  {
    _id: "69be886cb3a01fc963935211",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T12:00:44.031Z",
    updatedAt: "2026-03-21T12:00:44.031Z",
  },
  {
    _id: "69be8865b3a01fc96393520f",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T12:00:37.792Z",
    updatedAt: "2026-03-21T12:00:37.792Z",
  },
  {
    _id: "69be858e2f35c25416f0f7f4",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T11:48:30.812Z",
    updatedAt: "2026-03-21T11:48:30.812Z",
  },
  {
    _id: "69be858b2f35c25416f0f7f2",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T11:48:27.694Z",
    updatedAt: "2026-03-21T11:48:27.694Z",
  },
  {
    _id: "69be84cd52c22d5143c1053f",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T11:45:17.550Z",
    updatedAt: "2026-03-21T11:45:17.550Z",
  },
  {
    _id: "69be83fa52c22d5143c1053b",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T11:41:46.814Z",
    updatedAt: "2026-03-21T11:41:46.814Z",
  },
  {
    _id: "69be83c452c22d5143c10539",
    firstName: "Petro",
    lastName: "Ivanov",
    major: "Chief",
    cohortYear: 1990,
    gpa: 2,
    enrolled: true,
    createdAt: "2026-03-21T11:40:52.057Z",
    updatedAt: "2026-03-21T11:40:52.057Z",
  },
];

const Students = () => {
  return (
    <div className={css["students"]}>
      {arr.map((el) => {
        return <Student firstname={el.firstName} lastname={el.lastName} />;
      })}
    </div>
  );
};

export default Students;
