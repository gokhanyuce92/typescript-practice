export class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get getName(): string {
    return this.name;
  }
}
