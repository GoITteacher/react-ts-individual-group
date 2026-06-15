import css from "./NewProduct.module.css";

const NewProduct = () => {
  return (
    <div className={css["newProduct"]}>
      <form action={handleSubmit}>
        <input name="" type="text" />
      </form>
      NewProduct
    </div>
  );
};

export default NewProduct;
