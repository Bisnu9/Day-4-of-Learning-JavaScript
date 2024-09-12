// Write a program to determine if a given year is a leap year.

let year = parseInt(prompt("Type a year"));

if(isNaN(year)){
    console.log("invalid user input")
}else if(year % 400 === 0){
    console.log(year + " is a leap year");
}else if(year % 100 === 0){
    console.log("is not a leap year");
}else if (year % 4 === 0){
    console.log(year + " is a leap year");
}else{
    console.log(year + " is not a leap year")
}