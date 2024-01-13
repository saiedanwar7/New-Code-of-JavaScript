/* ==================== JavaScript typeof ================

The typeofoperator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

But, the typeof operator always returns a string (containing the type of the operand).


In JavaScript there are 5 different data types that can contain values

string
number
boolean
object
function

There are 6 types of objects:

Object
Date
Array
String
Number
Boolean


 2 data types that cannot contain values:

null
undefined


Primitive Data
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined




*/

/*
The typeof Operator
You can use the typeof operator to find the data type of a JavaScript variable.
*/

console.log(typeof "John");                 // Returns "string"
console.log(typeof 3.14);                   // Returns "number"
console.log(typeof NaN);                    // Returns "number"
console.log(typeof false);                  // Returns "boolean"
console.log(typeof [1,2,3,4]);              // Returns "object"
console.log(typeof {name:'John', age:34});  // Returns "object"
console.log(typeof new Date());             // Returns "object"
console.log(typeof function () {});         // Returns "function"

var myCar;
console.log(typeof myCar);                  // Returns "undefined" *
console.log(typeof null);                   // Returns "object



/*
        ---------------- Complex Data ---------------

The typeof operator can return one of two complex types:

    1. function
        
        -   The typeof operator does not return "object" for functions

    2. object

        -   The typeof operator returns "object" for - objects, arrays, and null
        -   The typeof operator returns "object" for arrays because in JavaScript arrays are objects


*/

typeof function myFunc(){}   // Returns "function"

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"






/*
    
    The Data Type of typeof

    -   The typeofoperator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

    -   But, the typeof operator always returns a string (containing the type of the operand).

*/

console.log( typeof {name: 'saied', age:26}); // object
console.log( typeof typeof {name: 'saied', age:26}); // typeof er typeof hocche 'string'


/*
    -------------------- The constructor Property ---------------------

    -   The constructor property returns the constructor function for all JavaScript variables
    -   constructor means - create something
    -   kono data type er sathe constructor diye call korle sei data type er capital function return hishabe paben


*/

console.log("John".constructor );               // Returns function String()  {[native code]}
console.log((3.14).constructor);                // Returns function Number()  {[native code]}
console.log(false.constructor);                 // Returns function Boolean() {[native code]}
console.log([1,2,3,4].constructor);             // Returns function Array()   {[native code]}
console.log({name:'John',age:34}.constructor);  // Returns function Object()  {[native code]}
console.log(new Date().constructor);            // Returns function Date()    {[native code]}
console.log(function () {}.constructor);        // Returns function Function(){[native code]}


// You can check the constructor property to find out if an object is an Array (contains the word "Array")

function isArray(myArray){
    console.log(myArray.constructor);  // return capital - Array function
    console.log(myArray.constructor.toString().indexOf("Array") > -1);  // return capital - Array function and return true


}

isArray([1, 2, 3, 4]); // array diyeci tai true return korbe

// isArray({fname: "saied"});  // object dile false return korbe




//  even simpler, you can check if the object is an Array function

function isArray1(myArray1){
    console.log((myArray1.constructor === Array));
}

isArray1({fname: "Saied"});
isArray1([1, 2, 3]);

/*
 ---------------------- Undefined ----------------------

    -   In JavaScript, a variable without a value, has the value undefined. The type is also undefined
    -   jodi kono value ekta bishal object, tahole setake empty kore deyar easy way hocche - undefined declare kore deya
    

*/


let car = ['a', 'b', 'c'];
console.log(car.length);

car = undefined;
console.log(car); // undefined



/*
            Empty Values

    -   An empty value has nothing to do with undefined.

    -   An empty string has both a legal value and a type.

*/

let car1 = "";    // The value is "", the typeof is "string"

console.log(typeof car1); // string



/*

    -----------------------     Null    -----------------------------

    -   In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

    -   Unfortunately, in JavaScript, the data type of null is an object.

    -   You can consider it a bug in JavaScript that typeof null is an object. It should be null.

*/

// You can empty an object by setting it to null

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;

console.log(person); // null  - person er r kono reference ei thakbe na memory te



/*
    ----------------- Difference Between Undefined and Null -----------------

    -   undefined and null are equal in value but different in type

*/

console.log(typeof undefined);      // undefined 
console.log(typeof null);           // object

console.log(null === undefined);     // false
console.log(null == undefined);      // true




/*
    --------------- The instanceof Operator -----------------

    -   The instanceof operator returns true if an object is an instance of the specified object

*/

const cars = ["Saab", "Volvo", "BMW"];


console.log((cars instanceof Array));  //
console.log((cars instanceof Object));  //
console.log((cars instanceof String));  //
console.log((cars instanceof Number));  //