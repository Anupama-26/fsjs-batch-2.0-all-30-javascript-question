/*13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another  */
function myFunction(){
    var age= prompt("enter your age");
    if(age>=18){
        alert("you are old enough to drive");

    } else{
        alert   ("wait till you're 18");
    }
}