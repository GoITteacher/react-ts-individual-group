import { useQuery } from "@tanstack/react-query";
import css from "./UsersList.module.css";
import { fetchUsers } from "../../../api/users";

const UsersList = () => {
  const usersListQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
  const usersList = usersListQuery.data || [];
  const isLoading = usersListQuery.isLoading;
  const error = usersListQuery.error;
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
