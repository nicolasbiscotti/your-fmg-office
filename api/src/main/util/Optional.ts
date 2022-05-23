export default class Optional<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  static empty() {
    return new Optional(null);
  }

  static of<T>(value: T) {
    return new Optional(value);
  }

  isPresent() {
    return this.value !== null;
  }

  get() {
    if (this.value !== null) {
      return this.value;
    }
    throw new Error("No such element");
  }
}
