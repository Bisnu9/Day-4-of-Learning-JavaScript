// Check if a number is within a specific range (e.g., between 1 and 100).

    let num = parseInt(prompt("Type a number"))

    if(num>=1 && num<=100){
        console.log("The number " + num +" is in the range of 1 to 100");
    }else if(num>100 || num < 1){
        console.log("The number " + num + " is not in the range of 1 to 100")
    }
