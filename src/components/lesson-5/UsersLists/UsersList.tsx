import css from "./UsersList.module.css";
import { useUsersList } from "../../../hooks/useUsersList";

const UsersList = () => {
  const { usersList, isLoading } = useUsersList();
  return (
    <div className={css["usersList"]}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <ul>
          {usersList.map((el) => {
            return <li>{el.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
