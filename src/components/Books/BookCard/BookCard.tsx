import css from "./BookCard.module.css";

interface BookCardProps {
  title: string;
  author: string;
  desc: string;
}

const BookCard = ({ title, author, desc }: BookCardProps) => {
  return (
    <div className={css["bookCard"]}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{desc}</p>
    </div>
  );
};

export default BookCard;
