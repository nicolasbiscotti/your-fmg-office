import ValidationError from "../../errors/ValidationError";

export default class BaseGuard<T> {
  protected value: T;

  constructor(value: T) {
    this.value = value;
  }

  protected against(test: boolean, message: string): void {
    if (test) {
      throw new ValidationError(message);
    }
  }
}
