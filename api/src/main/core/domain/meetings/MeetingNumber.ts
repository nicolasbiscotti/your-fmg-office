import EntityNumber from "../common/EntityNumber";
import Text from "../common/value-types/Text";

export default class MeetingNumber extends EntityNumber {
  constructor(value: Text) {
    super(value);
  }
}
