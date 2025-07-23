export class Stack1<T> {
  // Defining the private array to store the stack elements
  private st: T[] = [];

  // Constructor to initialize the stack with initial contents
  constructor(initialContents?: T[]) {
    if (initialContents) {
      this.st = initialContents;
    }
  }

  // Method to push an element to the stack
  push(item: T): void {
    this.st.push(item);
  }

  // Method to pop an element from the stack
  pop(): T | undefined {
    return this.st.pop();
  }

  // Method to get the top element of the stack
  peek(): T | undefined {
    return this.st[this.st.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty(): boolean {
    return this.st.length === 0;
  }

  // Method to get the size of the stack
  size(): number {
    return this.st.length;
  }
}
