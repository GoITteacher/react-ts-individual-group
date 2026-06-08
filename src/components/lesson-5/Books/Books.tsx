import { useQuery } from "@tanstack/react-query";
import css from "./Books.module.css";
import { getBooks } from "../../../api/booksApi";
import { useState } from "react";

const Books = () => {
  const [value, setValue] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", { title: value }],
    queryFn: () => getBooks({ title: value }),
    // enabled: value.length > 0,
    // retry: true,
    // retryDelay: 300,
    // retry: 2,
    // refetchInterval: 2000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchOnReconnect: true,
    // initialData: {
    //   page: 0,
    //   perPage: 0,
    //   totalPages: 0,
    //   totalItems: 0,
    //   hasNextPage: true,
    //   hasPreviousPage: true,
    //   items: [],
    // },
  });

  const books = data?.items || [];

  return (
    <div className={css["books"]}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error ...</p>}

      <ul>
        {books.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Books;
