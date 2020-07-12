/**************** FINAL GRADE ***************************/
/*
  So the grade would be:
    100, if note of exam is 90 or number of projects made is more than 10.
    90, if note of exam is 75 and if student has minimum 5 projects.
    75, if not of exam is 50 and if student has minimum 2 projects.
    0, otherwise.

    Example:
      finalGrade1(100, 12) => 100;
      finalGrade1(85, 5) => 90;
*/

function finalGrade(exam: number, projects: number): number {
  if (exam > 90 || projects > 10) {
    return 100;
  }

  if (exam > 75 && projects >= 5) {
    return 90;
  }

  if (exam > 50 && projects >= 2) {
    return 75;
  }

  return 0;
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);

const finalGrade1 = (exam: number, projects: number): number => {
  return (exam > 90 || projects > 10) ? 100 : ((exam > 75 && projects >= 5) ? 90 : ((exam > 50 && projects >= 2) ? 75 : 0));
};

console.log(finalGrade1(100, 12), 100);
console.log(finalGrade1(85, 5), 90);
console.log(finalGrade1(99, 0), 100);
console.log(finalGrade1(10, 15), 100);
