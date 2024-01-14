/*=================== JavaScript Type Conversion ===================

Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans


JavaScript Type Conversion
JavaScript variables can be converted to a new variable and another data type:

By the use of a JavaScript function
Automatically by JavaScript itself

*/


/*
Converting Strings to Numbers
The global method Number() converts a variable (or a value) into a number.

A numeric string (like "3.14") converts to a number (like 3.14).

An empty string (like "") converts to 0.

A non numeric string (like "John") converts to NaN (Not a Number).

    -   string word ke convert korle NaN return korbe

*/


console.log(Number(" "));  // return 0
console.log(Number("    ")); // return 0
console.log(Number("")); // return 0

console.log(Number("Saied"));   // NaN

console.log(Number("99 88"));  // space er jonno NaN return korbe

console.log(Number("3.14"));   // return number - 3.14

console.log(Number(Math.PI));   // return number - 3.141592




/*
        Number Methods

*/


let a = 10e6;

console.log(a.toExponential());   // 1e+7

let b = 10.2;
let c = 10.5;

console.log(b.toFixed());         // return '10'
console.log(c.toFixed());         // return '10'

let d = 10.378787;
console.log(d.toPrecision(3));  // 10.4


/*
Automatic Type Conversion

    -   subtraction er somoy number system hishabe kaj kore
    *   same

*/

console.log(5 + null);    // returns 5         because null is converted to 0
console.log("5" + null); // returns "5null"   because null is converted to "null"
console.log("5" + 2 );    // returns "52"      because 2 is converted to "2"
console.log("5" - 2 )    // returns 3         because "5" is converted to 5
console.log("5" * "2")   // returns 10        because "5" and "2" are converted to 5 and 2

console.log("5" - 2);    // 3 (-)(*) er belai Number



/*
Automatic String Conversion
JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable

*/

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"



// Numbers and booleans are also converted, but this is not very visible

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"
