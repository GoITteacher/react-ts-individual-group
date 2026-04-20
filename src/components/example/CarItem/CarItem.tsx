import css from "./CarItem.module.css";

const CarItem = ({ car }) => {
  return (
    <div className={css["car-item"]}>
      <p>
        {car.make} - {car.model}
      </p>
    </div>
  );
};

export default CarItem;
