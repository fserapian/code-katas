/*********************** FACTORIAL ***********************/
/*
Ex: Factorial of 4 is:
4! = 4 * 3 * 2 * 1 = 24

 */

function factorial(n: number): number {
    let f = 1;

    for (let i = 2; i <= n; i++) {
        f *= i;
    }

    return f;
}

function f(n: number): number {
    if (n < 2) {
        return 1;
    }

    return n * f(n - 1);
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));

console.log(f(4));
console.log(f(5));
console.log(f(0));
