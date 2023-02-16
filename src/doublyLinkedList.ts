class LinkNode {
    value: number;
    prev: LinkNode;
    next: LinkNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    private head: LinkNode;
    private tail: LinkNode;
    private length: number;

    constructor(value: number) {
        this.head = new LinkNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    public getLength() {
        return this.length;
    }

    public getList(): number[] {
        const arr: number[] = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }

    public append(value: number): void {
        const newNode = new LinkNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    public prepend(value: number): void {
        const newNode = new LinkNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    public insert(index: number, value: number): void {
        const newNode = new LinkNode(value);
        const leader = this.traverseLinkedList(index - 1);
        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
    }

    public remove(index: number): void {
        const leader = this.traverseLinkedList(index - 1);
        const nodeToRemove = leader.next;
        const nextNode = nodeToRemove.next;

        leader.next = nextNode;
        nextNode.prev = leader;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        this.length--;
    }

    private traverseLinkedList(index: number): LinkNode {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }
} 

const ll = new DoublyLinkedList(10);

ll.append(20);
ll.append(30);
ll.prepend(5);
ll.insert(2, 123);
// ll.remove(3);
console.log(ll.getList());
