import { Duck } from "../interfaces/Duck";

export class MallardDuck implements Duck {
  quack(): void {
    console.log("Quack! Quack!");
  }
}
