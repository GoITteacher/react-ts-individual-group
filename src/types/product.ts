export interface Product {
  _id: string;
  name: string;
  img: string;
  category: string;
  price: number;
  size: string;
  is10PercentOff: boolean;
  popularity: number;
}

export interface GetProductsParams {
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface GetProductsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Product[];
}

export interface NewProduct {
  productId: string;
  amount: number;
}

export interface CreateProduct {
  email: string;
  products: NewProduct[];
}
