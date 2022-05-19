export default interface Generator<T> {
  next: () => T;
}
