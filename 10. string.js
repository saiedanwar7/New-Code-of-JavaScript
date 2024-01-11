/* =============== JavaScript Strings Basic =======================

    -   JavaScript strings are for storing and manipulating text.
    Strings are for storing text

Strings are written with quotes



    ------------- String Content -------------

    - String Length
    - Escape Character
    - Breaking Long Code Lines
    - javaScript Strings as Objects

*/



let text = "John Doe";


/*
Note
Strings created with single or double quotes works the same.

There is no difference between the two.

*/

let carName1 = "Volvo"; // Double quotes
let carName2 = 'Volvo';


/*
Quotes Inside Quotes
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

*/

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Saied"';


/*
Template Strings
Templates were introduced with ES6 (JavaScript 2016).

Templates are strings enclosed in backticks (`This is a template string`).

Templates allow single and double quotes inside a string:

*/


let text1 = `He's often called "Saied"`;

console.log(text1);


/*
String Length
To find the length of a string, use the built-in length property:
*/

let word1 = "dljfdflsjdfjslfjsfnawerjsfnsdfjl";
let length = word1.length;
console.log(length);


/*
Escape Characters
Because strings must be written within quotes, JavaScript will misunderstand this string:

*/


// it's not work

// let text2 = "We are the so-called "Vikings" from the north.";



let text3 = "We are the so-called \"Vikings\" from the north.";

console.log(text3);  // it's work


let text4 = 'It\'s alright';
console.log(text4)  // it's work


/*
Breaking Long Lines
For readability, programmers often like to avoid long code lines.

A safe way to break up a statement is after an operator:



*/

//document.getElementById("demo").innerHTML =
// "Hello Dolly!";


//A safe way to break up a string is by using string addition:

// document.getElementById("demo").innerHTML = "Hello" +
// "World";


/*
Template Strings
Templates were introduced with ES6 (JavaScript 2016).

Templates are strings enclosed in backticks (`This is a template string`).

Templates allow multiline strings:

*/

let text5 = 
` The quick
  brown fox
  jumps over
  the lazy dog`;

  console.log(text5);


  /*----------- JavaScript Strings as Objects ----------
  
  - rmally, JavaScript strings are primitive values, created from literals:
   
  let x = "john"  // literals
  
  */


// But strings can also be defined as objects with the keyword new:

let y = new String("Saied");
console.log(typeof y);  // type of object


/*
Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:
*/

//When using the == operator, x and y are equal:

let text6 = "John";
let text7 = new String("John");

let textResult = text6 == text7
console.log(textResult);   // true 



//When using the === operator, x and y are not equal:
let textResult2 = text6 === text7
console.log(textResult2);  //check type false


// Note : Comparing two JavaScript objects always returns false.


let a = new String("Saied");
let b = new String("Saied");

let c = a === b;

console.log("Comparing two object return false:", c); // false