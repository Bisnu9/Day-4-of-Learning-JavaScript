// Implement a program that checks if a given number is a perfect 
// square. A perfect square is a number that is the product of two 
// equal integers.

let input = parseInt(prompt("type a number"));

let sRoot = Math.sqrt(input);

if (input < 0){
    console.log("It is not a perfect square");
} else if (Number.isInteger(sRoot)){
    console.log(input +" is a perfect square");
}else{
    console.log("it is not a perfect square");
}
