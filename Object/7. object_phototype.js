/* ===================  JavaScript Object Prototypes  ================
    -   All JavaScirpt objects inherit properties and methods from a prototype
    -   prototype er moddhe je je property dibe seta all object er jonno accessable

*/

// Before we learn object constructor: 

function Person (first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

const myFather = new Person("Abdul", "Wadud", 63);
const mySelf = new Person("Saied", "Anwar", 63);

console.log(myFather); 
console.log(mySelf);

// We also learned that you can not add a new property to an existing object constructor

Person.nationality = "Bangladeshi";

console.log(myFather); // not add


/* To add a new property to a constructor, you must add it to the constructor function:

function Person (first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.nationality = "Bangladeshi";
}

*/

Person.prototype.nationality = 'English';

console.log(myFather.nationality);


// Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.



/*
    -   That's not right 

// We can modify standard JavaScript Objects 

const j = new String('john');

String.phototype.doingFun = function() {   // add doingFun method in phototype
    return "I am doing fun!";
}

// now we can call it

const x = "Bangladesh";
console.log(x.doingFun());

*/