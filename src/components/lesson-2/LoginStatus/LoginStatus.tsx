/* 
4. Створи компонент LoginStatus. Спочатку користувач повинен мати статус Logged out. Після натискання на кнопку статус має змінюватись на Logged in.
*/

import { useState } from "react";
import css from "./LoginStatus.module.css";

const LoginStatus = () => {
  const [status, setStatus] = useState(true);
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <div className={css["loginStatus"]}>
      <button onClick={handleClick}>
        {status ? "loged out" : "Logged In"}
      </button>
    </div>
  );
};

export default LoginStatus;
