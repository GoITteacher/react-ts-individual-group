import { useQuery } from "@tanstack/react-query";
import { getCars } from "../api/carsApi";

export const useCars = () => {
  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(1),
  });

  const handleRefetch = carsQuery.refetch;
  const cars = carsQuery.data?.items || [];
  const isLoading = carsQuery.isLoading;
  const isError = carsQuery.isError;

  return { cars, isLoading, isError, handleRefetch };
};
