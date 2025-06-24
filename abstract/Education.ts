export abstract class Education {
  constructor(
    public institution: string,
    public field: string,
    public startYear: number,
    public endYear: number
  ) {}

  abstract getDegree(): string;

  getDuration(): number {
    return this.endYear - this.startYear;
  }
}
