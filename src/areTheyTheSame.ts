/*********************** ARE THEY THE SAME *********************/
/*
  Check wether two arrays have the same elements, with the same multiplicities.

  "Same" means, here, that the elements of `b` are the elements in `a` squared.
  regardless of the order.

  Example:
    const a = [11, 5, 9, 20, 9];
    const b = [25, 400, 81, 121, 82];

    comp(a, b) = false

    const a = [11, 5, 9, 20, 9];
    const b = [25, 400, 81, 121, 81];

    comp(a, b) = true
*/

function comp(a: number[], b: number[]): boolean {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  const sortNums = (x: number, y: number) => x - y;
  const sortedA: number[] = a.sort(sortNums);
  const sortedB: number[] = b.sort(sortNums);

  const squaredA: number[] = sortedA.map(num => num * num);

  for (let i = 0; i < squaredA.length; i++) {
    if (squaredA[i] !== sortedB[i]) {
      return false;
    }
  }

  return true;
}

function comp1(a: number[], b: number[]): boolean {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  const sumSquare1 = a.reduce((acc, num) => acc + (num * num), 0);
  const sum2 = b.reduce((acc, num) => acc + num, 0);

  return sumSquare1 === sum2;
}

function comp2(a: number[], b: number[]): boolean {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  const squaredObj = b.reduce((squaredObj: { [key: number]: number }, num: number) => {
    if (squaredObj[num]) {
      squaredObj[num]++;
    } else {
      squaredObj[num] = 1;
    }
    return squaredObj;
  }, {});

  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    const valueSqr = value * value;

    if (!squaredObj[valueSqr]) {
      return false;
    } else {
      squaredObj[valueSqr]--;
    }
  }

  return true;
}


const a = [88, 34, 66, 35, 7, 28, 83, 47];
const b = [7744, 1156, 4356, 1225, 49, 784, 6889, 2209];
console.log(comp(a, b));
console.log(comp1(a, b));
console.log(comp2(a, b));
