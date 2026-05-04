export interface Book {
  _id: string;
  title: string;
  author: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBookResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Book[];
}
