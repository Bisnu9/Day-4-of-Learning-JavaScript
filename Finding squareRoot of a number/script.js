// Write a function that takes a number as input and returns the 
// square root of the number if it's positive, otherwise returns 
// "Invalid input."

let userInput = parseInt(prompt("Type a positive number"));
if(isNaN(userInput) || userInput <= 0){
   console.log("invalid")
}else if(!isNaN(userInput)){
       let input = Math.sqrt(userInput);
       console.log(input);
}


