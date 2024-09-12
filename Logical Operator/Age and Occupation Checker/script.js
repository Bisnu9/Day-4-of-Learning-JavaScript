let age = parseInt(prompt("Type your age"));
let occupation = prompt("Are you a working now?");

if(age < 18){
    console.log("You are a student")
}else if(age >= 18 && occupation.toLowerCase() === "no"){
   console.log("You are a student.")
}else if( age >= 18 && occupation.toLowerCase() === "yes"){
    console.log("You are an employee");
}else{
    console.log("unable to clasify.")
}