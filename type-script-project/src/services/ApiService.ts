export interface ApiService<T> {
  getAll(): Promise<T[]>;
  getOneById(id: number): Promise<T>;
}
