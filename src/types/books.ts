export interface Book {
  _id: string;
  title: string;
  author: string;
  desc: string;
}

export interface GetBooksResponse {
  page: 0;
  perPage: 0;
  totalPages: 0;
  totalItems: 0;
  hasNextPage: true;
  hasPreviousPage: true;
  items: Book[];
}
