// Implement a function that takes a string as input and returns "Palindrome" 
// if the string is a palindrome, otherwise returns "Not a Palindrome." 
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.  

let userInput = prompt("Type a word");
let letters = userInput.toLowerCase();
let input = letters.split('').reverse().join(''); 

if(letters == input){
    console.log("It is a palindrome");
}else{
    console.log("It is not a palindrome");
}
