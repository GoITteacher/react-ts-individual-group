import { useProductStore } from "../../../../stores/productStore";
import css from "./PreviewProduct.module.css";

const PreviewProduct = () => {
  const productData = useProductStore();
  return (
    <div className={css["previewProduct"]}>
      <h2>PreviewProduct: </h2>
      <p>{productData.title}</p>
      <p>{productData.price}</p>
      <p>{productData.desc}</p>
      <p>{productData.inStock}</p>
      <p>{productData.productId}</p>
      <p>{productData.consigment}</p>
    </div>
  );
};

export default PreviewProduct;
