import Generator from "../../../core/domain/base/Generator";
import FakeException from "../exceptions/FakeException";
import FakeMessages from "../exceptions/FakeMessages";

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
    throw new FakeException(FakeMessages.GENERATOR_DOES_NOT_HAVE_NEXT);
  }

  add(values: Array<T>) {
    for (const value of values) {
      this.queue.push(value);
    }
  }
}
