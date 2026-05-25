import { useState } from "react";
import css from "./Cars.module.css";
import type { Cars2 } from "../../../types/cars";
import CarListModal from "./CarListModal/CarListModal";

const Cars = () => {
  const [car, setCar] = useState<Cars2[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css["cars"]}>
      Cars
      <button onClick={openModal}>Open Cars </button>
      {isOpenModal && <CarListModal closeModal={closeModal} />}
    </div>
  );
};

export default Cars;

//!=========================================
const objA = {
  x: 10,
  y: 20,
};

const objB = objA;

objB.x = 25;

//!=========================================

function foo(callback) {
  callback();
}

//!=========================================

function test() {
  console.log("test");
}
foo(test);
