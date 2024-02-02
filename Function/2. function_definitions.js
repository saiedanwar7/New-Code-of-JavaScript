/*
    =========================== Function Definitions ========================

    JavaScript functions are defined with the (function) keyword.

    You can use a function declaration or a function expression.


    - Function Declarations
    - Function Expressions
    - Function stored in a variable
    - Function() Constructor
    - Function Hoisting
    - Self-Invoking Functions
    - Functions Can Be Used as Values
    - Functions are Objects
    - Arrow Functions

*/

/*
    ---------------------- Function Declarations -------------------------

    syntax:

        function functionName(parameters) {
        // code to be executed
        }


    -   Declared functions are not executed immediately. 
    -   They are "saved for later use", and will be executed later, when they are invoked (called upon)

*/

function testFunction(x, y){
  return x + y;
}

// function er bitore proti ti statement ke separate korar jonno Semicolons(;) use kora hoy
// function declaration is not an executable statement, so function er sesh e semicolon na use korlei hobe



/*
    ---------------------  Function Expressions  ---------------------

    -   A JavaScript function can also be defined using an expression.
    -   An expression is a combination of values, variables, and operators, which computes to a value.

    -   A function expression can be stored in a variable:
    
    Note:
    ------
    -   Variable er moddhe function ke rakhle hoisting hoy na
    -   Using const is safer than using var, because a function expression is always constant value.
*/

// hoisting hoy na

const newFunction = function(x, y) {return x * y}


// hoisting hoy

function b(){
}




/*
    -------------------------- Function stored in a Variable ----------------------

   After a function expression has been stored in a variable, the variable can be used as a function:

*/

const newFun = function(x, y) {return x * y};
const z = newFun(4, 5);
console.log(z);   // 20




/*
    -   The function above is actually an anonymous function (a function without a name).

    -   Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

    -   The function above ends with a semicolon because it is a part of an executable statement.

*/




// JavaScript functions can be used in expressions:

function myFunction1(a, b) {
    return a * b;
  }

let x  = myFunction1(4, 3) * 2;
console.log(x);  // 24





/*
    --------------------------   Self-Invoking Functions  ------------------------

    -   Function expressions can be made "self-invoking".

    -   A self-invoking expression is invoked (started) automatically, without being called.

    -   Function expressions will execute automatically if the expression is followed by ().

    -   You cannot self-invoke a function declaration.

    -   You have to add parentheses (function(){}) around the function to indicate that it is a function expression:


*/


(function () {
    console.log("I am Saied");   // I will invoke myself
})();  // 





// Function ke jodi return na kora hoy tahole by-default seta return - undefined hobe


function myFunction(a, b) {
    // a * b;           // function jodi return na kore tahole by default seta hocche return undefined
    return a * b;  
}

const result = myFunction(3, 4);
console.log(result);  //12  - function return na korle undefined korbe




/* 
    ----------------------- Use Function as a property of a Object ---------------------

    -   A function defined as the property of an object, is called a Method of the Object.

*/



const a = {
    firstName: "saied",
    sleep: function(){

    }

}


// A function designed to create new objects, is called an object constructor.




/* 
    ----------------------- Functions are Objects ------------------------

    -   The typeof operator in JavaScript returns "function" for functions.
    -   But, JavaScript functions can best be described as objects.
    -   JavaScript functions have both properties and methods.
    -   The arguments.length property returns the number of arguments received when the function was invoked(call):

*/


// provide argument length

function myNewFunction(a, b){
    // console.dir(arguments);
    // return arguments;       //function er arguments gula ke serial e array akare print kore 
    return arguments.length;   // koyta argument dibo seta return kore
}

console.log(myNewFunction(122,214,5521));   // 3




// The toString() method returns the function as a string:

function myFunction(a, b) {
    return a * b;
  }
  
  let text = myFunction.toString();
  console.log(text);






/*

    ---------------------------- Arrow Functions ---------------------------------

    -   Arrow functions allows a short syntax for writing function expressions.

    -   You don't need the function keyword, the return keyword, and the curly brackets.

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
    -   Arrow functions do not have their own this(arrow function er this keyword nai) They are not well suited for defining object methods.
    -   Arrow functions are not hoisted. They must be defined before they are used.
    -   Using const is safer than using var, because a function expression is always constant value
    -   Arrow function not know this

*/

// object er property te arrow function na use korai valo

const object = {
    a: 5,
    b: () => {
        console.log(this.a)  // ei jaigai arrow function na use korai valo.
    }
}




/*
    -   You can only avoid/omit the return keyword and the curly brackets if the function is a single statement. 
        Because of this, it might be a good habit to always keep them:

*/

const x2 = (x, y) =>{return x * y};
console.log(x2(2, 4));   // 8


// without return keyword

const x5 = () => 5;
console.log(x5());  // 5


// jodi aro statement thake tahole return o use korte hobe


const x3 = (x, y) => {
    console.log(x);   // jodi aro statement thake
    return x * y;     // tokhon return o use korte hobe
}