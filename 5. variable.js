/*
---------------- JavaScript Variables ----------------


- Variables are Containers for Storing Data
- Variables are containers for storing values.

JavaScript Variables can be declared in 4 ways:

        - Automatically
        - Using var
        - Using let
        - Using const

Note:
-----

    -   It is considered good programming practice to always declare variables before use.

    -   The var keyword was used in all JavaScript code from 1995 to 2015.

    -   The let and const keywords were added to JavaScript in 2015.

    -   The var keyword should only be used in code written for older browsers.
    -   JavaScript identifiers are case-sensitive.




----------- When to Use var, let, or const? --------------

    1. Always declare variables

    2. Always use const if the value should not be changed

    3. Always use const if the type should not be changed (Arrays and Objects)

    4. Only use let if you can't use const

    5. Only use var if you MUST support old browsers.




The general rules for constructing names for variables (unique identifiers) are:

    -   Names can contain letters, digits, underscores, and dollar signs.
    -   Names must begin with a letter.
    -   Names can also begin with $ and _ (but we will not use it in this tutorial).
    -   Names are case sensitive (y and Y are different variables).
    -   Reserved words (like JavaScript keywords) cannot be used as names.


*/

x = 5;
y = 6;
z = x + y;


/*
    -   The two variables price1 and price2 are declared with the const keyword.

        -   These are constant values and cannot be changed.

        -   The variable total is declared with the let keyword.

        -   The value total can be changed.


*/

const price1 = 5;
const price2 = 6;
let total = price1 + price2;


/*
---- A variable declared without a value will have the value undefined.  ------

The variable carName will have the value undefined after the execution of this statement:

*/

let carName;

console.log(carName);

/*
------------------- Re-Declaring JavaScript Variables -----------------

 -  If you re-declare a JavaScript variable declared with var, it will not lose its value.


*/



var busName = "Volvo";
var busName;

console.log(busName);


/*
    You cannot re-declare a variable declared with let or const.
    This will not work:


 */


// let carName1 = "BMW";
// let carName1;


let t = 5 + 2 + 3;
console.log(t);



// You can also add strings, but strings will be concatenated:

let word = "Jhon" +" " + "Doe";
console.log(word);


// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

let num1 = 2 + 3 + "5";

console.log(num1);
console.log(typeof num1);  // string hoye jabe



/*

Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:

*/


let _lastName = "Anwar";
let _x = 2;
let _100 =  5;

console.log(_lastName, _x, _100);  


/*
Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.

*/