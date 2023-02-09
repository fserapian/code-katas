/***************** TITLE CASE *****************/
/*
    For sentence = 'This is good!'
    titleCase(sentence) = 'This Is Good!'
    Every word is title case in the sentence
 */

function titleCase(sentence: string): string {
    const wordsArr = sentence.toLowerCase().split(' ');
    const res = wordsArr.map((word: string) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    return res.join(' ');
}

const titleCase1 = (str: string): string =>
    str.toLowerCase().split(' ').map((word: string) => word[0].toUpperCase() + word.slice(1)).join(' ');

const sentence = 'This is good!';
console.log(titleCase(sentence));
console.log(titleCase1(sentence));
