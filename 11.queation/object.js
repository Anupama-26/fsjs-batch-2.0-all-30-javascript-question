/*11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */
// what is the year today?
let year= new Date();
console.log(year.getFullYear());
console.log(year.getMonth());
console.log(year.getDate());
console.log(year.getDay());
console.log(year.getHours());
console.log(year.getMinutes());
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
let getsecond=Date.now()/1000
console.log(getsecond);

