/* ==================  Function Parameters ===============

    -   Function Parameters and Arguments
    -   Parameter Rules
    -   Default Parameters
    -   Default Parameters Value
    -   Function Rest Parameter
    -   The Arguments Object
    -   Arguments are Passed by Value
    -   Objects are Passed by Reference

*/

// A JavaScript function does not perform any checking on parameter values (arguments).
// parameter er value ki hobe seta function checking kore na


/*
    -------------------------- Function Parameters and Arguments -------------------------

    -   Earlier in this tutorial, you learned that functions can have parameters:

    -   Function parameters are the names listed in the function definition.

    -   Function arguments are the real values passed to (and received by) the function.


            function functionName(parameter1, parameter2, parameter3) {
            // code to be executed
            }

            functionName("Saied"); // function argument/value

*/



function a(x, y) {  // parameters
    return x * y;
}

a(4, 5);   // arguments/value



/*
    ------------------------    Parameter Rules     -----------------------

    -   JavaScript function definitions do not specify data types for parameters. (not specify data type)

    -   JavaScript functions do not perform type checking on the passed arguments. (not checking type of arguments)

    -   JavaScript functions do not check the number of arguments received.(ja iccha toto arguments pass korte pari)

*/


/*
        --------------------------- Default Parameters ---------------------

    -   If a function is called with missing arguments (less than declared), the missing values are set to undefined.

    -   Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

*/

function a1(x, y) {  // parameters
    return x * y;
}

console.log(a1(4));   // arguments/value  // NaN - because we provide 1 argument


/*

    --------------------------- Default Parameter Values -----------------------

    -   ES6 allows function parameters to have default values.

    -----------------   Example   ---------------------

    -   If y is not passed or undefined, then y = 10.


*/

function myFunction(x, y = 10) {
    return x + y;
  }
console.log(myFunction(5));   // 15





/*
  ----------------- Function Rest Parameter --------------------

    -   The rest parameter (...) allows a function to treat an indefinite number of arguments as an Array:

*/

function Addition(...args){
    let sum = 0;
    for(let arg of args){   // rest parameter treat an indefinite number of Array so use (for of loop)
        sum +=arg;
    }
    return sum;
}

let x = Addition(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);  // 326




/*
    ---------------------- The Arguments Object --------------------------

    -   JavaScript functions have a built-in object called the arguments object.

    -   The argument object contains an array of the arguments used when the function was called (invoked).

    -   This way you can simply use a function to find (for instance) the highest value in a list of numbers:

*/

function Multi_All(){
    // let num = 0;   // default value 0 hole result 0 ashbe tai 1 kore diyeci(sudu * er jonno)
    let num = 1;     // default value 0 hole result 0 ashbe tai 1 kore diyeci(sudu * er jonno)

    for (let i = 0; i < arguments.length; i++){
        num *= arguments[i];
        // num += arguments[i];
    }
    return num;
}


let numbers = Multi_All(2, 4, 6, 8);
console.log(numbers);   // 384


/*
    If a function is called with too many arguments (more than declared), 
    these arguments can be reached using the arguments object.
*/





/*

    ------------------------  Arguments are Passed by Value ----------------------

    -   The parameters, in a function call, are the function's arguments.

    -   JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

    -   If a function changes an argument's value, it does not change the parameter's original value.

    -   Changes to arguments are not visible (reflected) outside the function.


*/

// parameter er value jodi function scope er moddhe change kori tahole arguments er value change hobe na, seta ja diyeci setai thakbe

function A(x, y) {
  x = x * 5;   // 25
  y = y + 2;  // 8

  return x * y;   
}

let m = 5;
let n = 6;

// just pass value not the argument's locations

console.log(A(m, n));  // 150
console.log(m); 5




/*

    -------------------------  Objects are Passed by Reference ------------------


    -   Objects are Passed by Reference - full pointer tai chole jabe
    
    In JavaScript, object references are values.

    -   Because of this, objects will behave like they are passed by reference:

    -   If a function changes an object property, it changes the original value.

    Changes to object properties are visible (reflected) outside the function.

    -   Parameter er value jodi function scope er moddhe change kori tahole arguments er value change hohye jai - object e

*/

function A1(x){
    x.one = 7;
    return x.one * x.two;
}

let s = {
    one: 4,
    two: 5
};

console.log(A1(s));  // 35
console.log(s);      // one: 7 object er value o change hoye geche