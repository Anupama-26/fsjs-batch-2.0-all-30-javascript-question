/*16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */
const monthName = [
    "january", "february", "march", "april", "may", "june", "july",
    "august", "september", "october", "november", "december"
];
const d = new Date();
const getMonth = d.getMonth();
const month = monthName[getMonth];
switch (month) {
    case "january":
        console.log("winter");
        break;
    case "february":
        console.log("winter");
        break;
    case "march":
        console.log("spring");
        break;

    case "april":
        console.log("spring");
        break;

    case "may":
        console.log("summer");
        break;
    case "june":
        console.log("summer");
        break;
    case "july":
        console.log("summer");
        break;
    case "August":
        console.log("summer");
        break;
    case "september":
        console.log("Autmn");
        break;
    case "october":
        console.log("Autmn");
        break;
    case "november":
        console.log("Autmn");
        break;
    case "decemer":
        console.log("winter");
        break;

    default:
        console.log("not exist");

}
