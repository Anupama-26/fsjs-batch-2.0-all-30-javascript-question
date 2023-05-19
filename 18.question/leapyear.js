/*
18. Write a program which tells the number of days in a month, now consider leap year.*/
function numberOFDays(month,year){
    const d=new Date(year,month,0).getDate();
    return d;
}
let storeDays=numberOFDays(2,2024);
console.log(storeDays);//29

if (storeDays===29){
    console.log("leap year");
} else{
    console.log("not leap yaer");
}
