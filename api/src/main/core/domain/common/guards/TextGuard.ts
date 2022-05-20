import Text from "../../patients/Text";
import BaseGuard from "./BaseGuard";

export default class TextGuard extends BaseGuard<Text> {
  constructor(value: Text) {
    super(value);
  }

  againstNullOrWhitespace(message: string): void {
    this.against(this.value.isNullOrWhiteSpace(), message);
  }

  againtNotLongerThan(message: string): void {
    this.against(this.value.isLongerThanAllowed(), message);
  }
}
