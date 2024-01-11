//================ JavaScript Number Method =================

/*
These number methods can be used on all JavaScript numbers


    Method	            Description

    toString()	        Returns a number as a string

    toExponential() 	Returns a number written in exponential notation
    
    toFixed()	        Returns a number written with a number of decimals
    
    toPrecision()	    Returns a number written with a specified length
    
    ValueOf()	        Returns a number as a number

*/


/*
The toString() Method
The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions)
*/


let x = 123;
let result = x.toString();


console.log(typeof result);  // 123 is now string


/*
The toFixed() Method
    -   toFixed() returns a string, with the number written with a specified number of decimals
    -   
    -  toFixed(2) is perfect for working with money.

*/

let x1 = 9.656;

console.log(x1.toFixed(0));  // 10
console.log(x1.toFixed(2));  // 9.66
console.log(x1.toFixed(4));  // 9.6560
console.log(x1.toFixed(6));  // 9.656000


/*
The toPrecision() Method
toPrecision() returns a string, with a number written with a specified length:

let x = 9.656;
x.toPrecision();   // 9.656
x.toPrecision(2);  // 9.7
x.toPrecision(4);  // 9.656
x.toPrecision(6);  // 9.65600

*/


/*

In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.

*/



/*
        
                Converting Variables to Numbers

There are 3 JavaScript methods that can be used to convert a variable to a number:

    Method      	Description

    Number()	    Returns a number converted from its argument.
    
    parseFloat()	Parses its argument and returns a floating point number
    
    parseInt()	    Parses its argument and returns a whole number

*/



/* The methods above are not number methods. They are global JavaScript methods


Number(true);     - 1
Number(false);    - 0
Number("10");      - 10
Number("  10");    - 10 
Number("10  ");    - 10
Number(" 10  ");   - 10
Number("10.33");   - 10.33
Number("10,33");   - NaN
Number("10 33");   - NaN 
Number("John");    - NaN

*/


/*
The parseInt() Method
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

    -   If the number cannot be converted, NaN (Not a Number) is returned.


parseInt("-10");  // -10
parseInt("-10.33"); // -10
parseInt("10");    // 10
parseInt("10.33");  // 10
parseInt("10 20 30");  // 10
parseInt("10 years");  // 10
parseInt("years 10");  // NaN


*/


/*
The parseFloat() Method
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned
If the number cannot be converted, NaN (Not a Number) is returned.

parseFloat("10");       // 10
parseFloat("10.33");    // 10.33
parseFloat("10 20 30"); // 10
parseFloat("10 years");  // 10
parseFloat("years 10");     // NaN

*/

