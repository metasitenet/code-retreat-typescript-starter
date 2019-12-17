export class Square {
  constructor(private size: number) {}

  area() {
    return this.size * this.size;
  }

  perimeter() {
    return this.size * 4;
  }
}
