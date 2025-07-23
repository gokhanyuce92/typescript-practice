import { DataBase } from "../interfaces/Generic Interface/DataBase";

export class MemorydataBase<T> implements DataBase<T> {
  private items = new Map<number, T>();

  getItems(): Map<number, T> {
    return this.items;
  }

  // Implementing the findById method
  findById(id: number): T | undefined {
    return this.items.get(id);
  }

  // Implementing the save method
  save(item: T): void {
    const id = this.items.size + 1;
    this.items.set(id, item);
  }
}
