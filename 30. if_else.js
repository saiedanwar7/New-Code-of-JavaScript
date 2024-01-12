//======================= JavaScript if, else, and else if ==================

/*
--------------------- Conditional Statements ---------------------

In JavaScript we have the following conditional statements:

    -   Use if to specify a block of code to be executed, if a specified condition is true
    -   Use else to specify a block of code to be executed, if the same condition is false
    -   Use else if to specify a new condition to test, if the first condition is false
    -   Use switch to specify many alternative blocks of code to be executed

*/


/*
-------------------- The if Statement ------------------------

    -   Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

    Syntax:
            if (condition) {
            //  block of code to be executed if the condition is true
            }

    Note:  that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
*/



/*
-------------------- The else Statement -----------------------

    -   Use the else statement to specify a block of code to be executed if the condition is false.


    if (condition) {
            //  block of code to be executed if the condition is true
            } else {
            //  block of code to be executed if the condition is false
            }
*/



/*
--------------------- The else if Statement ---------------------

    -   Use the else if statement to specify a new condition if the first condition is false.

Syntax :
------
            if (condition1) {
                //  block of code to be executed if condition1 is true

                } else if (condition2) {
                //  block of code to be executed if the condition1 is false and condition2 is true
                } 
                
                else {
                //  block of code to be executed if the condition1 is false and condition2 is false
                }

*/

let age = 24;

if(age < 18){
    console.log("You are young!");
} else if( age == 18){
    console.log("Welcome Adult");
}else if(age > 18 && age < 30){
    console.log("You are matured!");
}else{
    console.log("You are old!");
}


