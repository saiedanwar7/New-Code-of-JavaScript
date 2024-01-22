/*
    =====================  JavaScript Best Practices ===============

    -   Avoid global variables, avoid new, avoid ==, avoid eval()
    -   Avoid Global Variables
    -   Minimize the use of global variables.
    -   This includes all data types, objects, and functions.
    -   Global variables and functions can be overwritten by other scripts.
    -   Use local variables instead, and learn how to use closures.

*/


/*
    -------------------- Always Declare Local Variables -------------------

    -   All variables used in a function should be declared as local variables.
    -   Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables. 

    Note:
    -----

    Strict mode does not allow undeclared variables.

*/



/*
    --------------------    Declarations on Top     --------------------

    -   It is a good coding practice to put all declarations at the top of each script or function.

    This will:

    -   Give cleaner code
    -   Provide a single place to look for local variables
    -   Make it easier to avoid unwanted (implied) global variables
    -   Reduce the possibility of unwanted re-declarations

*/

// Declare at the begining

let firstName, lastName, price, discount, fullPrice;

// Use Later

firstName = "John";
lastName = "Doe"

price = 20;
discount = 0.50;

fullPrice = price - discount;




/*
    ---------------------- Initialize Variables  ---------------------

    -   It is a good coding practice to initialize variables when you declare them.

This will:

Give cleaner code
Provide a single place to initialize variables
Avoid undefined values


// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0,
const myArray = [];
const myObject = {};
*/



/*
    ------------------ Declare Object with const ----------------
    
    -  Declaring objects with const will prevent any accidental change of type:

*/

let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string

console.log(car);  // 'Fiat'



// const car = {type:"Fiat", model:"500", color:"white"};
// car = "Fiat";  // Not possible 



/*
    --------------------- Declare Arrays with const ---------------------

    -   Declaring arrays with const will prevent any accidential change of type:

    let cars = ["Saab", "Volvo", "BMW"];
    cars = 3;    // Changes array to number

    const cars = ["Saab", "Volvo", "BMW"];
    cars = 3;    // Not possible
*/


/*
    ----------------------  Don't Use new Object()  -----------------

    -   Use "" instead of new String()
    -   Use 0 instead of new Number()
    -   Use false instead of new Boolean()
    -   Use {} instead of new Object()
    -   Use [] instead of new Array()
    -   Use /()/ instead of new RegExp()
    -   Use function (){} instead of new Function() 

*/

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object


/*
    -------------- Beware of Automatic Type Conversions --------------

    -   JavaScript is loosely typed.
    -   A variable can contain all data types.      
    
    A variable can change its data type:
*/

let x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number



/*

    -   Beware that numbers can accidentally be converted to strings or NaN (Not a Number).

    -   When doing mathematical operations, JavaScript can convert numbers to strings:

    plus(+) return string and (-) return number

*/

let y1 = 5 + 7;       // y.valueOf() is 12,  typeof x is a number
let y2 = 5 + "7";     // y.valueOf() is 57,  typeof x is a string
let y3 = "5" + 7;     // y.valueOf() is 57,  typeof x is a string
let y4 = 5 - 7;       // y.valueOf() is -2,  typeof x is a number
let y5 = 5 - "7";     // y.valueOf() is -2,  typeof x is a number
let y6 = "5" - 7;     // y.valueOf() is -2,  typeof x is a number
let y7 = 5 - "x";     // y.valueOf() is NaN, typeof x is a number



// Subtracting a string from a string, does not generate an error but returns NaN (Not a Number):

"Hello" - "Dolly"    // returns NaN



/*
Use === Comparison
The == comparison operator always converts (to matching types) before comparison.

The === operator forces comparison of values and type:
*/

0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false



/*
    ------------------------ Avoid Number, String, and Boolean as Objects ---------------------

    -   Always treat numbers, strings, or booleans as primitive values. Not as objects.
    -   Declaring these types as objects, slows down execution speed, and produces nasty side effects:

*/

let myName1 = "Saied";
let myName2 = new String("John");

console.log(myName1 === myName2)  // is false because myName1 is a string and myName2 is an object




// two object are not equel

let x11 = new String("John");             
let y22 = new String("John");
(x11 == y22) // is false because you cannot compare objects.


/*
    ----------------- Avoid Using eval() -----------------

    -   The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.
    -   Because it allows arbitrary code to be run, it also represents a security problem. 
*/