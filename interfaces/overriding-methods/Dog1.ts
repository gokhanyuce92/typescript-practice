import { Animal } from "./Animal";

interface Dog1 extends Animal {
  makeSound: () => void;
}

export { Dog1 };
