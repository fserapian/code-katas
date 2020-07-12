"use strict";
/**************** MUMBLING ************************/
/*
  Example:
    mumbling('abc') => 'A-Bb-Ccc'
    mumbling('RqFfEzty') => 'R-Qq-Fff-Ffff-Eeeee-Zzzzzz-Ttttttt-Yyyyyyyy'
*/
function mumbling(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j === 0) {
                res += str[i].toUpperCase();
                // } else if (j === i && i !== str.length - 1) {
                //   res += '-';
            }
            else {
                res += str[i].toLowerCase();
            }
        }
        if (i !== str.length - 1) {
            res += '-';
        }
    }
    return res;
}
function mumbling1(str) {
    return str.split('').reduce((result, letter, index) => {
        for (let j = 0; j < index + 1; j++) {
            if (j === 0) {
                result += letter.toUpperCase();
            }
            else {
                result += letter.toLocaleLowerCase();
            }
        }
        if (index !== str.length - 1) {
            result += '-';
        }
        return result;
    }, '');
}
function mumbling2(str) {
    return str.split('').map((letter, index) => letter.toUpperCase() + letter.repeat(index).toLowerCase()).join('-');
}
console.log(mumbling('abc'));
console.log(mumbling('RqaEzty'));
console.log(mumbling('RqFfEzty'));
console.log(mumbling1('abc'));
console.log(mumbling1('RqaEzty'));
console.log(mumbling1('RqFfEzty'));
console.log(mumbling2('abc'));
