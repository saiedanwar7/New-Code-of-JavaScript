//=====================  JavaScript Booleans ==================

/*
    - A JavaScript Boolean represents one of two values: true or false.

    Boolean Values
    -   Very often, in programming, you will need a data type that can only have one of two values, like

        - YES / NO
        - ON / OFF
        -   TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.

*/


/*
The Boolean() Function
You can use the Boolean() function to find out if an expression (or a variable) is true:

*/

let num = Boolean(10 > 9);

console.log(num);  // true

console.log(Boolean);  // type Boolean


// The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.


/*---------  Everything With a "Value" is True  -----------*/

console.log(Boolean(100));  // true

console.log(Boolean(3.14)); // true
console.log(Boolean(-15)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean("false")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("7 + 1 + 3.14")); // true


/*------------- Everything Without a "Value" is False -------------- */


//The Boolean value of 0 (zero) is false

let x = 0;
console.log(Boolean(x));  // false


//The Boolean value of -0 (minus zero) is false

let x1 = -0;
console.log(Boolean(x1));  // false



// The Boolean value of "" (empty string) is false

let y = "";
console.log(Boolean(y));  // false


// The Boolean value of undefined is false

let a;
console.log(Boolean(a));  // false


// The Boolean value of null is false

let b = null;
console.log(Boolean(b));  // false

let a1 = 10 / "hello";
console.log(Boolean(a1));   // false



/*---------------- JavaScript Booleans as Objects ---------------- */

// Normally JavaScript booleans are primitive values created from literals

let x2 = false;
console.log(typeof x2);  // boolean

// But booleans can also be defined as objects with the keyword new

let y1 = new Boolean(false);
console.log(y1)//  Boolean false {}
console.log(typeof y1);  // object


/*
    -   Do not create Boolean objects.

    -   The new keyword complicates the code and slows down execution speed.

    -   Boolean objects can produce unexpected results

*/

let value1 = false;   // eita boolean
let value2 = new Boolean(false);  // eita boolean object

console.log(value1 == value2) //  true return korbe 2tai boolean but not same type boolean
console.log(value1 === value2) //  false return korbe 2tai boolean but not same type boolean

console.log(typeof value1);  // boolean
console.log(typeof value2); // object 



// Comparing two JavaScript objects always return false
let value3 = new Boolean(false);

console.log(value2 === value3);  // false