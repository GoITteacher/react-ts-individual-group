import { useState } from "react";
import css from "./Cocktails.module.css";
import { useQuery } from "@tanstack/react-query";
import { getCocktails, getRandomCocktails } from "../../../api/cocktailsApi";
import { useCocktails } from "../../../hooks/useCocktails";

interface CocktailsProps {}

const Cocktails = ({}: CocktailsProps) => {
  const [value, setValue] = useState("");

  const { isError, cocktails, isLoading } = useCocktails(value);

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    setValue(name);
  };

  return (
    <div className={css["cocktails"]}>
      <form action={handleSubmit}>
        <input name={"name"} type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {!isError &&
          !isLoading &&
          cocktails.map((el) => {
            return <li>{el.drink}</li>;
          })}
      </ul>
    </div>
  );
};

export default Cocktails;
