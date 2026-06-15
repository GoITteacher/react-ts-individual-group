import type { Cocktail, GetCocktailsParams } from "./../types/cocktail";

import axios from "axios";

export const getCocktails = async (params: GetCocktailsParams) => {
  const baseUrl = "https://drinkify.b.goit.study/api/v1";
  const endPoint = "/cocktails/search/";
  const url = baseUrl + endPoint;

  const res = await axios.get<Cocktail[]>(url, { params });
  return res.data;
};

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
