export interface DataBase<T> {
  getItems(): Map<number, T>;
  findById(id: number): T | undefined;
  save(item: T): void;
}
