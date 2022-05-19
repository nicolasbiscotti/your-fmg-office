import Text from "../patients/Text";
import TextGuard from "./guards/TextGuard";

export class Guard {
  static guard(value: Text): TextGuard {
    return new TextGuard(value);
  }
}
