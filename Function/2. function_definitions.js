/*
    =========================== Function Definitions ========================


    1. Function Declarations
    2. Function Expressions
    3. Function() Constructor
    4. Function Hoisting
    5. Self-Invoking Functions
    6. Functions Can Be Used as Values
    7. Functions are Objects
    8. Arrow Functions

*/

// Using const is safer than using var, because a function expression is always constant value.

// hoisting hoy

function b(){

}



// Variable er moddhe function ke rakhle hoisting hoy na

// const a = function(){
// }

// Self-Invoking Functions - IIFE - 

(function () {
    console.log("I am Saied");
})();  // 


/*
    Functions Can Be Used as Values
JavaScript functions can be used as values:

*/

function myFunction(a, b) {
    return a * b;  // function jodi return na kore tahole by default seta hocche return undefined

}

const result = myFunction(3, 4);
console.log(result);  //12

// JavaScript functions can be used in expressions:
function myFunction1(a, b) {
    return a * b;
  }

let x  = myFunction1(4, 3) * 2;
console.log(x);  // 24



// A function defined as the property of an object, is called a method to the object.

const a = {
    firstName: "saied",
    sleep: function(){

    }

}

// A function designed to create new objects, is called an object constructor.


/*
Arrow Functions
Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

*/

// normally way(variable way) - ES5

const fun = function (x, y){
    return x * y;
}

// ES6

const fun1 = (x, y) => x * y;

//  without parameter

const x1 = () => 5;


/*
    Arrow functions do not have their own this. They are not well suited for defining object methods.

    Arrow functions are not hoisted. They must be defined before they are used.
    -  Arrow function not know this

*/
const object = {
    a: 5,
    b: () => {
        console.log(this.a)  // ei jaigai arrow function na use korai valo.
    }
}


/*
You can only avoid/omit the return keyword and the curly brackets if the function is a single statement. 
Because of this, it might be a good habit to always keep them:

*/

const x2 = (x, y) =>{return x * y};

// jodi aro statement thake tahole return o use korte hobe


const x3 = (x, y) => {
    console.log(x);   // jodi aro statement thake
    return x * y;     // tokhon return o use korte hobe
}