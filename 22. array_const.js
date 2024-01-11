/*======================= JavaScript Array Const ================ 

    -   In 2015, JavaScript introduced an important new keyword: const.
    -   It has become a common practice to declare arrays using const
*/

const cars = ["Saab", "Volvo", "BMW"];




/*
        -   Cannot be Reassigned
        -   An array declared with const cannot be (reassigned)

*/


const cars1 = ["Saab", "Volvo", "BMW"];
// cars1 =  ["Toyota", "Volvo", "Audi"];    // Error - Assignment to constant variable




/*
---------------- Arrays are Not Constants  -----------------

    -   The keyword const is a little misleading.
    -   It does NOT define a constant array. It defines a constant reference to an array.
    -   Because of this, we can still change the elements of a constant array.


-------------   Elements Can be Reassigned  -------------

    -   You can change the elements of a constant array

*/

// You can create a constant array:

const cars3 = ["Saab", "Volvo", "BMW"];

cars3[0] = "Toyota";

console.log(cars3);  //  ["Toyota", "Volvo", "BMW"];


//  add an element 

cars3.push("Audi");
console.log(cars3);  




/* 

------------------  Assigned when Declared  --------------------

    -   JavaScript const variables must be assigned a value when they are declared

    -   Meaning: An array declared with const must be initialized when it is declared.

    -   Using const without initializing the array is a syntax error



-------- This will not work --------

const cars;
cars = ["Saab", "Volvo", "BMW"];

*/






/*

    -   Arrays declared with var can be initialized at any time.

    -   You can even use the array before it is declared


This is OK:

cars = ["Saab", "Volvo", "BMW"];
var cars;

*/




/*
--------------- Const Block Scope   ------------

    -   An array declared with const has Block Scope.

    -   An array declared in a block is not the same as an array declared outside the block:

*/

const cars4 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars5 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
console.log(cars[0])  // 'Saab'


// An array declared with var does not have block scope





/*
    --------------- Redeclaring Arrays  ---------------

    -   Redeclaring an array declared with var is allowed anywhere in a program:


var cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Toyota", "BMW"];  // Allowed
cars = ["Volvo", "Saab"];      // Allowed

*/




/*

    - Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed


var cars9 = ["Volvo", "BMW"];     // Allowed
const cars9 = ["Volvo", "BMW"];   // Not allowed

{
  var cars10 = ["Volvo", "BMW"];   // Allowed
  const cars10 = ["Volvo", "BMW"]; // Not allowed
}


*/



/*  Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed  */

/*
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}

*/



/* Redeclaring an array with const, in another scope, or in another block, is allowed */


const cars20 = ["Volvo", "BMW"];   // Allowed
{
  const cars20 = ["Volvo", "BMW"]; // Allowed
}
{
  const cars20 = ["Volvo", "BMW"]; // Allowed
}