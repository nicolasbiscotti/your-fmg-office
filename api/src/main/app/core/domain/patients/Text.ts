export default class Text {
  private value: string;

  private static readonly SPACE: Text = Text.of(" ");

  constructor(value: string) {
    this.value = value;
  }

  static of(value: string): Text {
    return new Text(value);
  }

  isNullOrWhiteSpace(): boolean {
    return this.value === null || this.value.trim() === "";
  }

  isLongerThanAllowed(): boolean {
    return this.value.length > 23;
  }

  add(other: Text): Text {
    return Text.of(this.value.concat(other.value));
  }

  addSpace(): Text {
    return this.add(Text.SPACE);
  }

  getLength(): number {
    return this.value.length;
  }

  getValue(): string {
    return this.value;
  }
}
