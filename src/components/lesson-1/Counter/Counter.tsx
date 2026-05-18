import { useState } from "react";
import css from "./Counter.module.css";
import CounterInfo from "./CounterInfo/CounterInfo";
import CounterButtons from "./CounterButtons/CounterButtons";

interface CounterProps {}

const Counter = ({}: CounterProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={css["counter"]}>
      <CounterInfo counter={counter} />
      <CounterButtons setCounter={setCounter} />
    </div>
  );
};

export default Counter;
