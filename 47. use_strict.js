/* ==================== JavaScript Use Strict =====================

    -   "use strict"; Defines that JavaScript code should be executed in "strict mode"
    -   It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
    -   The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

Note :
------
    -   You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
    -   "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.


    ------------------------    Why Strict Mode?    ------------------------

Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

*/


/*
    ----------------------- Declaring Strict Mode -------------------------

        -   Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

    Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)

*/

// "use strict";

//x = 3.14;   // error show - x is not defined


// -------------- function -----------

// myFunction()  //// This will also cause an error because y is not declared


// function myFunction(){
//     y = 3.14   // // This will also cause an error because y is not declared
// }





// Declared inside a function, it has local scope (only the code inside the function is in strict mode)

x = 3.14;       // This will not cause an error.
myFunction();   // y is not defined

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}



/*
    ---------------- Objects are variables too -------------

    - Using an object, without declaring it, is not allowed:

    "use strict";
    x = {p1:10, p2:20};      // This will cause an error

*/


/*
    --------------------- Deleting a variable (or object) is not allowed. ------------------

    "use strict";
    let x = 3.14;
    delete x;                // This will cause an error

*/


// Deleting a function is not allowed.

"use strict";
function x(p1, p2) {};
delete x;   // This will cause an error



/*
Watch Out!
----------

The "use strict" directive is only recognized at the beginning of a script or a function.

*/