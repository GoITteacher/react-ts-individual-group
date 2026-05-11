import css from "./CounterInfo.module.css";

interface CounterInfoProps {
  counter: number;
}

const CounterInfo = ({ counter }: CounterInfoProps) => {
  return (
    <div className={css["counterInfo"]}>
      <p>Counter {counter}</p>
    </div>
  );
};

export default CounterInfo;
