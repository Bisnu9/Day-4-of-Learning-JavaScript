// Write a function that takes a string as input 
// and counts the number of vowels (a, e, i, o, u) 
// in the string using conditional operators and string methods.

let input = prompt("type a word");
const vowel = /[aeiou]/gi;
let count = input.match(vowel);
console.log(count.length);