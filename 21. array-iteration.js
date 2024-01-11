//============= JavaScript Array Iteration ================

/*
----------------- Array Iteration Methods  ---------------------

Array iteration methods operate on every array item:

Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRigth()

Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)



Se Also:
Basic Array Methods
Array Search Methods
Array Sort Methods	



*/

/*------------- forEach() -------------

 The forEach() method calls a function (a callback function) once for each array element.



*/


const numbers = [45, 4, 9, 16, 25]


function myFunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("----------------");
}

numbers.forEach(myFunction);




/* -----------------  Array Map() -------------------

    -   The map() method creates a new array by performing a function on each array element.

    -   The map() method does not execute the function for array elements without values.

    -   The map() method does not change the original array.

    -   map() return something


Note : map er jaigai kisu na kisu return korte hobe


*/


const numbers1 = [45, 4, 9, 16, 25];

function myFunction(value){
    return value * 2;
}


const newNumbers = numbers1.map(myFunction);
console.log(newNumbers);      // [90, 8, 18, 32, 50]
console.log("Old Numbers: ", numbers1)  // [45, 4, 9, 16, 25]




/*------------ JavaScript Array filter() ----------

    -   The filter() method creates a new array with array elements that pass a test.

    Note that the function takes 3 arguments:

    The item value
    The item index
    The array itself
    
    In the example above, the callback function does not use the index and array parameters, so they can be omitted:
 
*/



const numbers2 = [45, 4, 9, 16, 25];


function myFunction(value, index, array){    //, index, array
   
    return value > 10;
 
}

const newNubmers2 = numbers2.filter(myFunction);
console.log("New Numbers:", newNubmers2);
console.log("Old Numbers: ", numbers2)




/* --------------- Array reduce() ----------------

    -   The reduce() method runs a function on each array element to produce (reduce it to) a single value

    -   The reduce() method works from left-to-right in the array

    -   The reduce() method does not reduce the original array

    -   The reduce() method can accept an initial value

    -   reduce() mean choto kora sob gula value theke choto ekta value te convert kora

    -   First initial value is Zero

    -   Amra chaile initial value set kore dite parbo


    Note that the function takes 4 arguments:

    -   The total (the initial value / previously returned value)
    -   The item value
    -   The item index
    -   The array itself


*/



const numbers3 = [45, 4, 9, 16, 25];


function myFunction(total, value, index, array){  
    console.log(`${index} Initial ${value} of Total:`, total);
    return total + value;
 
}

// const newNubmers = numbers3.reduce(myFunction);  // 99

const newNubmers3 = numbers3.reduce(myFunction, 100);   // set initial value

console.log("New Numbers:", newNubmers3);  
console.log("Old Numbers: ", numbers3)




/* ---------------  Array reduceRight() --------------


    -   The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

    -   The reduceRight() works from right-to-left in the array. See also reduce().

    -   The reduceRight() method does not reduce the original array.

*/


const numbers4 = [45, 4, 9, 16, 25];


function myFunction(total, value, index, array){  
    console.log("First Initial Value of Total:", total);
    console.log("--------------------------------------")
    return total + value;
 
}

// const newNubmers4 = numbers4.reduce(myFunction);

const newNubmers4 = numbers4.reduceRight(myFunction, 10);   // set initial value

console.log("New Numbers4:", newNubmers4);  
console.log("Old Numbers4: ", numbers4)




/* ------------ Array.every()  ----------------

    -   he every() method checks if all array values pass a test.
    -   LIKE filter but filter return newArray or every return only one single value.
    -   array te sob gula value ke ei test pass kora lagbe taholei return korbe true



*/


const numbers5 = [45, 4, 9, 16, 25];


function myFunction(value, index, array){  
    return value  > 10;   // check every value with conditions 
 
}

const newNubmers5 = numbers5.every(myFunction);
console.log("New Numbers5:", newNubmers5);  









/* ------------ Array.some()  ----------------

    -   The every() method checks if all array values pass a test.
   
    -   array te sob gula value ke ei test pass kora lagbe na sudu ekta value ei test pass korlei return korbe true



*/


// const numbers = [45, 4, 9, 16, 25];


// function myFunction(value, index, array){  
 
//     // return value  > 10;   // check every value with conditions --  true
//     return value  > 180;   // check every value with conditions   --  false
 
// }

// const newNubmers = numbers.some(myFunction);

// console.log("New Numbers:", newNubmers);  




/*-------------- Array.indexOf() / lastIndexOf----------------

    -   The indexOf()  method searches an array for an element value and returns its positon.

    Note: The first item has position 0, the second item has position 1, and os on.


*/

// const fruits = ["Apple", "Orange", "Apple", "Mango"];

// let position = fruits.indexOf("Apple") + 1;

// let position2 = fruits.lastIndexOf("Apple") + 1;


// console.log(position);
// console.log(position2);




/* -------------- Array.includes()  -----------------

    - This allows us to check if an element is present in an array (including NaN, unlike indexOf).
    - If value in - return true


*/

// const fruits2 = ["Apple", "Orange", "Apple", "Mango"];


// let findValue = fruits.includes("Orange");

// console.log(findValue);





/* ---------------- Array.find() ----------------

    - The find() method returs the value of the first array element that passes a test function.
    - 


*/


// const numbers = [4, 5, 6, 19, 20];


// function myFunction(value, index, array){
//     return value > 18;  // return first bigger value then 18
//                         // boro na pele undefined return korbe
// }


// const newNumbers = numbers.find(myFunction);

// console.log(newNumbers);



/* ----------------- Array.from()  -----------------

    -   The Array.from() method returns an Array object from any object with a length property or any iterable object.


*/

    const arrayWord = Array.from("ABCDEFG");
    console.log("Return Iterable Object: ", arrayWord);






/*  -------------- Array keys() ----------------

    -   The Array.keys() method returns an Array Iterator object with the keys of an array.


*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const keys = fruits.keys();

console.log(fruits);

for(let x of keys){
    console.log(x);
}



/*  ---------------- JavaScript Array Spread (...)  --------------

    -   The ... operator expands an iterable (like an array) into more elements:


*/

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);