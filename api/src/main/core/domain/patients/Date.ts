export default class Date {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  static of(value: string): Date {
    return new Date(value);
  }
  // Date format yyyy-mm-dd
  isValid(): boolean {
    const components = this.value.split("-");
    return (
      components.length === 3 &&
      this.validYear(components[0]) &&
      this.validMonth(components[1]) &&
      this.validDay(components[2])
    );
  }

  getValue(): string {
    return this.value;
  }

  private validYear(year: string): boolean {
    return (
      this.digitsAreCorrect(year, 4) &&
      this.isBetween(1912, 2010, parseInt(year))
    );
  }
  private validMonth(month: string): boolean {
    return (
      this.digitsAreCorrect(month, 2) && this.isBetween(1, 12, parseInt(month))
    );
  }
  private validDay(day: string): boolean {
    return (
      this.digitsAreCorrect(day, 2) && this.isBetween(1, 31, parseInt(day))
    );
  }

  private digitsAreCorrect(str: string, digits: number): boolean {
    return str.length === digits;
  }
  private isBetween(min: number, max: number, number: number): boolean {
    return number >= min && number <= max;
  }
}
