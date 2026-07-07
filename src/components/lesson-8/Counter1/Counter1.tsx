import { useCounterStore } from "../../../stores/counterStore";
import css from "./Counter1.module.css";

const Counter1 = () => {
  const setValueCounter1 = useCounterStore((s) => s.setValueCounter1);
  return (
    <div className={css["counter1"]}>
      <h1>COUNTER 1</h1>
      <input
        type="number"
        onChange={(e) => setValueCounter1(Number(e.target.value))}
      />
    </div>
  );
};

export default Counter1;
