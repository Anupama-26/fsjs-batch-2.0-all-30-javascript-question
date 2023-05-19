/*17. Write a program which tells the number of days in a month. */
function numberDay(month,year){
    const d= new Date(year, month,0).getDate();
    return d;

}
console.log(numberDay(1,2023));//31
console.log(numberDay(2,2024));//29
