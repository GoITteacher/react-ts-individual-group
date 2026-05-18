import { useEffect, useState } from "react";
import css from "./CarList.module.css";
import { getCars, type Car } from "../../../api/carsApi";
import Modal from "../Modal/Modal";

const CarList = () => {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState<Car[]>([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getCars(page);
      setCars(data.items);
      setHasNextPage(data.hasNextPage);
      setHasPrevPage(data.hasPreviousPage);
    }
    fetchData();
  }, [page]);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css["carList"]}>
      <ul>
        {cars.map((el) => {
          return (
            <li key={el._id}>
              {el.make} {el.model}
              <button onClick={openModal}>show more</button>
            </li>
          );
        })}
      </ul>

      <div>
        {hasPrevPage && <button onClick={() => setPage(page - 1)}>-</button>}
        <p>{page}</p>
        {hasNextPage && <button onClick={() => setPage(page + 1)}>+</button>}
      </div>

      {isOpenModal && <Modal onClose={closeModal} />}
    </div>
  );
};

export default CarList;

//!=========================================
