import axios from "axios";
import type { GetBookResponse } from "../types/book";
export async function getBooks() {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/books";
  const url = baseUrl + endPoint;

  const params = {};

  const res = await axios.get<GetBookResponse>(url, { params });
  return res.data;
}
