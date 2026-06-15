export interface GetCocktailsParams {
  f?: string;
  s?: string;
  d?: string;
  a?: string;
  c?: string;
  i?: string;
  g?: string;
}

export interface Cocktail {
  _id: string;
  drink: string;
  thumb: string;
}
