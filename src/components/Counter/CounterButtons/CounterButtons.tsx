import css from "./CounterButtons.module.css";

interface CounterButtonsProps {
  setCounter: (callback: (prevValue: number) => number) => void;
}

const CounterButtons = ({ setCounter }: CounterButtonsProps) => {
  const handleIncrement = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <div className={css["counterButtons"]}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
