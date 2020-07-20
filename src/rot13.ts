/********************* ROT13 **********************/
/*
  ROT13 is a simple letter substitution cipher that replaces a letter
  with the letter 13 letters after it in the alphabet.
  ROT13 is an example of the Ceasar cipher .

  Create a function that takes a string and returns the string ciphered
  with ROT13.
  If there are numbers or special characters included in the string,
  they should be returned as they are. Only letters from the latin/english
  alphabet should be shifted, like in the ROT13 "implementation".

  Example:
    For message = 'Test', rot13(message) = 'Grfg'
*/

/*
  ASCII Code
  A - Z (65 - 90)
  a - z (97 - 122)
*/

function rot13(message: string): string {
  let encoded = '';

  for (let i = 0; i < message.length; i++) {
    let letter = message[i];
    let charCode = letter.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      let newCharCode = charCode + 13;

      if (newCharCode > 90) {
        newCharCode = 64 + (newCharCode - 90);
      }
      encoded += String.fromCharCode(newCharCode);

    } else if (charCode >= 97 && charCode <= 122) {
      let newCharCode = charCode + 13;

      if (newCharCode > 122) {
        newCharCode = 96 + (newCharCode - 122);
      }

      encoded += String.fromCharCode(newCharCode);
    } else {
      encoded += letter;
    }
  }
  return encoded;
}

console.log(rot13('test'));
console.log(rot13('Test'));
