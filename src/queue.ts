class QNode {
    value: any;
    next: QNode;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: QNode;
    last: QNode;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value: any) {
        const newNode = new QNode(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue(): void {
        if (!this.first) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        const holdingPointer = this.first;
        this.first = this.first.next;
        holdingPointer.next = null;

        this.length--;
    }

    getQueueData(): any[] {
        const arr = [];
        let currentNode = this.first;

        let order = 0;
        while (currentNode !== null) {
            order++;
            arr.push({ value: currentNode.value, order });
            currentNode = currentNode.next;
        }

        return arr;
    }
}

const q = new Queue();
q.enqueue('Joy');
q.enqueue('Matt');
q.enqueue('Fadi');

q.dequeue();
q.dequeue();

console.log(q.getQueueData());
console.log(q);

console.log(q.peek());
