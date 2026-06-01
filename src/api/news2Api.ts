import axios from "axios";
import type { GetNewsResponse } from "../types/news";

export const getNews2 = async (query: string, page: number) => {
  const baseUrl = "https://newsapi.org";
  const endPoint = "/v2/everything";
  const url = baseUrl + endPoint;

  const params = {
    q: query,
    apiKey: "c8747511a2c34730a83caaff4f3693e7",
    page: page,
    pageSize: 5,
  };

  const res = await axios.get<GetNewsResponse>(url, { params });
  return res.data;
};
