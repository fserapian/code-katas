class HashTable {
    private readonly data: any[];
    constructor(size: number) {
        this.data = new Array(size);
    }

    private _hash(key: any) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    public set(key: any, value: any): any[] {
        const address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);

        return this.data;
    }

    public show() {
        return this.data;
    }

    public get(key: any) {
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

    public keys() {
        if (!this.data.length) {
            return undefined;
        }
        let result = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0]);
                    }
                } else {
                    result.push(this.data[i][0]);
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 1000);
myHashTable.set('fruit', 2000);
myHashTable.set('banana', 3000);

console.log(myHashTable.get('grapes')); // 1000

console.log(myHashTable.keys());
