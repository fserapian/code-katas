"use strict";
/***************************** NEW NUMERAL SYSTEM ****************************/
/*
    Your informatics teacher at school likes coming up with new way to help you
    understand the material. When you started studying numeral systems,
    he introduced his own numeral system, which he's convinced will clarify things.
    His numeral system as base 26, and its digits are represented by English capital
    letters: A for 0, B for 1, and so on.

    The teacher assigned you the following numeral system exercise:
    Given a one-digit number, you should find all unordered pairs of one-digit numbers
    whose values add up to the number.

    Example:
        For number = 'G', newNumeralSystem(number) = ['A + G', 'B + F', 'C + E', 'D + D'].

        Translating this into the decimal numeral system we get:
        number = 6, so it is ['0 + 6', '1 + 5', '2 + 4', '3 + 3']
 */
function newNumeralSystem(number) {
    let startNum = 65;
    let endNum = number.charCodeAt(0);
    const res = [];
    while (startNum <= endNum) {
        res.push(`${String.fromCharCode(startNum)} + ${String.fromCharCode(endNum)}`);
        startNum++;
        endNum--;
    }
    return res;
}
console.log(newNumeralSystem('G'));
