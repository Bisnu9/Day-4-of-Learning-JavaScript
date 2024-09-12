// Create a function that takes three numbers as input and returns the 
// argest number using only conditional operators and arithmetic 
// operations.

let num1 = parseInt(prompt("Type your first number"));
let num2 = parseInt(prompt("Type your second number"));
let num3 = parseInt(prompt("Type your third number"));

if(num1 >= num2 && num1 >= num3){
    console.log(num1 + " is the largest number")
}else if(num2 >= num1 && num2 >= num3){
    console.log(num2 +" is largest number")
}else{
    console.log(num3 +" is the largest number");
}
