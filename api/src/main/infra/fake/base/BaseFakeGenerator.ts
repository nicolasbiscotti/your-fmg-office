import Generator from "../../../core/domain/base/Generator";

export default class BaseFakeGenerator<T> implements Generator<T> {
  private readonly queue: Array<T>;

  constructor() {
    this.queue = new Array();
  }

  next(): T {
    const next = this.queue[0];
    if (next !== undefined) {
      return next;
    }
    throw new Error("Generator does not have next");
  }

  add(values: Array<T>) {
    for (const value of values) {
      this.queue.push(value);
    }
  }
}
