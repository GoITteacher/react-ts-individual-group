import { useQuery } from "@tanstack/react-query";
import css from "./Articles.module.css";
import { getNews } from "../../../api/newsApi";

const Articles = () => {
  const articlesQuery = useQuery({
    queryKey: ["articles"],
    queryFn: () => getNews(),
  });

  const arrticle = articlesQuery.data?.items || [];
  const isLoading = articlesQuery.isLoading;
  const error = articlesQuery.error;

  return (
    <div className={css["articles"]}>
      Articles
      {isLoading && <p>Loading</p>}
      {error && <p>Error</p>}
      {arrticle?.length > 0 && (
        <ul>
          {arrticle.map((el) => {
            return <li>{el.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Articles;
