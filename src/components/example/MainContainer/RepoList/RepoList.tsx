import css from "./RepoList.module.css";

const arr = ["FS-122", "FS-123", "FS-130", "FS-132", "FS-135"];

const RepoList = () => {
  return (
    <div className={css["repoList"]}>
      {arr.map((str) => {
        return <li>{str}</li>;
      })}
    </div>
  );
};

export default RepoList;
