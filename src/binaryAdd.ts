/********************** BINARY ADDITION ****************************/
/*
  Implement a function that adds two numbers together and returns
  their sum in binary.
  The conversion can be done before, or after the addition.

  The binary number returned should be a string.
*/

function binaryAddition(num1: number, num2: number): string {
  return ((num1 + num2) >>> 0).toString(2);
}

function binaryAddition1(num1: number, num2: number): string {
  let decimalSum = num1 + num2;

  if (decimalSum === 0) {
    return '0';
  }

  let binaryRes: string[] = [];
  while (decimalSum > 0) {
    if (decimalSum % 2 === 0) {
      binaryRes.unshift('0');
    } else {
      binaryRes.unshift('1');
    }

    decimalSum = Math.floor(decimalSum / 2);
  }

  return binaryRes.join('');
}

console.log(binaryAddition(10, 2));
console.log(binaryAddition1(10, 2));
console.log(binaryAddition(0, 0));
console.log(binaryAddition1(0, 0));
