import css from "./Movie.module.css";
interface MovieProps {
  title: string;
  releaseYear: number;
  rating: number;
}

const Movie = ({ title, releaseYear, rating }: MovieProps) => {
  return (
    <li className={css.elem}>
      <p className={css.title}>{title}</p>
      <p>{releaseYear}</p>
      <p>{rating}</p>
    </li>
  );
};

export default Movie;
