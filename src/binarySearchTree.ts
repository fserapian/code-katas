export class BstNode {
    value: any;
    left: BstNode;
    right: BstNode;

    constructor(value: any) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    root: BstNode;

    constructor() {
        this.root = null;
    }

    lookup(value: any): BstNode {
        if (!this.root) {
            return null;
        }

        let currentNode = this.root;

        while (currentNode !== null) {
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }

        return null;
    }

    insert(value: any) {
        const newNode = new BstNode(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (value > currentNode.value) {
                // Go right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            } else {
                // Go left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }
}

function traverse(node: BstNode) {
    const tree: { value: any, left?: any, right?: any } = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

const res = JSON.stringify(traverse(bst.root));
console.log(res);

console.log(bst.lookup(9));
console.log(bst.lookup(6));
console.log(bst.lookup(324));
