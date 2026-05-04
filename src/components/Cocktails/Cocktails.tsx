import { useState } from "react";
import css from "./Cocktails.module.css";
import type { Cocktail } from "../../types/cocktails";
import { getRandomCocktails } from "../../api/cocktails";
import CocktailCard from "./CocktailCard/CocktailCard";

interface CocktailsProps {}

const Cocktails = ({}: CocktailsProps) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const handleClick = async () => {
    const res = await getRandomCocktails();
    setCocktails(res);
  };

  return (
    <>
      <button onClick={handleClick}>Get Random Cocktails</button>
      <ul>
        {cocktails.map((el) => {
          return (
            <CocktailCard key={el._id} image={el.drinkThumb} title={el.drink} />
          );
        })}
      </ul>
    </>
  );
};

export default Cocktails;
