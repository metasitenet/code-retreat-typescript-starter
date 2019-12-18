import { rateGrade } from "./grade";

describe("#rateGrade", () => {
  it('should say "Well done" if grade exceeds 8', () => {
    const expected = "Well done";

    expect(rateGrade(8)).toContain(expected);
    expect(rateGrade(7)).not.toContain(expected);
  });

  it('should say "Keep it up" if grade between 5 and 8', () => {
    const expected = "Keep it up";

    expect(rateGrade(5)).toContain(expected);
    expect(rateGrade(4)).not.toContain(expected);
    expect(rateGrade(7)).toContain(expected);
    expect(rateGrade(8)).not.toContain(expected);
  });

  it('should say "Try again" if grade below 5', () => {
    const expected = "Try again";

    expect(rateGrade(5)).not.toContain(expected);
    expect(rateGrade(4)).toContain(expected);
  });
});
