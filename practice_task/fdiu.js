const str =  "I am learning Programming to become a programmer";
const words = str.split(' ');
        let longestWord = '';
        for (let word of words) {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }
       
        console.log(words);