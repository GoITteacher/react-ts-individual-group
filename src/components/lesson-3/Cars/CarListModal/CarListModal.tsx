import css from "./CarListModal.module.css";

interface CarListModalProps {
  closeModal: () => void;
}

const CarListModal = ({ closeModal }: CarListModalProps) => {
  return (
    <div className={css["carListModal"]}>
      CarListModal
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default CarListModal;
