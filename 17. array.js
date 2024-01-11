





const fruits = ["Banana", "Orange", "Apple", "Mango"];

//------------ forEach function ------------

function myFunction(value){
    console.log(value);

}

fruits.forEach(myFunction)  // function reference eita/ function ke call kori nai call korar jonno () dite hoy.upore giye function call korbe

console.log("Finished");


//------------ isArray ----------

const numbers = [1, 2, 3]

const persons = {name: 'Sumit', age: 35}


console.log(typeof numbers)   // show object
console.log(typeof persons)   // show object

let arr1 = Array.isArray(numbers)
let arr2 = Array.isArray(persons)

console.log(arr1)
console.log(arr2)




/* ================== JavaScript Arrays  ===============


    -   Why Use Arrays?
    -   Creating an Array
    -   Using the JavaScript Keyword new
    -   Accessing Array Elements
    -   Changing an Array Element
    -   Converting an Array to a String
    -   Access the Full Array
    -   Arrays are Objects
    -   Array Elements Can Be Objects
    -   Array Properties and Methods
    -   The length Property
    -   Accessing the First Array Element
    -   Accessing the Last Array Element
    -   Looping Array Elements
    -   Adding Array Elements
    -   Associative Arrays
    -   When to Use Arrays. When to use Objects.
    -   JavaScript new Array()
    -   A Common Error
    -   How to Recognize an Array

*/


//   An array is a special variable, which can hold more than one value
//  It is a common practice to declare arrays with the const keyword.


// arrays create  -->  const array_name = [item1, item2,.....];


const cars = ["saied", "Volvo", "BMW"];


/*
Why Use Arrays?

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?



The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.


*/


// Spaces and line breaks are not important. A declaration can span multiple lines:

const cars1 = [
    "Anwar",
    "Range Rover",
    "BMW"

];


// You can also create an array, and then provide the elements:


const cars2 = [];

cars2[0] = "Saied";
cars2[1] = "Volvo";
cars2[2] = "BMW";

console.log(cars2);


/*
Using the JavaScript Keyword new

const cars = new Array("Saab", "Volvo", "BMW");

    The two examples above do exactly the same.

    There is no need to use new Array().

    For simplicity, readability and execution speed, use the array literal method.

*/




/*
Accessing Array Elements
You access an array element by referring to the index number:

*/


const cars3 = ["Saab", "Volvo", "BMW"];
let car = cars3[1];

console.log("Array number One Value is: ", car);  // Array number One Value is:  Volvo



/*
Changing an Array Element
This statement changes the value of the first element in cars:

*/

cars3[0] = "Saied";
console.log("Arrays New Zero Position Value is:", car); // Arrays New Zero Position Value is: Volvo



/*
Converting an Array to a String
The JavaScript method toString() converts an array to a string of (comma separated) array values.


*/


const fruit_list = ["Banana", "Orange", "Apple", "Mango"];

let string_fruits = fruit_list.toString();
console.log(string_fruits);   // Banana,Orange,Apple,Mango


/*
Access the Full Array
With JavaScript, the full array can be accessed by referring to the array name:

*/

const new_fruits = ["Banana", "Orange", "Apple", "Mango"];

// let fLen = new_fruits.length;

// for (i = 0; i < fLen; i++){
//     // console.log(i);
//     console.log(new_fruits[i]);
// }

// // console.log(fruit_list);



//----------- view array item only -------------


const myFruitsList = ["Banana", "Orange", "Apple", "Mango"];

let fruit_lan = myFruitsList.length;  // console.log(fruit_lan);  // 4

for(i = 0; i < fruit_lan; i++){
    console.log(`My Fruits List ${i}: `, myFruitsList[i]);
}




/*
        Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.



Arrays use numbers to access its "elements". In this example, person[0] returns John:
Objects use names to access its "members". In this example, person.firstName returns John:



*/


// access array value

const person = ["John", "Doe", 46];

let array_value = person[0];
console.log(array_value);  // John



// object value 

const person1 = {firstName:"John", lastName:"Doe", age:46};
let object_value_access = person1.firstName;

console.log(object_value_access);  // John


/*
Array Elements Can Be Objects

JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array

-  array er moddhe object function, number, string, another array different type of value rakhte parbo


myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

*/


/*
Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods


*/


cars.length   // Returns the number of elements
cars.sort()   // Sorts the array




// Accessing the First Array Element


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits1[0];   // Banana

// Accessing the Last Array Element

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let find_fruits2 = fruits2[fruits2.length - 1 ];
console.log(find_fruits2);    // Mango


/*
Looping Array Elements
One way to loop through an array, is using a for loop:

*/

//--------------- ways one ----------------

// direct array teke niye call kore

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];

for(let i = 0; i < fruits5.length; i++){
    console.log(i);  // return array index
    console.log(fruits5[i]);   // array value
}

// ------------- ways two ---------------
// alada variable declare kore

const fruits6 = ["kola", "komola", "apple", "alu"];

let fruits_len = fruits6.length;

for(let i = 0; i < fruit_lan; i++){
    console.log(i);    // array index
    console.log(fruits6[i]);  // array value
}




//  You can also use the Array.forEach() function:


const fruits9 = ["Banana", "Orange", "Apple", "Mango"];

function myFunction(value, index){
    console.log(`Array Index is ${index} and Value is ${value}`)
}

fruits.forEach(myFunction);



/*
                            Adding Array Elements
The easiest way to add a new element to an array is using the push() method


*/

const myFruits =  ["Banana", "Orange", "Apple"];

let addItem = myFruits.push("Lemon");  // add on as a last value
console.log(myFruits);  


/*

WARNING !
Adding elements with high indexes can create undefined "holes" in an array



*/

const fruits10 = ["Banana", "Orange", "Apple"];
fruits10[6] = "Lemon"; // Creates undefined "holes" in fruits

console.log(fruits10);  // 
console.log(fruits10.length);  // take extra spaces



/*
Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  


const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"

*/


/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

// all are undefined 0

*/


/*
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.


When to Use Arrays. When to use Objects.

JavaScript does not support associative arrays.  -- with name value

You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

*/



/*
JavaScript new Array()
JavaScript has a built-in array constructor new Array().

But you can safely use [] instead.

These two different statements both create a new empty array named points:


*/

const points1 = new Array();

const points2 = [];

console.log(points1);   // return empty array
console.log(points2);   // return empty array



// These two different statements both create a new array containing 6 numbers


const points3 = new Array(40, 100, 1, 5, 25, 10);
const points4 = [40, 100, 1, 5, 25, 10];

console.log(points3); // [40, 100, 1, 5, 25, 10]
console.log(typeof points3)  // object
console.log(Array.isArray(points3));   // true

console.log(points4); // [40, 100, 1, 5, 25, 10]
console.log(typeof points4); // object

// value same but type different

let isBothSame = points3 === points4;
console.log(isBothSame);   // false 



/*
---------- The new keyword can produce some unexpected results --------

*/// Create an array with three elements:
const points5 = new Array(40, 100, 1);  // 
console.log(points5);  // array with 3 value

// Create an array with two elements:
const points6 = new Array(40, 100);
console.log(points6); // array with 2 value;


// Create an array with one element??
const points7 = [40];
console.log(points7);



const points8 = new Array(40);  // length 40 and empty
console.log(points8);


/*
The typeof operator returns object because a JavaScript array is an object.

Solution 1:
To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

------------------- Array.isArray() ----------------

*/

const myArray =["Banana", "Orange", "Apple"];

console.log(Array.isArray(myArray));  // return array
console.log("When see typeof is show object: ", typeof myArray);

// because javaScript array is a object type