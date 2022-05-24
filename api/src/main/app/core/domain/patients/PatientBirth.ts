import { Guard } from "../common/Guard";
import ValidationMessages from "../exceptions/ValidationMessages";
import Date from "./Date";

export default class PatientBirth {
  private dateOfBirth: Date;

  constructor(dateOfBirth: Date) {
    Guard.guardDate(dateOfBirth).againstInvalidDate(
      ValidationMessages.DATE_IS_NOT_VALID
    );
    this.dateOfBirth = dateOfBirth;
  }

  static of(dateOfBirth: string): PatientBirth {
    return new PatientBirth(Date.of(dateOfBirth));
  }

  getDate(): Date {
    return this.dateOfBirth;
  }

  getYear(): string {
    return this.dateOfBirth.getValue().split("-")[0];
  }

  getMonth(): string {
    return this.dateOfBirth.getValue().split("-")[1];
  }

  getDay(): string {
    return this.dateOfBirth.getValue().split("-")[2];
  }

  toString(): string {
    return this.dateOfBirth.getValue();
  }
}
