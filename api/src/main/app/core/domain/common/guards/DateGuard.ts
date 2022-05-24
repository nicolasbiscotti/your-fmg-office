import Date from "../../patients/Date";
import BaseGuard from "./BaseGuard";

export default class DateGuard extends BaseGuard<Date> {
  constructor(value: Date) {
    super(value);
  }

  againstInvalidDate(message: string): void {
    this.against(this.value.isNotValid(), message);
  }
}
