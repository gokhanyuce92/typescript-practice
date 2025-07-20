export class Temperature {
  private celsius: number;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  get fahrenheit(): number {
    return (this.celsius * 9) / 5 + 32;
  }

  set celsiusValue(value: number) {
    this.celsius = value;
  }
}
