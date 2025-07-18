import { ILoan } from "../interfaces/ILoan";

export class AgriLoan implements ILoan {
  interest: number;
  rebate: number;

  constructor(interest: number, rebate: number) {
    this.interest = interest;
    this.rebate = rebate;
  }
}
