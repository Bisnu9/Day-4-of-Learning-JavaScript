// Write a program to check if a given number is even or odd.


let num = parseInt(prompt("type a number"));

if(isNaN(num)){
    console.log("Invalid input");
}else if (num < 0){
    console.log(num + " invalid")
}else if(num % 2 === 0){
    console.log(num + " is an even number")
}else{
    console.log(num + " is an odd number")
}