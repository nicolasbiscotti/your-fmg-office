import { Guard } from "../common/Guard";
import ValidationMessages from "../exceptions/ValidationMessages";
import Text from "./value-types/Text";

export default class EntityNumber {
  private value: Text;

  constructor(value: Text) {
    Guard.guard(value).againstNullOrWhitespace(
      ValidationMessages.ACCOUNT_NUMBER_EMPTY
    );
    this.value = value;
  }

  static of(value: string): EntityNumber {
    return new EntityNumber(Text.of(value));
  }

  toString(): string {
    return this.value.value;
  }
}
