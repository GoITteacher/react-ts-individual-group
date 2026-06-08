import { useEffect, useState } from "react";
import css from "./Cars.module.css";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../../api/carsApi";

const Cars = () => {
  //   const {data, isLoading, isError, error} = useQuery();

  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars(1),
  });

  const handleRefetch = carsQuery.refetch;
  const cars = carsQuery.data?.items || [];
  const isLoading = carsQuery.isLoading;
  const isError = carsQuery.isError;

  return (
    <div className={css["cars"]}>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <ul>
          {cars.map((el) => {
            return <li>{el.make}</li>;
          })}
        </ul>
      )}

      <button onClick={() => handleRefetch()}>Click</button>
    </div>
  );
};

export default Cars;
