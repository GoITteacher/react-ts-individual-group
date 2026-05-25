import { useEffect, useState } from "react";
import type { Article, GetNewsResponse } from "../../../types/article";
import css from "./News.module.css";
import { getNews } from "../../../api/newsApi";

const News = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        const data = await getNews();
        setNews(data.items);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [isOpenModal]);

  return (
    <div className={css["news"]}>
      <button onClick={handleOpenModal}>Open news modal</button>

      {isLoading && <p>Loading</p>}

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
