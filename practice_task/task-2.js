/* 
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98,5]
find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98,5]
find: 25
output: 0
*/

let numbers = [5,6,11,12,98,5] ;
let count = 0 ;
let found = 25 ;
for(const number of numbers){
    if(number === found){
        count++;
    }
}
console.log(`Output : ${count}`) ;