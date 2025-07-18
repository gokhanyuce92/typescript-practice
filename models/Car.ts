export class Car {
  engine: string;
  constructor(engine: string) {
    this.engine = engine;
  }

  disp(): void {
    console.log("Engine: " + this.engine);
  }
}
