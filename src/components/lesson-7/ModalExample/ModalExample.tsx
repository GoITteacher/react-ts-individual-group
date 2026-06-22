import { useQuery } from "@tanstack/react-query";
import { useModal } from "../../../hooks/useModal";
import css from "./ModalExample.module.css";
import { useState } from "react";

const ModalExample = () => {
  //   const [isOpenInfo, , closeInfo] = useModal();
  //   const [isOpenModal, , closeModal] = useModal();
  //   const [isOpenSidebar] = useModal();
  //   const {data, isLoading} = useQuery();

  return (
    <div className={css["modalExample"]}>
      <button>Open</button>
      <div>MODAL</div>
    </div>
  );
};

export default ModalExample;
