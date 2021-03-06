/************* OPERATION FUNCTION **********************/
/*
  Example:

  seven(times(five())) => 35;
  four(plus(nine())) => 13;
  eight(minus(three())) => 5;
  six(dividedBy(two())) => 3;
*/

const n = (num: number) => (operation?: ((num: number) => number)) => operation ? operation(num) : num;

const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);

const times = (num: number) => (anotherNum: number) => anotherNum * num;
const plus = (num: number): ((num: number) => number) => (anotherNum: number): number => anotherNum + num;
const minus = (num: number): ((num: number) => number) => (anotherNum: number): number => anotherNum - num;
const dividedBy = (num: number): ((num: number) => number) => (anotherNum: number): number => anotherNum / num;

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
