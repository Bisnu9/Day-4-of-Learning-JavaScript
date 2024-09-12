// Write a program to check if a person is overweight based on their BMI.

let weight = parseInt(prompt("Enter your weight in kg"))
let height = parseInt(prompt("Enter your height in cm"))

let bmi = weight / ((height * height) 
/ 10000);

if(bmi<18.5){
     console.log("under weight")
}else if(bmi<25){
    console.log("Normal weight")
 }else if(bmi<30){
    console.log("over weight")
 }else if(bmi>30){
    console.log("obese")
}

