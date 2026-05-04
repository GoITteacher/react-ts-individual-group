import axios from "axios";

import type { GetLessonsResponce } from "../types/lessons";
export async function getLessons() {
  const baseUrl = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const endPoint = "/public/lessons";
  const url = baseUrl + endPoint;

  const params = {};

  const res = await axios.get<GetLessonsResponce>(url, { params });
  return res.data;
}
