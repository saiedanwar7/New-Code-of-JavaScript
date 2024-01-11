
/* ====================== JavaScript Function =================

    -   A JavaScript function is a block of code designed to perform a particular task.

    -   A JavaScript function is executed when "something" invokes it (calls it).
    
    ------------ Why Functions?  ----------------------

    -   With functions you can reuse code

    -   You can write code that can be used many times.

    -   You can use the same code with different arguments, to produce different results.
    
    ----------- Function Content for Basic ---------------
    
    1. JavaScript Function Syntax
    2. Function Invocation
    3. Function Return
    4. The () Operator
    5. Functions Used as Variable Values
    6. Local Variables

    1. -------- Function Syntax --------------------------

    -   A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

    -   Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

    -   The parentheses may include parameter names separated by commas:
                (parameter1, parameter2, ...)

    -   The code to be executed, by the function, is placed inside curly brackets: {}

                function name(parameter1, parameter2, parameter3) {
                    // code to be executed
                }

    -   Function parameters are listed inside the parentheses () in the function definition.

    -   Function arguments are the values received by the function when it is invoked(call it).

    -   Inside the function, the arguments (the parameters) behave as local variables.


    2. -------------- Function Invocation -------------------


    -   The code inside the function will execute when "something" invokes (calls) the function:
    -   When an event occurs (when a user clicks a button)
    -   When it is invoked (called) from JavaScript code
    -   Automatically (self invoked)


    3. -------------- Function Return -----------------------


    -   When JavaScript reaches a return statement, the function will stop executing.

    -   If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

    -   Functions often compute a return value. The return value is "returned" back to the "caller":


        --------------- Local Variables ----------------------
    
    -   Variables declared within a JavaScript function, become LOCAL to the function.

    -   Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

    -   Local variables are created when a function starts, and deleted when the function is completed.




*/


function sleep1(){
    console.log("Jasim is sleeping from 10 PM");
}

console.log("My Name is Jasim")
sleep1()





/* kono parameter use kora chara sob somoy function call korleo same jinish dekhabe   */


function sleep2(){
    console.log("Jasim is sleeping from 10 PM");
}

sleep2("jasim")   // Jasim is sleeping from 10 PM
sleep2("korim")   // Jasim is sleeping from 10 PM
sleep2("Saied")   // Jasim is sleeping from 10 PM  






// parameter use kore je kono vabe print korte parbo

function sleep3(name){
    console.log(name + " is sleeping from 10 PM");
}

sleep3("jasim")
sleep3("korim")
sleep3("Saied")






/* 
 - most important thing is : Always think function is a like variable
 - function work like a variable

*/ 





/*
 
 - Name, time ei gula hocche perameter
 - r sleep3 te je value gula deya hocche name and time er eigula hocche arguments

 */

  function sleep4(name, time){
    console.log(name + " is sleeping from " + time);
}

sleep4("jasim", "11 PM")
sleep4("korim", "12 PM")
sleep4("Saied", "2 AM")




/* 

    - Javascript return er pore r kisu print korbe na
    - tai return er pore kono kisu na lekhai valo


*/

function sleep5(name, time){
    console.log(name + " is sleeping from " + time);
    return 5;
    console.log(6);     // not print
}

sleep5('Josim', "12 PM")
console.log(4);

/*
-------- output -------

Josim is sleeping from 12 PM
4

*/




/*
 - jodi kono function return kore taholei seta kono variable e store kora jabe na, return na korle seta kora jabe na
 -  

*/

function myFunction1(a1, b1){
    return a1 + b1
}

let x1 = myFunction1(4, 3)
console.log(x1)



/*
 - return na korle undefined dekhabe 
 -
*/

function myFunction(a, b){
    console.log("hello")
    //return a + b  
    // return undefined;   return na korle javascript by default eikhan theke undefined kore de

}

let x = myFunction(4, 3)
console.log(x)   // undefined



/*
  - paranthesis () chara function call kora hole sudu function body ta return korbe, 
    jeta ekta object akare show kore
 */

function newFunction(c, d){
    return c + d;
}

let t = newFunction;
console.log(t)

// ƒ newFunction(c, d){
//     return c + d;
// }


/* 

1. =========== Local Variables ============

 - Variables declared within a JavaScript function, become LOCAL to the function.
 - Local variables can only be accessed from within the function.
 - var let jai use kori same result

 */

function localFunction(){
    let carName = "Volvo";
    console.log(carName)
}

localFunction()
console.log(carName); // Uncaught ReferenceError: carName is not defined



/*

    - function er baire jodi alada kore same variable ta o declear kori ta o function er bitorer 
      variable e access pabe na sudu bairer variable er value print korbe


*/

let carName1 = "BMW"

function localFunction1(){
    let carName1 = "Volvo";
    console.log(carName1)
}

localFunction1()  // Volvo
console.log(carName1); // BMW



/*
    - defferent function er moddhe same name e variable use korte parbo 2ta alada alada jaiga
*/

function localFunction2(){
    let busName = "Starline"
    console.log(busName);
}

function localFunction3(){
    let busName = "ANA"
    console.log(busName);
}

localFunction2();
localFunction3()
