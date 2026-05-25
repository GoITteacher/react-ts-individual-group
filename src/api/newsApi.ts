import axios from "axios";
import type { GetNewsResponse } from "../types/article";

export const getNews = async () => {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/news";
  const url = baseUrl + endPoint;

  const params = {};

  const res = await axios.get<GetNewsResponse>(url, { params });
  return res.data;
};
