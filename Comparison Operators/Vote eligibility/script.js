// Write a program to determine if a person is eligible to vote based on their age.

let age = parseInt(prompt("Type your age"));

if(isNaN(age) || age <= 0 ){
    console.log("invalid input");
}else if (age >= 18){
    console.log("You are eligible to vote");
}else if(age < 18 || age === 1){
    console.log("You are not eligible to vote")
}