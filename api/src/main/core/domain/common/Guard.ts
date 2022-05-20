import Date from "../patients/Date";
import Text from "../patients/Text";
import DateGuard from "./guards/DateGuard";
import TextGuard from "./guards/TextGuard";

export class Guard {
  static guardText(value: Text): TextGuard {
    return new TextGuard(value);
  }
  static guardDate(value: Date): DateGuard {
    return new DateGuard(value);
  }
}
