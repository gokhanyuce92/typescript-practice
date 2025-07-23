export class Person1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  display(): void {
    console.log(this.name);
  }
}
