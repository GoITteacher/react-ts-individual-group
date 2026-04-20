import Productlist from "./ProductList/Productlist";
import css from "./Task2.module.css";
const products = [
  { title: "Ноутбук", price: 25000, inStock: true },
  { title: "Мишка", price: 500, inStock: true },
  { title: "Клавіатура", price: 1200, inStock: false },
  { title: "Монітор", price: 7000, inStock: true },
];

interface Task2Props {}

const Task2 = ({}: Task2Props) => {
  return (
    <div className={css["task2"]}>
      Task2
      <Productlist products={products} />
    </div>
  );
};

export default Task2;
