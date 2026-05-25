import { useEffect, useEffectEvent, useState } from "react";
import css from "./CarListModal.module.css";
import { getCars } from "../../../../api/carsApi";
import type { Cars2 } from "../../../../types/cars";

interface CarListModalProps {
  closeModal: () => void;
}

const CarListModal = ({ closeModal }: CarListModalProps) => {
  const [car, setCar] = useState<Cars2[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getCars(1);
      setCar(data.items);
    }

    fetchData();
    console.log("Запит");
  }, []);
  return (
    <div className={css["carListModal"]}>
      CarListModal
      <button onClick={closeModal}>Close</button>
      <ul>
        {car.map((el) => {
          return <li key={el._id}>{el.model}</li>;
        })}
      </ul>
    </div>
  );
};

export default CarListModal;
