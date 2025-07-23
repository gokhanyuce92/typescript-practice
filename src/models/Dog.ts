import { Animal } from "./Animal";

export class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}
