import axios from "axios";
import type { Cocktail } from "../types/cocktails";

export const getRandomCocktails = async () => {
  const baseUrl = "https://drinkify.b.goit.study/api/v1";
  const endPoint = "/cocktails/";
  const url = baseUrl + endPoint;

  const params = {
    r: 10,
  };

  const res = await axios.get<Cocktail[]>(url, { params });
  return res.data;
};
