/********************** FIBONACCI **********************/
/*
Given a number of N return the index value of the Fibonacci sequence,
where the sequence is:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

The pattern of the sequence is that each value is the sum of
the 2 previous  values, that means that for N = 5 => 2 + 3 = 5

 */

function fibonacci(n: number): number | null {
    if (n < 0) {
        return null;
    }

    if (n < 2) {
        return n;
    }

    return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibo(n: number): number | null {
    if (n < 0) {
        return null;
    }

    if (n < 2) {
        return n;
    }

    let n1 = 0;
    let n2 = 1;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }

    return n2;
}

function fib(n: number): number | null {
    if (n < 0) {
        return null;
    }

    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[n];
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log('-------------');
console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log('-------------');
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
