/*************** FIRST RECURRING CHARACTER ***************/
/*
    Ex: input = [4, 3, 3, 5, 4, 8]
    firstRepeatedInArray(input) = 3

    because 3 has the smallest distance between.
*/

function firstRepeatedInArray(arr: number[]): number | undefined {
    let map: { [k: string]: boolean } = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (map[num]) {
            return num;
        }

        map[num] = true;
    }

    return undefined;
}

const arr = [4, 3, 3, 5, 4, 8];

console.log(firstRepeatedInArray(arr)); // 3
