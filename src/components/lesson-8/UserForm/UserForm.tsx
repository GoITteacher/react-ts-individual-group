import { useUser8Store } from "../../../stores/usersStore";
import type { User8 } from "../../../types/users";
import css from "./UserForm.module.css";

const UserForm = () => {
  const setUsers = useUser8Store((e) => e.setUser);

  const handleSubmit = (formData: FormData) => {
    const value: User8 = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
    };

    setUsers(value);
  };

  return (
    <div className={css["userForm"]}>
      <form action={handleSubmit}>
        <input type="text" name="firstname" />
        <input type="text" name="lastname" />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
