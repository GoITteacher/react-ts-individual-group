export interface Cars2 {
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

export interface GetCarsResponse2 {
  page: 0;
  perPage: 0;
  totalPages: 0;
  totalItems: 0;
  hasNextPage: true;
  hasPreviousPage: true;
  items: Cars2[];
}
