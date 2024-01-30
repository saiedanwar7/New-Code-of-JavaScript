/* ==================  Function Parameters ===============


*/

// A JavaScript function does not perform any checking on parameter values (arguments).
// parameter er value ki hobe seta function checking kore na


/*
    Function Parameters and Arguments
Earlier in this tutorial, you learned that functions can have parameters:
Function parameters are the names listed in the function definition.

Function arguments are the real values passed to (and received by) the function.


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

    -   JavaScript function definitions do not specify data types for parameters.
    -   JavaScript functions do not perform type checking on the passed arguments.
    -   JavaScript functions do not check the number of arguments received.(ja iccha toto arguments pass korte pari)

*/


/*
    Default Parameters
If a function is called with missing arguments (less than declared), the missing values are set to undefined.

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

*/

function a1(x, y) {  // parameters
    return x * y;
}

console.log(a1(4));   // arguments/value  // NaN - because we provide 1 argument


/*

    --------------------    Default Parameter Values    ---------------

    -   ES6 allows function parameters to have default values.

    -----------------   Example   ---------------------
    -   If y is not passed or undefined, then y = 10.


*/

function myFunction(x, y = 10) {
    return x + y;
  }
myFunction(5);



/*
  Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.


*/

// parameter er value jodi function scope er moddhe change kori tahole arguments er value change hobe na, seta ja diyeci setai thakbe

function A(x, y) {
  x = x * 5;
  return x * y;   
}

let m = 5;
let n = 6;

// just pass value not the argument's locations

console.log(A(m, n));  // 150
console.log(m); 5


/*
    -   Objects are Passed by Reference - full pointer tai chole jabe
    
    In JavaScript, object references are values.

    -   Because of this, objects will behave like they are passed by reference:

    -   If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.

// parameter er value jodi function scope er moddhe change kori tahole arguments er value change hohye jai - object e

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
console.log(s);  // one: 7 object er value o change hoye geche