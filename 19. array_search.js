/*===============  JavaScript Array Search ================



    indexOf()           -- return position of element/value

    lastIndexOf()       -- return last position of element

    includes()          -- return true and false

    find()              -- return the first array matching value/element
    
    findLast()          -- return the last array matching value/element

    findIndex()         -- return array element first matching index

    findLastIndex()     -- return last array element index


*/


/*
JavaScript Array indexOf()
The indexOf() method searches an array for an element value and returns its position.
Array.indexOf() returns -1 if the item is not found.
If the item is present more than once, it returns the position of the first occurrence.
*/

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");

console.log(position); // return postion 0


/*
================ Array lastIndexOf()  =================


// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
//  last side theke je value match korbe seta return korbe


*/

const fruits2 = ["Apple", "Orange", "Apple", "Mango"];

let position2 = fruits2.lastIndexOf("Apple");

console.log(position2);    // return 2


/*================== JavaScript Array includes()
 ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
    -   includes()  return true false
    -  Array.includes() allows to check for NaN values. Unlike Array.indexOf().

*/

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

let is_find_value = fruits3.includes('Orange');

console.log(is_find_value);  //  return true



/*
                    JavaScript Array find()

The find() method returns the value of the first array element that passes a test function.
    
    -   It's return array Element
    -   find() is an ES6 feature (JavaScript 2015)


    Note that the function takes 3 arguments:

The item value
The item index
The array itself


*/


const numbers = [10, 30, 34, 25, 70, 80, 100];

function myFunction(value, index, array){   // 

    return value > 60;
}

let first_element_find_by_condition = numbers.find(myFunction);

console.log(first_element_find_by_condition); // 70




/*

JavaScript Array findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

Note that the function takes 3 arguments:

The item value
The item index
The array itself

*/

const numbers2 = [10, 30, 34, 25, 70, 80, 100];

function myFunction2(value){
    return value > 77;
}

let find_index_number = numbers2.findIndex(myFunction2);
console.log(find_index_number); //  5



/*
JavaScript Array findLast() Method
ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.


const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);  // 42

*/



/*
JavaScript Array findLastIndex() Method
The findLastIndex() method finds the index of the last element that satisfies a condition.

*/