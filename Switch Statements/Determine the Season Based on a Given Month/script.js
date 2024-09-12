let month = prompt("Type a month");

switch(month) {
    case "december":
    case "january":
    case "february":
        console.log("winter")
        break;
    case "march":
    case "april":
    case "may":
        console.log("Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("Summer")
        break;
    case "september":
    case "october":
    case "november":
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month")
}