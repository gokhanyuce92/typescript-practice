import { Duck } from "../interfaces/Duck";

export class RubberDuck implements Duck {
  quack(): void {
    console.log("Squeak! Squeak!");
  }
}
