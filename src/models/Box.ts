export class Box<T> {
  private val: T;

  constructor(value: T) {
    this.val = value;
  }

  // Method to get value
  get(): T {
    return this.val;
  }

  // Method to set value
  set(value: T): void {
    this.val = value;
  }
}
