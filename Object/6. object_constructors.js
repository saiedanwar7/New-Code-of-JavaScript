/* ==================== JavaScript Object Constructors ==================

Notes :
-------
    -   It is considered good practice to name constructor functions with an upper-case first letter.

About this :
------------
In a constructor function this does not have a value. It is a substitute for the new object. 
The value of this will become the new object when a new object is created.
*/

// eivabe every person er jonno separate separate object create korte hocche 

const saied = {
    firstName: "Saied",
    lastName: "Anwar",
    age : 26,
    fullName : function() {
        return this.firstName + ' ' + this.lastName;

    }
};


const hasan = {
    firstName: "Mahmudul",
    lastName: "Hasan",
    age : 30,
    fullName : function() {
        return this.firstName + ' ' + this.lastName;

    }
};


console.log(saied);
console.log(hasan);



// protibar separate separate object create na kore ekta phototype create kore pelte pari object Constructors use kore
// In Constructor function use capital letter


function Person(first, last, age){    // constructor function
    this.firstName = first; 
    this.lastName  = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
};


const SAIED = new Person ("Saied", "Anwar", 25);
const HASAN = new Person ("Mahmudul", "Hasan", 30);

console.log(SAIED);  // Person {firstName: 'Saied', lastName: 'Anwar', age: 25, fullName: function()}
console.log(HASAN);

// We can add new property

SAIED.country = "Bangladesh";

console.log(SAIED);


/*
    ---------------------- Adding a Property to a Constructor ----------------------

    -   You cannot add a new property to an object constructor the same way you add a new property to an existing object:
                    
                Person.nationality = "English";

    -   To add a new property to a constructor, you must add it to the constructor function:
*/

/*
    ---------------------- Adding a Method to an Object  -------------------

    Adding a new method to an existing object is easy:

*/



/* ------------------- Built-in JavaScript Constructors  --------------------

    JavaScript has built-in constructors for native objects:

    new String()    // A new String object
    new Number()    // A new Number object
    new Boolean()   // A new Boolean object
    new Object()    // A new Object object
    new Array()     // A new Array object
    new RegExp()    // A new RegExp object
    new Function()  // A new Function object
    new Date()      // A new Date object



*/