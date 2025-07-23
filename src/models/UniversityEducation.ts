import { Education } from "../abstract/Education";

export class UniversityEducation extends Education {
  constructor(
    institution: string,
    field: string,
    startYear: number,
    endYear: number,
    private degree: string
  ) {
    super(institution, field, startYear, endYear);
  }

  getDegree(): string {
    return this.degree;
  }
}
