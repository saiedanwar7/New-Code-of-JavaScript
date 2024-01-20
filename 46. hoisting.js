/* ================== JavaScript Hoisting ================= 
    -   Hoisting is JavaScript's default behavior of moving declarations to the top.

    -  var, let hoisting hoy and const hoy na
    -  var hoisting hoye variable declare korte pare
    -  let hoisting hoy but variable declare hoy na(but not initialized.) - ReferenceError de
    -  const e ei way te variable declare kora jai na... Syntax Error dibe

    ---------------- JavaScript Declarations are Hoisted ---------

    -   In JavaScript, a variable can be declared after it has been used
    -   In other words; a variable can be used before it has been declared



*/

x = 5;
console.log(x);  // 5

var x;

var y;
y = 6;
console.log(y); // 6


/*
------------------- const ------------------

    -  Using a const variable before it is declared, is a syntax error, so the code will simply not run.



a = 5;
const a;  // cons is not defined

*/




/*

    ========================= Declare Your Variables At the Top ! =========================

    -   Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
    -   If a developer doesn't understand hoisting, programs may contain bugs (errors).

    -   To avoid bugs, always declare all variables at the beginning of every scope.

    -   Since this is how JavaScript interprets the code, it is always a good rule.

Note:
-----

JavaScript in strict mode does not allow variables to be used if they are not declared.
Study "use strict" in the next chapter.

*/