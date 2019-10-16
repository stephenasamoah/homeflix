export interface ResponseModel<T = any> {
  message: string;
  code: number;
  results: T[];
}

export interface Collection<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T[]
}
