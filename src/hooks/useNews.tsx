import { useEffect, useState } from "react";
import { getNews2 } from "../api/news2Api";
import type { News } from "../types/news";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const handleIncrement = () => {
    setPage(page + 1);
  };
  const handleDecrenment = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return { handleIncrement, handleDecrenment, page, setPage };
};
export const useNews = (
  query: string,
  page: number,
  setArr: (data: News[]) => void,
) => {
  useEffect(() => {
    async function fetchData() {
      if (query) {
        const data = await getNews2(query, page);
        setArr(data.articles);
      }
    }

    fetchData();
  }, [query, page]);
};
