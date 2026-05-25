import axios from "axios";
import type { GetCarsResponse2 } from "../types/cars";

export const getCars = async (page: number) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/cars";
  const url = BASE_URL + END_POINT;
  const params = { page };
  const res = await axios.get<GetCarsResponse2>(url, { params });
  return res.data;
};
