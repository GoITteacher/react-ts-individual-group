import css from "./Cars.module.css";
import { useCars } from "../../../hooks/useCars";

const Cars = () => {
  const { handleRefetch, cars, isLoading } = useCars();

  return (
    <div className={css["cars"]}>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <ul>
          {cars.map((el) => {
            return <li>{el.make}</li>;
          })}
        </ul>
      )}

      <button onClick={() => handleRefetch()}>Click</button>
    </div>
  );
};

export default Cars;
