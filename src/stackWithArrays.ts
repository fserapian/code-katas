class StackArray {
    arr: any[];
    constructor() {
        this.arr = []
    }

    push(value: any): void {
        this.arr.push(value);
    }

    pop(): void {
        this.arr.pop();
    }

    peek(): StackArray {
        return this.arr[this.arr.length - 1];
    }

    getStackData(): any[] {
        return this.arr;
    }
}

const s = new StackArray();
s.push('Fadi');
s.push('Adam');
s.push('Bob');
s.push('Sally');

s.pop();

console.log(s.peek());

console.log(s.getStackData());
