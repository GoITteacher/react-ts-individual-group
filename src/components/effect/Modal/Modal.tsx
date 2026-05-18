import { useEffect } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  useEffect(() => {
    const onKeyDown = () => {
      console.log("keydown");
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default Modal;
