import type { Product } from "../../../types/products";
import ProductItem from "./ProductItem/ProductItem";
import css from "./Productlist.module.css";

interface ProductlistProps {
  products: Product[];
}

const Productlist = ({ products }: ProductlistProps) => {
  return (
    <div className={css["productlist"]}>
      Productlist
      {products.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
};

export default Productlist;
