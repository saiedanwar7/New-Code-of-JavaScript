
/*
    ================== JavaScript Function Invocation ===================

    -   The code inside a JavaScript function will execute when "something" invokes it.

*/


/*
    ------------------ Invoking a JavaScript Function -------------------

    -   The code inside a function is not executed when the function is defined.

    -   The code inside a function is executed when the function is invoked.

    -   It is common to use the term "call a function" instead of "invoke a function".

    -   It is also common to say "call upon a function", "start a function", or "execute a function".

    -   In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.


*/


// call just call function ke call kora
// onno ke diye call kora ke invocation bole, kake diye call korci seta matter kore


function a() {
    console.log(this);
}

a();  // return window object

// myFunction()
// new myFunction();
// object.myFunction();

//-------------------- Invoking a Function as a Function -------------------

// myFunction() and window.myFunction() is the same function:

function myFunction(a, b) {
    return a * b;
}

// window.myFunction(10, 2);


/*
    --------------------- The Global Object --------------------------

    When a function is called without an owner object, the value of this becomes the global object.

    In a web browser the global object is the browser window.

    This example returns the window object as the value of this:


*/

let x = myFunction();

function myFunction() {
    return this;   // x will be the window object
}

/*
    Invoking a function as a global function, causes the value of this to be the global object.
    Using the window object as a variable can easily crash your program.
*/


/*
    ------------------ Invoking a Function as a Method -----------------

    -   In JavaScript you can define functions as object methods.

    -   The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

*/

const myObject = {
    firstName : "Saied",
    lastName : "Anwar",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

}
// myObject.fullName();   // will return "Saied Anwar"

console.log(myObject.fullName());   // Saied Anwar  


/*

    -   The fullName method is a function. The function belongs to the object. myObject is the owner of the function.

    -   The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.

    -   Test it! Change the fullName method to return the value of this:

*/

const myObject1 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }
  
  // This will return [object Object] (the owner object)
console.log(myObject1.fullName());  // return object {firstName: 'John', lastName: 'Doe', fullName: ƒ}

// Invoking a function as an object method, causes the value of this to be the object itself.