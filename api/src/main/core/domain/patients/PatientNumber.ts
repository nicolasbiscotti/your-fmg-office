import { Guard } from "../common/Guard";
import ValidationMessages from "../errors/ValidationMessages";
import Text from "./Text";

export default class PatientNumber {
  private value: Text;

  constructor(value: Text) {
    Guard.guard(value).againstNullOrWhitespace(
      ValidationMessages.ACCOUNT_NUMBER_EMPTY
    );
    this.value = value;
  }

  static of(value: string): PatientNumber {
    return new PatientNumber(Text.of(value));
  }

  toString(): string {
    return this.value.value;
  }
}
