import { Square } from "./square";

describe("#Square", () => {
  const size = 3;
  const area = size * size;
  const perimeter = size * 4;

  const square = new Square(size);

  it("should calculate area correctly", () => {
    expect(square.area()).toBe(area);
  });

  it("should calculate perimeter correctly", () => {
    expect(square.perimeter()).toBe(perimeter);
  });
});
