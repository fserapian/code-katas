class LinkingNode {
    value: number;
    next: LinkingNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private head: LinkingNode;
    private tail: LinkingNode;
    private length: number;

    constructor(value: number) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    public getLength(): number {
        return this.length;
    }

    public getList(): number[] {
        const arr: number[] = [];
        let currentNode: LinkingNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }

    public append(value: number): void {
        const newNode = new LinkingNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    public prepend(value: number): void {
        const newNode = new LinkingNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    public insert(index: number, value: number): void {
        const leader = this.traverseLinkedList(index - 1);
        const holdingPointer = leader.next;
        const newNode = new LinkingNode(value);

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }

    public remove(index: number): void {
        const leader = this.traverseLinkedList(index - 1);
        const nodeToRemove = leader.next;

        leader.next = nodeToRemove.next;
        nodeToRemove.next = null;
        this.length--;
    }

    private traverseLinkedList(index: number): LinkingNode {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(2, 123)
myLinkedList.remove(2);
console.log(myLinkedList.getList());
