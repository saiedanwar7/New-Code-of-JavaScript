//================= Let variable ===============

/*
    - The let keyword was introduced in ES6 (2015)

    - Variables declared with let have Block Scope

    - Variables declared with let must be Declared before use

    - Variables declared with let cannot be Redeclared in the same scope

    - ES6 introduced the two new JavaScript keywords: let and const.

    - These two keywords provided Block Scope in JavaScript:



Difference Between var, let and const


 - var   - support Redeclare, Reassign, Hoisted, Binds this 
 
 - let   - support Scope,Reassign

 - const   - support Scope, 



*/


// Variables declared inside a { } block cannot be accessed from outside the block:

{
    let x = 2; 
}
// x can Not be used here

/*
-------------- Global Scope  -----------------

 -  Variables declared with the var always have Global Scope.

 -  Variables declared with the var keyword can NOT have block scope:


Example


Variables declared with varinside a { } block can be accessed from outside the block:
*/

{
    var t = 5;   
}
console.log("Var variable can be access from here: ", t);
// t can be used here


/*
Cannot be Redeclared
Variables defined with let can not be redeclared.

You can not accidentally redeclare a variable declared with let.

*/

/* With let you can not do this:

let nam = "Saied Anwar"


let nam = 0;

console.log(num);  //Uncaught SyntaxError: Identifier 'nam' has already been declared

*/



/*
        Redeclaring Variables

        Redeclaring a variable using the var keyword can impose problems.

        Redeclaring a variable inside a block will also redeclare the variable outside the block:


*/


var e = 10;


{
    var e = 4;
}


console.log(e);  // Here e is 4;

/*
Redeclaring a variable using the let keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:
*/

let h = 10;

{
    let h = 30;
}

console.log( h)  // here h is 10;


/**
 ------------------ Redeclaring -----------------

    -   Redeclaring a JavaScript variable with var is allowed anywhere in a program


 */

var y = 2;

var y = 3

console.log(y);


// let, redeclaring a variable in the same block is NOT allowed:

/*

var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x1 = 2;   // Allowed
let x1 = 3;   // Not allowed
}



{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}

*/


//Redeclaring a variable with let, in another block, IS allowed:

let s = 2;

{
    let s = 3;

}

{
    let s = 4;
}

console.log(s);  // 2


/*
------------------ Let Hoisting ----------------------

    -   Variables defined with var are hoisted to the top and can be initialized at any time.

    -   eaning: You can use the variable before it is declared

*/

trackName = "TATA";
var trackName;

console.log(trackName);




/*
    -   Variables defined with let are also hoisted to the top of the block, but not initialized.

    -   Meaning: Using a let variable before it is declared will result in a ReferenceError:

*/

myName = "Saied";
let myName;

console.log(myName);  //Uncaught ReferenceError: Cannot access 'myName' before initialization