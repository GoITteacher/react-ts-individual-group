import { create } from "zustand";

interface ProductStore {
  title: string;
  price: number;
  desc: string;
  inStock: string;
  productId: string;
  consigment: string;

  setTitle: (title: string) => void;
  setPrice: (price: number) => void;
  setDesc: (desc: string) => void;
  setInStock: (inStock: string) => void;
  setProductId: (productId: string) => void;
  setConsigment: (consigment: string) => void;
}

export const useProductStore = create<ProductStore>()((setStore) => {
  return {
    title: "",
    price: 0,
    desc: "",
    inStock: "yes",
    productId: "",
    consigment: "",

    setTitle: (newTitle) => {
      setStore(() => {
        return { title: newTitle };
      });
    },

    setPrice: (newPrice) => {
      setStore(() => {
        return { price: newPrice };
      });
    },

    setDesc: (newDesc) => {
      setStore(() => {
        return { desc: newDesc };
      });
    },

    setInStock: (newInStock) => {
      setStore(() => {
        return { inStock: newInStock };
      });
    },

    setProductId: (newProductId) => {
      setStore(() => {
        return { productId: newProductId };
      });
    },

    setConsigment: (newConsigment) => {
      setStore(() => {
        return { consigment: newConsigment };
      });
    },
  };
});
