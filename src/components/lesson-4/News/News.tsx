import { useEffect, useState } from "react";
import css from "./News.module.css";
import type { News } from "../../../types/news";
import NewsCard from "./NewsCard/NewsCard";
import { useNews, usePagination } from "../../../hooks/useNews";

const News = () => {
  const [query, setQuery] = useState("");
  const [arr, setArr] = useState<News[]>([]);
  const { handleIncrement, handleDecrenment, page, setPage } = usePagination();
  useNews(query, page, setArr);

  const handleSubmit = (formData: FormData) => {
    const value = formData.get("value") as string;
    setQuery(value);
    setPage(1);
  };

  return (
    <div className={css["news"]}>
      <form action={handleSubmit}>
        <input name="value" type="text" />
        <button type="submit">Search</button>
      </form>
      <p>
        {query} {page}
      </p>

      <ul>
        {arr.map((el) => {
          return <NewsCard key={el.url} el={el} />;
        })}
      </ul>
      <div>
        <button onClick={handleIncrement}>Page Up</button>
        <button onClick={handleDecrenment}>Page Down</button>
      </div>
    </div>
  );
};

export default News;
