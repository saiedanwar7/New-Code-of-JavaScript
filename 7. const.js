//=============== JavaScript Const ==============


/*
The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope

*/

/*
Cannot be Reassigned
A const variable cannot be reassigned:




const PI = 3.141592653589793;
PI = 3.14;     // error
PI = PI + 10;  // error

console.log(PI);  // error

*/


/*
Must be Assigned
JavaScript const variables must be assigned a value when they are declared:


const myName;
myName = "Saied";
console.log(myName);

*/


/*
Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object

*/

/*
Constant Arrays
You can change the elements of a constant array:

Example
*/

const cars = ["Saab", "Volvo", "BMW"];

console.log("Old Array: ", cars);

// You can change an element:
cars[1] = "Toyota";
console.log("New Array: ", cars);

console.log(typeof cars);

// you can add an element;

cars.push("Audi");


/* But you can NOT reassign the array:

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR

*/


/*
Constant Objects
You can change the properties of a constant object:

*/

const myCar = {type: "Fiat", model: "500", color:"white"};

// can change a property

myCar.color = "red";

// you can add a property:

myCar.owner = "Saied Anwar";

console.log(myCar);


/*
But you can NOT reassign the object:

const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

*/


/*
Block Scope
Declaring a variable with const is similar to let when it comes to Block Scope.

The x declared in the block, in this example, is not the same as the x declared outside the block:


*/

const t = 10;


{
    const t = 10;
}

console.log(t);


/*
Redeclaring
Redeclaring a JavaScript var variable is allowed anywhere in a program


var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed

*/






//Redeclaring an existing var or let variable to const, in the same scope, is not allowed:


var p = 3;

const p = 3;  // not allowed

console.log(p);  //Uncaught SyntaxError: Identifier 'p' has already been declared


// {
//     let p = 2;   // allowed
//     const p = 2; //not allowed
// }

// {
//     const x = 4;
//     const x = 6;
// }





/*Reassigning an existing const variable, in the same scope, is not allowed:

const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}


*/

/*
Redeclaring a variable with const, in another scope, or in another block, is allowed:

*/

const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}


//Using a const variable before it is declared will result in a ReferenceError