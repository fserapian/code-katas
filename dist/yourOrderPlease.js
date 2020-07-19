"use strict";
/****************** YOUR ORDER PLEASE *********************/
/*
  Your task is to sort a given string. Each word in the string will contain
  a single number. This number is the position the word should have in the result.

  Note: numbers can be from 1 to 9. So 1 will be the first word (not 0).

  If the input string is empty, return an empty string. The words in the input
  string will only contain valid consecutive numbers.

  For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/
function order(words) {
    const wordsArr = words.split(' ');
    const sorted = [];
    if (words === '') {
        return '';
    }
    for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        const index = +word.match(/\d/)[0];
        sorted[index - 1] = word;
    }
    return sorted.join(' ');
}
console.log(order('is2 Thi1s T4est 3a'));
console.log(order(''));
