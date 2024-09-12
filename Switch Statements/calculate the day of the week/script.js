// Write a program to calculate the day of the week based on a given number (1-7).

let day = parseInt(prompt("type a number 1-7"));

switch(day){
    case 1:
        console.log("It is MOnday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
            break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(day + " is not a day number")
}