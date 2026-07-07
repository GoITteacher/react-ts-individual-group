import { useCounterStore } from "../../../stores/counterStore";
import css from "./Counter2.module.css";

const Counter2 = () => {
  const setValueCounter2 = useCounterStore((s) => s.setValueCounter2);
  return (
    <div className={css["counter2"]}>
      <h1>COUNTER 2</h1>
      <input
        type="number"
        onChange={(e) => setValueCounter2(Number(e.target.value))}
      />
    </div>
  );
};

export default Counter2;
