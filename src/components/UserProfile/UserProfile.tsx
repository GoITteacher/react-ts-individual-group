import { useState } from "react";
import css from "./UserProfile.module.css";

interface UserProfileProps {}

const UserProfile = ({}: UserProfileProps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <div className={css["userProfile"]}>
      <input onChange={handleChangeName} type="text" />
      <input onChange={handleChangeEmail} type="text" />
      <p>{userName}</p>
      <p>{email}</p>
      <button
        onClick={() => {
          console.log(userName);
          console.log(email);
        }}
      >
        showInfo
      </button>
    </div>
  );
};

export default UserProfile;
