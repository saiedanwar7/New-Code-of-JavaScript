/*================= JavaScript Switch Statement ====================

    -   The switch statement is used to perform different actions based on different conditions.
    -   Use the switch statement to select one of many code blocks to be executed.

    switch(expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
        }



        This is how it works :

        -   The switch expression is evaluated once.
        -   The value of the expression is compared with the values of each case.
        -   If there is a match, the associated block of code is executed.
        -   If there is no match, the default code block is executed.


        Switching Details :

        -   If multiple cases matches a case value, the first case is selected
        -   If no matching cases are found, the program continues to the default label
        -   If no default label is found, the program continues to the statement(s) after the switch
*/

let day;

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    
    case 1:
      day = "Monday";
      break;
    
    case 2:
       day = "Tuesday";
      break;
    
    case 3:
      day = "Wednesday";
      break;
    
    case 4:
      day = "Thursday";
      break;
    
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}

console.log("Today is", day);

/*
--------------- The break Keyword ---------------

    -   When JavaScript reaches a break keyword, it breaks out of the switch block.
    -   This will stop the execution inside the switch block.
    -   It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Note: If you omit the break statement, the next case will be executed even if the evaluation does 

*/



/*
    --------------- The default Keyword -----------

    -   The default keyword specifies the code to run if there is no case match

*/

/*

    -   The getDay() method returns the weekday as a number between 0 and 6.

    -   If today is neither Saturday (6) nor Sunday (0), write a default message
    -   jodi kono case right na hoy tahole default ta kaj kore
    -   default ke first ba last je kono jaigai use korte pari
    -   If default is not the last case in the switch block, remember to end the default case with a break.

*/

let text;

switch(new Date().getDay()){

    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    
    default:
        text = "Looking forward to the weekend";

}   

console.log(text);  // 'Looking forward to the weekend'


/* --------------- default in First line ---------------
    
    -   If default is not the last case in the switch block, remember to end the default case with a break


*/

let text1;

switch (new Date().getDay()) {
    default:
      text1 = "Looking forward to the Weekend";
      break;
    case 6:
      text1 = "Today is Saturday";
      break;
    case 0:
      text1 = "Today is Sunday";
  }

console.log(text1);  // 'Looking forward to the Weekend'




/*
        ------------    Strict Comparison   -------------

        -   Switch cases use strict comparison (===).
        -   The values must be of the same type to match.
        -   A strict comparison can only be true if the operands are of the same type.

        In this example there will be no match for x:

*/

// x er value same type er hote hobe 


let x = "0";
switch(x){
    
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}

console.log(text);