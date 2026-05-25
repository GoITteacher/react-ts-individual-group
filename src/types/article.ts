export interface Article {
  _id: string;
  title: string;
  summary: string;
  source: string;
  category: string;
  publishedAt: string;
  url: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GetNewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Article[];
}
