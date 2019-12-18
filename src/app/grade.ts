export const rateGrade = (grade: number): string => {
  if (grade >= 8) {
    return "🎉  Well done!";
  }

  if (grade >= 5) {
    return "👍  Keep it up.";
  }

  return "🔥  Try again";
};
