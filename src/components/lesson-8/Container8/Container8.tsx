import { useCounterStore } from "../../../stores/counterStore";
import Counter1 from "../Counter1/Counter1";
import Counter2 from "../Counter2/Counter2";
import css from "./Container8.module.css";

const Container8 = () => {
  const value1 = useCounterStore((s) => s.valueCounter1);
  const value2 = useCounterStore((s) => s.valueCounter2);
  return (
    <div className={css["container8"]}>
      <Counter1 />
      <p>{value1}</p>
      <Counter2 />
      <p>{value2}</p>
    </div>
  );
};

export default Container8;
