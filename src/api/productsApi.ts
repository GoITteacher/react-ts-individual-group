import axios from "axios";
import type {
  CreateProduct,
  GetProductsParams,
  GetProductsResponse,
} from "../types/product";

export const getProducts = async (params: GetProductsParams) => {
  const baseUrl = "https://food-boutique.b.goit.study/api";
  const endPoint = "/products/";
  const url = baseUrl + endPoint;

  const res = await axios.get<GetProductsResponse>(url, { params });
  return res.data;
};

export const createProduct = async (product: CreateProduct) => {
  const baseUrl = "https://food-boutique.b.goit.study/api";
  const endPoint = "/products/";
  const url = baseUrl + endPoint;

  const res = await axios.post<GetProductsResponse>(url, product);
  return res.data;
};
