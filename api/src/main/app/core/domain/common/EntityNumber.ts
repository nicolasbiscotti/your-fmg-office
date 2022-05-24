import { Guard } from "../common/Guard";
import ValidationMessages from "../exceptions/ValidationMessages";
import Text from "../patients/Text";


export default class PatientNumber {
  private value: Text;

  constructor(value: Text) {
    Guard.guardText(value).againstNullOrWhitespace(
      ValidationMessages.PATIENT_NUMBER_EMPTY
    );
    this.value = value;
  }

  static of(value: string): PatientNumber {
    return new PatientNumber(Text.of(value));
  }

  toString(): string {
    return this.value.getValue();
  }
}
