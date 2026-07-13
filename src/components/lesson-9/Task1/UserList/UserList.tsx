import { useUserFormStore } from "../../../../stores/usersFormStore";
import css from "./UserList.module.css";

const UserList = () => {
  const userList = useUserFormStore((s) => s.users);

  return (
    <div className={css["userList"]}>
      {userList.map((user) => {
        return (
          <li>
            {user.lastName} {user.lastName}
          </li>
        );
      })}
    </div>
  );
};

export default UserList;
