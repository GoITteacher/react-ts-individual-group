import { useProductStore } from "../../../../stores/productStore";
import css from "./ProductForm.module.css";

const ProductForm = () => {
  const setTitle = useProductStore((s) => s.setTitle);
  const setPrice = useProductStore((s) => s.setPrice);
  const setDesc = useProductStore((s) => s.setDesc);
  const setInStock = useProductStore((s) => s.setInStock);
  const setProductId = useProductStore((s) => s.setProductId);
  const setConsigment = useProductStore((s) => s.setConsigment);
  return (
    <div className={css["productForm"]}>
      <form>
        <input
          onChange={(e) => setTitle(e.target.value)}
          name="name"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => setPrice(Number(e.target.value))}
          name="name"
          type="text"
          placeholder="Price"
        />
        <input
          onChange={(e) => setDesc(e.target.value)}
          name="name"
          type="text"
          placeholder="Desc"
        />
        <input
          onChange={(e) => setInStock(e.target.value)}
          name="name"
          type="text"
          placeholder="In stock"
        />
        <input
          onChange={(e) => setProductId(e.target.value)}
          name="name"
          type="text"
          placeholder="ProductID"
        />
        <input
          onChange={(e) => setConsigment(e.target.value)}
          name="name"
          type="text"
          placeholder="Consigment"
        />
      </form>
    </div>
  );
};

export default ProductForm;

//!=========================================
