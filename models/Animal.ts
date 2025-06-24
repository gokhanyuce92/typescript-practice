export class Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
