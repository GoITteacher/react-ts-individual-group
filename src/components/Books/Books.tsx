import { useState } from "react";
import css from "./Books.module.css";
import { getBooks } from "../../api/books";
import type { Book } from "../../types/book";
import BookCard from "./BookCard/BookCard";

interface BooksProps {}

const Books = ({}: BooksProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleButtonClick = async () => {
    const res = await getBooks();
    setBooks(res.items);
  };

  return (
    <div className={css["books"]}>
      <button onClick={handleButtonClick}>Click</button>
      {books.map((el) => {
        return (
          <BookCard
            key={el._id}
            title={el.title}
            author={el.author}
            desc={el.desc}
          />
        );
      })}
    </div>
  );
};

export default Books;
