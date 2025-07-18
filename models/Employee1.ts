import { Person1 } from "./Person1";

export class Employee1 extends Person1 {
  empCode: number;
  constructor(name: string, code: number) {
    super(name);
    this.empCode = code;
  }
  show(): void {
    super.display();
  }
}
