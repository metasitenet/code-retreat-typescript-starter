export class Square {
  constructor(private size: number) {}

  get area() {
    return this.size * this.size;
  }

  get perimeter() {
    return this.size * 4;
  }
}
