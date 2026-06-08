import { useQuery } from "@tanstack/react-query";
import css from "./CarsList.module.css";
import { getBooks } from "../../../api/booksApi";
import { getCars } from "../../../api/carsApi";
import { useState } from "react";

const CarsList = () => {
  const [page, setPage] = useState(1);

  const carsListQuery = useQuery({
    queryKey: ["cars", page],
    queryFn: () => getCars(page),
  });

  const carsList = carsListQuery.data?.items || [];
  const hasNext = carsListQuery.data?.hasNextPage || false;
  const hasPrev = carsListQuery.data?.hasPreviousPage || false;

  const isLoading = carsListQuery.isLoading;
  const error = carsListQuery.error;

  return (
    <div className={css["carsList"]}>
      CarsList:
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {!isLoading && (
        <ul>
          {carsList.map((el) => {
            return <li>{el.model}</li>;
          })}
        </ul>
      )}
      {hasPrev && <button onClick={() => setPage(page - 1)}>PrevPage</button>}
      {hasNext && <button onClick={() => setPage(page + 1)}>NextPage</button>}
    </div>
  );
};

export default CarsList;
