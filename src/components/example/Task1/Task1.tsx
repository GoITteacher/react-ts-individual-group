import CarItem from "../CarItem/CarItem";
import css from "./Task1.module.css";

const cars = [
  {
    _id: "69caa8be0ab88a47b4290db1",
    make: "Tesla",
    model: "universal",
    year: 2024,
    color: "green",
    price: 50000,
    mileage: 10000,
    fuelType: "electric",
    description: "'Super puper'",
    createdAt: "2026-03-30T16:45:50.082Z",
    updatedAt: "2026-03-30T16:45:50.082Z",
  },
  {
    _id: "69caa6bf0ab88a47b4290da3",
    make: "Mazda",
    model: "sedan",
    year: 2020,
    color: "black",
    price: 20000,
    mileage: 20000,
    fuelType: "gasoline",
    createdAt: "2026-03-30T16:37:19.828Z",
    updatedAt: "2026-03-30T17:38:13.768Z",
  },
  {
    _id: "69c96d1cdabf9bb762433c35",
    make: "Carens",
    model: "Universal",
    year: 2017,
    color: "gray",
    price: 4000,
    mileage: 200000,
    fuelType: "gasoline",
    description: "Familly car in good condition",
    createdAt: "2026-03-29T18:19:08.103Z",
    updatedAt: "2026-03-29T18:19:08.103Z",
  },
  {
    _id: "698729184946769d34f3e1d9",
    make: "Atlas",
    model: "Sport",
    year: 2022,
    color: "silver",
    price: 43638,
    mileage: 91034,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1dc",
    make: "Orion",
    model: "Sport",
    year: 2022,
    color: "black",
    price: 51779,
    mileage: 94027,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1e3",
    make: "Orion",
    model: "Sport",
    year: 2020,
    color: "silver",
    price: 42976,
    mileage: 73504,
    fuelType: "diesel",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1d6",
    make: "Horizon",
    model: "Sport",
    year: 2021,
    color: "black",
    price: 53216,
    mileage: 49124,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1e2",
    make: "Orion",
    model: "LX",
    year: 2025,
    color: "white",
    price: 65898,
    mileage: 31939,
    fuelType: "hybrid",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1e0",
    make: "in neque et",
    model: "at omnis autem",
    year: 670,
    color: "#200a23",
    price: 283,
    mileage: 945,
    fuelType: "gasoline",
    description:
      "Blanditiis repellendus quis quos est quo accusantium corrupti. Eos velit doloribus qui non magnam. Suscipit laudantium velit commodi sit assumenda. Voluptatem eius eaque perspiciatis perferendis laboriosam nulla eum est. Et inventore modi enim autem magni ullam nihil quod.",
    updatedAt: "2026-03-16T09:29:35.709Z",
  },
  {
    _id: "698729184946769d34f3e1e4",
    make: "Orion",
    model: "LX",
    year: 2021,
    color: "ruby",
    price: 63478,
    mileage: 113960,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
  },
];

const Task1 = () => {
  return (
    <div className={css["task1"]}>
      <h1>CAR LIST</h1>
      <ul>
        {cars.map((el) => {
          return <CarItem car={el} />;
        })}
      </ul>
    </div>
  );
};

export default Task1;
