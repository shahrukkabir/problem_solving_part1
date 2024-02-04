// Write a function to count the number of vowels in a string.

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const inputString = "Hello, World!";
const numberOfVowels = countVowels(inputString);

console.log(`The number of vowels in "${inputString}" is: ${numberOfVowels}`);
