export class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  calculateInterest(): number {
    const interestRate = 0.05;
    return this.balance * interestRate;
  }
}
