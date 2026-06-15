import { useState } from "react";
import css from "./Cocktails.module.css";
import { useQuery } from "@tanstack/react-query";
import { getCocktails, getRandomCocktails } from "../../../api/cocktailsApi";

interface CocktailsProps {}

const Cocktails = ({}: CocktailsProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    setValue(name);
  };

  const cocktailsQuery = useQuery({
    queryKey: ["cocktails", { s: value }],
    queryFn: () => getCocktails({ s: value }),
    retry: false,
    enabled: value.length > 0,
  });

  const cocktailsRandomQuery = useQuery({
    queryKey: ["randomCocktails"],
    queryFn: () => getRandomCocktails(),
    retry: false,
  });

  const cocktails = cocktailsQuery.data || cocktailsRandomQuery.data || [];
  const isLoading = cocktailsQuery.isLoading;
  const isError = cocktailsQuery.isError;

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
