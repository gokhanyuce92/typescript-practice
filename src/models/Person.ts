import { PersonInput } from "../interfaces/PersonInput";

export class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._age = age;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
  public describe(): string {
    return `This is ${this._firstName} ${this._lastName}.`;
  }
  static validate(input: PersonInput): boolean {
    return !!input.firstName && !!input.lastName;
  }
}

// Kodu daha kısa yapmak için TypeScript, hem özellikleri bildirmenize
// hem de bunları kurucuda şu şekilde başlatmanıza olanak tanır:

// export class Person {
//   constructor(
//     private ssn: string,
//     private firstName: string,
//     private lastName: string
//   ) {}

//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
