class ANode {
    data: any;
    next: ANode;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    private top: ANode;
    private bottom: ANode;
    private length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(): ANode {
        return this.top;
    }

    push(value: any): void {
        const newNode = new ANode(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    }

    getStack(): Stack {
        return this;
    }

    getStackData(): any[] {
        const arr = [];
        let currentNode: ANode = this.top;
        while (currentNode !== null) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return arr;
    }

    pop(): void {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        holdingPointer.next = null;
        this.length--;
    }
}

const myStack = new Stack();

myStack.push('Fadi');
myStack.push('Adam');
myStack.push('Sally');
myStack.push('Bob');

myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack.getStack());
console.log(myStack.getStackData());

console.log(myStack.peek());
