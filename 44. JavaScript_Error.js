/*
    =========================== JavaScript Errors ====================

    Throw, and Try...Catch...Finally

    -   The try statement defines a code block to run (to try)

    -   The catch statement defines a code block to handle any error

    -   The finally statement defines a code block to run regardless of the result

    -   The throw statement defines a custom error

*/


/*
    ----------------------- JavaScript try and catch ------------------------

    -   The try statement allows you to define a block of code to be tested for errors while it is being executed.

    -   The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

    -   The JavaScript statements try and catch come in pairs:

        try {
        Block of code to try
        }
        catch(err) {
        Block of code to handle errors
        }

*/


/*  --------------------------- throw Error ------------------------

    -   The throw statement allows you to create a custom error.

    -   Technically you can throw an exception (throw an error).

    -   The exception can be a JavaScript String, a Number, a Boolean or an Object:

*/

let x = "";

try{
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    // if(x > 10) throw "too high"
    if(x > 10) throw {  // object hishabe o return korte pari
        message: "too high",
        name: "High Error"
    }  
}
catch(err){
    console.log(err);
}

console.log("this is a test");



/*
    ----------------------- The finally Statement ----------------------------

The finally statement lets you execute code, after try and catch, regardless of the result

        Syntax:
        --------

            try {
            Block of code to try
            }
            catch(err) {
            Block of code to handle errors
            }
            finally {
            Block of code to be executed regardless of the try / catch result
            }

*/



/*
    -------------------- The Error Object ------------------------

    -   JavaScript has a built in error object that provides error information when an error occurs.
    -   The error object provides two useful properties: name and message.

*/


/*
    ----------------------- Error Name Values --------------------

Six different values can be returned by the error name property

    
    1. Eval Error - An EvalError indicates an error in the eval() function

    -   Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.
*/




/*
    2. -------------------- Range Error --------------------

    -   A RangeError is thrown if you use a number that is outside the range of legal values.

    -   For example: You cannot set the number of significant digits of a number to 500.
*/

let num = 1;
// let arr = RangeError;

try{
    num.toPrecision(500);
}
catch(err){
    console.log(err.name);   // [RangeError]
}







/*
    3.---------------------------- Reference Error --------------------

    -   A ReferenceError is thrown if you use (reference) a variable that has not been declared

*/

let x1 = 5;
// let y = 3;


try{
    x1 = y + 1
    console.log(x1);
}
catch(err){
        console.log(err.name);   // ReferenceError
}







/*
    4.--------------------------- Syntax Error  --------------------------

    -   A SyntaxError is thrown if you try to evaluate code with a syntax error.
*/




try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    console.log(err.name);   'SyntaxError'
  }





/*
    5.------------------------    Type Error  -------------------------

    A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.

*/


let num1 = 1;
try{
    num.toUpperCase();   // it's use for string
}
catch(err){
    console.log(err.name);   //  'TypeError'
}



/*
   6.--------------  URI (Uniform Resource Identifier) Error  ------------
A URIError is thrown if you use illegal characters in a URI function
*/

try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    console.log(err.name);   // 'URIError'
  }