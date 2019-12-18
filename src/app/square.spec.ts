import { Square } from "./square";

describe("#Square", () => {
  const size = 3;
  const area = 9;
  const perimeter = 16;

  const square = new Square(size);

  it("should calculate area correctly", () => {
    expect(square.area).toBe(area);
  });

  it("should calculate perimeter correctly", () => {
    expect(square.perimeter).toBe(perimeter);
  });
});
