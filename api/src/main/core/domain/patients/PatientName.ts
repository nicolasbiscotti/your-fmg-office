import { Guard } from "../common/Guard";
import ValidationMessages from "../errors/ValidationMessages";
import Text from "./Text";

export default class PatientName {
  private firstName: Text;
  private lastName: Text;

  constructor(firstName: Text, lastName: Text) {
    Guard.guard(firstName).againstNullOrWhitespace(
      ValidationMessages.FIRST_NAME_EMPTY
    );
    Guard.guard(lastName).againstNullOrWhitespace(
      ValidationMessages.LAST_NAME_EMPTY
    );
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static of(firstName: string, lastName: string): PatientName {
    return new PatientName(Text.of(firstName), Text.of(lastName));
  }

  getFullName(): Text {
    return this.firstName.addSpace().add(this.lastName);
  }

  toString(): string {
    return this.getFullName().value;
  }
}
