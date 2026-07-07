import { useConfigStore } from "../../../stores/configStore";
import { useCounterStore } from "../../../stores/counterStore";
import { useUser8Store } from "../../../stores/usersStore";
import css from "./Header8.module.css";

const Header8 = () => {
  const lang = useConfigStore((s) => s.lang);
  const value1 = useCounterStore((s) => s.valueCounter1);
  const value2 = useCounterStore((s) => s.valueCounter2);
  const users = useUser8Store((s) => s.users);

  return (
    <div className={css["header8"]}>
      <h1>{lang === "en" ? "Header" : "Хеадер"}</h1>
      <p>Sum: {value1 + value2}</p>
      <p>Users Count: {users.length}</p>
    </div>
  );
};

export default Header8;
