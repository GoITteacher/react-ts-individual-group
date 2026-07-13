import { useState } from "react";
import css from "./UserForm.module.css";
import { useUserFormStore } from "../../../../stores/usersFormStore";

const UserForm = () => {
  const addUser = useUserFormStore((s) => s.addUsers);

  const handleSubmit = (formData: FormData) => {
    const newUser = {
      firstName: formData.get("FirstName") as string,
      lastName: formData.get("LastName") as string,
    };
    addUser(newUser);
  };

  return (
    <div className={css["userForm"]}>
      UserForm
      <form action={handleSubmit}>
        <input name="FirstName" type="text" placeholder="First_Name" />
        <input name="LastName" type=" text" placeholder=" Last_Name" />
        <button type="submit"> Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
