import axios from "axios";

export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetCarsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}

export const getCars = async (page: number) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/cars";
  const url = BASE_URL + END_POINT;
  const params = { page };
  const res = await axios.get<GetCarsResponse>(url, { params });
  return res.data;
};
