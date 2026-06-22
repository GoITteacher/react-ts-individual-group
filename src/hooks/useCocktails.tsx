import { useQuery } from "@tanstack/react-query";
import { getCocktails, getRandomCocktails } from "../api/cocktailsApi";

export const useCocktails = (value: string) => {
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

  return { cocktails, isLoading, isError };
};
