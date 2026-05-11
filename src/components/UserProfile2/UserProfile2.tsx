import { use, useState } from "react";
import css from "./UserProfile2.module.css";

interface UserProfile2Props {}

const UserProfile2 = ({}: UserProfile2Props) => {
  const [userName, setUserName] = useState("Vasyl");
  const [isOnline, setIsOnline] = useState(true);
  const [members, setMembers] = useState(0);

  return (
    <div className={css["userProfile2"]}>
      UserProfile2
      <p>ім’я користувача: {userName}</p>
      <button
        onClick={() => {
          setIsOnline(!isOnline);
        }}
      >
        {isOnline ? "offline" : "online"}
      </button>
      <p>Kількість підписників: {members}</p>
      <button onClick={() => setMembers(members + 1)}>+</button>
      <button onClick={() => setMembers(members - 1)}>-</button>
    </div>
  );
};

export default UserProfile2;
