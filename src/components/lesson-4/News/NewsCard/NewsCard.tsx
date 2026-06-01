import { useState } from "react";
import type { News } from "../../../../types/news";
import css from "./NewsCard.module.css";
import NewsModal from "../NewsModal/NewsModal";

interface NewsCardProps {
  el: News;
}

const NewsCard = ({ el }: NewsCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <li className={css["newsCard"]}>
      <p>{el.title}</p>
      <p>{el.author}</p>
      <button onClick={openModal}>More</button>
      {isModalOpen && <NewsModal el={el} closeModal={closeModal} />}
    </li>
  );
};

export default NewsCard;
