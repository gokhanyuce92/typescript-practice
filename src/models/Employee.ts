import { Json } from "../interfaces/Json";
import { Person } from "./Person";

export class Employee extends Person implements Json {
  static headcount: number = 0; // Static propertie

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    private jobTitle: string
  ) {
    super(firstName, lastName, age);

    Employee.headcount++;
  }

  toJson(): string {
    return JSON.stringify(this);
  }

  public describe(): string {
    return super.describe() + ` I'm a ${this.jobTitle}.`;
  }

  // Static method
  public static getHeadcount() {
    return Employee.headcount;
  }
}
