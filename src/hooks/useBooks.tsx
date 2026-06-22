import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/booksApi";

export const useBooks = (value: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", { title: value }],
    queryFn: () => getBooks({ title: value }),
  });

  const books = data?.items || [];
  return { books, isLoading, isError };
};
