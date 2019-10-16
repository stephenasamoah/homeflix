export interface ResponseModel<T = any> {
  message: string;
  code: number;
  results: T;
}

export interface Collection<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T[]
}

export function createCollection<T>(results: T[] = [], total_results = 0, total_pages = 0, page = 0): Collection<T> {
  // console.log({ data, total, from, to, per_page, last_page, current_page });
  return { results, total_results, total_pages, page };
}
