export default class Optional<T> {
  private value: T;
  private isEmpty: boolean;

  constructor(value: T, isEmpty: boolean) {
    this.isEmpty = isEmpty;
    this.value = value;
  }

  static empty<T>(): Optional<T> {
    return new Optional(Object.create(null), true);
  }

  static of<T>(value: T): Optional<T> {
    return new Optional(value, false);
  }

  isPresent(): boolean {
    return !this.isEmpty;
  }

  get(): T {
    if (this.isPresent()) {
      return this.value;
    }
    throw new Error("No such element");
  }
}
