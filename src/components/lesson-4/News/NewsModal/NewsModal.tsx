import { useEffect } from "react";
import type { News } from "../../../../types/news";
import css from "./NewsModal.module.css";

interface NewsModalProps {
  el: News;
  closeModal: () => void;
}
const NewsModal = ({ el, closeModal }: NewsModalProps) => {
  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      console.log(e.code);
      if (e.code === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", keyDown);

    return () => {
      document.removeEventListener("keydown", keyDown);
      console.log("Buy!");
    };
  }, []);

  return (
    <div>
      <img src={el.urlToImage} />
      <button onClick={closeModal}>close</button>
    </div>
  );
};

export default NewsModal;
