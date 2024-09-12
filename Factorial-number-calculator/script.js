// Implement a program that calculates the factorial of a 
// given number using a loop and the multiplication operator.

let input = parseInt(prompt("type a number"));
let factorial = 1;

for (i = 1; i <= input; i++){
    factorial = factorial * i;
}
console.log("The factorial number of "+ input + " is " + factorial);
