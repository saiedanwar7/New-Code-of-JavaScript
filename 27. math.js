/*------------------ JavaScript Math Object ----------------

    -   The JavaScript Math object allows you to perform mathematical tasks on numbers.

    The Math Object
    Unlike other objects, the Math object has no constructor.

The Math object is static.

All methods and properties can be used without creating a Math object first.

*/


/*
Math Properties (Constants)
The syntax for any Math property is : Math.property.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:


Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


*/


/*----------------- Math Methods -------------------
The syntax for Math any methods is : Math.method(number) 

Number to Integer
There are 4 common methods to round a number to an integer


Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)

*/

/*
Math.round()
Math.round(x) returns the nearest integer


*/

Math.round(4.6);  // 5
Math.round(4.5);  // 5
Math.round(4.4);  // 4


/*
Math.ceil()
Math.ceil(x) returns the value of x rounded up to its nearest integer

*/

Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);

// all return 5


/*
Math.floor()
Math.floor(x) returns the value of x rounded down to its nearest integer


*/

Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);  // -5

// all return 4

/*
Math.pow()
Math.pow(x, y) returns the value of x to the power of y
*/

Math.pow(8, 2);
console.log(Math.pow(2, 3));  // 8


/*
Math.sqrt()
Math.sqrt(x) returns the square root of x

*/

console.log(Math.sqrt(64)); //8


/*
Math.abs()
Math.abs(x) returns the absolute (positive) value of x


*/

console.log(Math.abs(-4.7));   // 4.7


/*
Math.min() and Math.max()
Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments

*/

console.log(Math.min(0, 150, 30, 20, -8, -200)); 

console.log(Math.abs(Math.min(0, 150, 30, 20, -8, -200)));  // 200