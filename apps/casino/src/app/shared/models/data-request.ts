export interface DataRequest<T> {
  count: number;
  next: null | boolean;
  previous: null | boolean;
  results: T[];
}
