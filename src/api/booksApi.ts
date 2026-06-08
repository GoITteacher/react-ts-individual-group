import axios from "axios";
import type { GetBooksResponse } from "../types/books";

interface GetBooksParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: string;
  title?: string;
  author?: string;
  desc?: string;
}

export const getBooks = async (userParams: GetBooksParams = {}) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/books";
  const url = BASE_URL + END_POINT;

  const params = {
    page: 1,
    perPage: 50,
    ...userParams,
  };

  const res = await axios.get<GetBooksResponse>(url, { params });
  return res.data;
};

//!=========================================

// export const getBooks = async (title: string) => {
//   const BASE_URL = "";
//   const END_POINT = "";
//   const url = BASE_URL + END_POINT;

//   const params = {
//     title: title,
//   };

//   const res = await axios.get<[]>(url, { params });
//   return res.data;
// };
