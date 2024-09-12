let userInput = prompt("Type a word");

function palindrome(){
let letters = userInput.toLowerCase();
let input = letters.split('').reverse().join(''); 

if(letters == input){
    console.log("It is a palindrome");
}else{
    console.log("It is not a palindrome");
}
return input;
}

palindrome();