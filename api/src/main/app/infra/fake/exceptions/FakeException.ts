export default class FakeException extends Error {
  constructor(message: string) {
    super(message);
  }
}

function FakeFuntionalException(message: string) {
  return new Error();
}
