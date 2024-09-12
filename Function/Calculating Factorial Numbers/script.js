// Write a function to calculate the factorial of a number


let input = parseInt(prompt("type a number"));

function myFunction(){
    let factorial = 1;

    for (i = 1; i <= input; i++){
    factorial = factorial * i;
}
    return factorial;
}
let result = myFunction(input);
console.log("Factorial of " + input + " is " + result);