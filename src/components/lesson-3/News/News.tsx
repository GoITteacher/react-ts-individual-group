import { useEffect, useState } from "react";
import type { Article, GetNewsResponse } from "../../../types/article";
import css from "./News.module.css";
import { getNews } from "../../../api/newsApi";

const News = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (isOpenModal) {
        const data = await getNews();
        setNews(data.items);
      }
    }
    fetchData();
  }, [isOpenModal]);

  return (
    <div className={css["news"]}>
      <button onClick={handleOpenModal}>Open news modal</button>

      {isOpenModal && (
        <div>
          {news.map((el) => {
            return <p key={el._id}>Title: {el.title}</p>;
          })}
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default News;
