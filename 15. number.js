
//================ JavaScript Number ============


//JavaScript has only one type of number. Numbers can be written with or without decimals.

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals


//Extra large or extra small numbers can be written with scientific (exponent) notation


let a = 123e5;  // 12300000
let b = 123e-5  // 0.00123



/*
JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63


*/


/*
Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

*/

let x1 = 999999999999999;   // x1 will be 999999999999999
let y1 = 9999999999999999;  // y1 will be 10000000000000000


// The maximum number of decimals is 17.


/*
Floating Precision
Floating point arithmetic is not always 100% accurate

*/


let x2 = 0.2 + 0.1  //  0.30000000000000004

// To solve the problem above, it helps to multiply and divide:

let x3 = (0.2 * 10 + 0.1 * 10 ) / 10;
console.log(x3);   // 0.3


/*
Adding Numbers and Strings
WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.

*/

//If you add two numbers, the result will be a number:

let x4 = 10;
let y4 = 20;

let z = x4 + y4; // 30


//If you add two strings, the result will be a string concatenation

let x5 = "10";
let y5 = "20";

let z1 = x + y;
console.log(z1);  // 1020


// If you add a number and a string, the result will be a string concatenation

let x6 = 10;
let y6 = "20";
let z2 = x6 + y6;

console.log(z2);  // 1020

/*
 -  A common mistake is to expect this result to be 30
 - because here we try to concate with string

*/

let x7 = 10;
let y7 = 30;

let z3 = "The result is: " + x7 + y7;
console.log(z3); //1020


// A common mistake is to expect this result to be 102030

let x8 = 10;
let y8 = 20;
let z4 = "30";
let result = x8 + y8 + z4;  // result is : 3030

/* left side theke count suru korbe tai first 2ta value plus korbe

The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.
*/

/*
Numeric Strings
JavaScript strings can have numeric content:

let x = 100;         // x is a number

let y = "100";       // y is a string

JavaScript will try to convert strings to numbers in all numeric operations:

// plus are not work

*/

let a1 = "100";
let b1 = "10";

let c = (a1 / b1); // This will also work:
let c1 = (a1 * b1); // And this will work:
let c2 = (a1 - b1); // this will work:
let c3 = (a1 + b1);  // this not work


console.log(c);   // 10
console.log(c1);   // 1000
console.log(c2);   // 90
console.log(c3);   // 10010



/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)

*/


let d = 100 / "Apple";  // NaN

// However, if the string is numeric, the result will be a number

let d1 = 100 / "10";  // 10



//--------------------- isNaN() -----------------

// You can use the global JavaScript function isNaN() to find out if a value is a not a number



let n = 100 / "Apple";
let r = isNaN(n);

console.log(r);  // true


// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:


let n1 = NaN;

let m = 5;

let num = n1 + m;  // NaN



// The result might be a concatenation like NaN5



let n2 = NaN;

let m1 = "5";

let num1 = n2 + m1;  

console.log(num1);  // NaN5


/*  
    -   NaN is a number: typeof NaN returns number
    -   Infinity is a number: typeof Infinity returns number

*/

/*
Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

*/


let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber);
}


//Division by 0 (zero) also generates Infinity


let x9 =  2 / 0;
let y9 = -2 / 0;

console.log(x9);  // Infinity
console.log(y9);  // -Infinity

/*
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

*/

let x10 = 0xFF;
console.log(x10); // 255


/*
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.



By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
*/



/*
JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals


let x = 123;

*/


// numbers can also be defined as objects with the keyword new:


let num4 = new Number(123);
console.log(typeof num4);  // object


/*
Do not create Number objects.

The new keyword complicates the code and slows down execution speed.

Number Objects can produce unexpected results

*/


// When using the == operator, x and y are equal:
// Note the difference between (x==y) and (x===y)

let num5 = 500;

let num6 = new Number(500);
let result1 = num5 == num6;

let result2 = num5 === num6;


console.log(result1);   // true because both are number
console.log(result2);   // false not same type 


// Comparing two JavaScript objects always returns false.

let number1 = new Number(500);
let number2 = new Number(500);

let result3 = number1 === number2;

console.log(result3);  // false
