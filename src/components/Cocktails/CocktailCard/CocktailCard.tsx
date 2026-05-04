import css from "./CocktailCard.module.css";

interface CocktailCardProps {
  image: string;
  title: string;
}

const CocktailCard = ({ image, title }: CocktailCardProps) => {
  return (
    <div className={css["cocktailCard"]}>
      <img width={100} src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default CocktailCard;
