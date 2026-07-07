import { useUser8Store } from "../../../stores/usersStore";
import css from "./UserList.module.css";

const UserList = () => {
  const userList = useUser8Store((s) => s.users);
  return (
    <div className={css["userList"]}>
      UserList
      {userList.map((el) => {
        return (
          <li>
            FirstName:{el.firstname}
            LastName: {el.lastname}
          </li>
        );
      })}
    </div>
  );
};

export default UserList;
