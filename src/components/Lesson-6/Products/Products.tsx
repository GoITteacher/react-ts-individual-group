import { useState } from "react";
import css from "./Products.module.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/productsApi";
import type { NewProduct } from "../../../types/product";

const Products = () => {
  const [cart, setCart] = useState<NewProduct[]>([]);
  const [value, setValue] = useState("");

  const handleSubmit = (formData: FormData) => {
    const value = formData.get("keywords") as string;
    setValue(value);
  };

  const queryProducts = useQuery({
    queryKey: ["products", { keyword: value }],
    queryFn: () => getProducts({ keyword: value }),
    retry: false,
  });

  const handleCartClick = (id: string) => {
    const index = cart.findIndex((el) => el.productId === id);

    if (index >= 0) {
      const copyArr = [...cart];
      const copyObj = { ...copyArr[index] };
      copyObj.amount += 1;
      copyArr[index] = copyObj;

      setCart([...copyArr]);
    } else {
      setCart([...cart, { productId: id, amount: 1 }]);
    }
  };

  const products = queryProducts.data?.results || [];
  const isLoading = queryProducts.isLoading;
  const isError = queryProducts.isError;

  return (
    <div className={css["products"]}>
      <form action={handleSubmit}>
        <input name="keywords" type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {products.map((el) => {
          return (
            <li>
              <p>{el.name}</p>
              <button onClick={() => handleCartClick(el._id)}>+</button>
            </li>
          );
        })}
      </ul>

      <hr />

      <ul>
        {cart.map((el) => {
          return (
            <li>
              {el.productId} - {el.amount}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
