import type { Product } from "../../../../types/products";
import css from "./ProductItem.module.css";
interface ProductItemProps {
  product: Product;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className={css["productItem"]}>
      <h3>Title: {product.title} </h3>
      <p>Price: {product.price} </p>
    </div>
  );
};

export default ProductItem;

//!=========================================
