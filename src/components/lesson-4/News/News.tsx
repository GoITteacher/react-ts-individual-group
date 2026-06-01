import { useEffect, useState } from "react";
import css from "./News.module.css";
import { getNews2 } from "../../../api/news2Api";
import type { News } from "../../../types/news";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
  const [query, setQuery] = useState("");
  const [arr, setArr] = useState<News[]>([]);

  const [page, setPage] = useState(1);

  const handleIncrement = () => {
    setPage(page + 1);
  };
  const handleDecrenment = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleSubmit = (formData: FormData) => {
    const value = formData.get("value") as string;
    setQuery(value);
    setPage(1);
  };

  useEffect(() => {
    async function fetchData() {
      if (query) {
        const data = await getNews2(query, page);
        setArr(data.articles);
      }
    }

    fetchData();
  }, [query, page]);

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
