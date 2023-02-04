"use strict";
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    show() {
        return this.data;
    }
    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                const item = currentBucket[i];
                if (item[0] === key) {
                    return item[1];
                }
            }
        }
        return undefined;
    }
}
const myHashTable = new HashTable(2);
myHashTable.set('grapes', 1000);
myHashTable.set('fruit', 2000);
myHashTable.set('banana', 3000);
console.log(myHashTable.get('grapes')); // 1000
