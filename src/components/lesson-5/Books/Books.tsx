import { useQuery } from "@tanstack/react-query";
import css from "./Books.module.css";
import { getBooks } from "../../../api/booksApi";
import { useState } from "react";
import { useBooks } from "../../../hooks/useBooks";

const Books = () => {
  const [value, setValue] = useState("");
  const { books, isLoading, isError } = useBooks(value);

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
