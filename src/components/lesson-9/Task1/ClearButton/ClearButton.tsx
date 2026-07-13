import { useUserFormStore } from "../../../../stores/usersFormStore";
import css from "./ClearButton.module.css";

const ClearButton = () => {
  const clearUsers = useUserFormStore((s) => s.clearUsers);
  return (
    <div className={css["clearButton"]}>
      <button onClick={clearUsers}>ClearButton</button>
    </div>
  );
};

export default ClearButton;
