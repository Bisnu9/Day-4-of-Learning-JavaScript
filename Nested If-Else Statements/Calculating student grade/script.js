// Write a program to determine a student's grade based on
//  their percentage.

let score = parseInt(prompt("Type your percentage"));

if(isNaN(score)){
    console.log("Invalid user input")
}else if(score > 100){
    console.log("Not a valid input. Please try again")
}else if(score >= 90 && score <= 100){
    console.log("Grade A")
 } else if(score >=80 && score <= 89){
    console.log("Grade B")
 } else if(score >= 60 && score <=79){
    console.log("Grade C")
 } else if(score >= 35 && score <= 59){
    console.log("Grade E")
 } else if(grade >= 1 && score < 35){
    console.log("Grade F")
 }
     
 
 