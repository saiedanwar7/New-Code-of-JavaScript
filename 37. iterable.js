/*  ================== JavaScript Iterables ================

Iterables are iterable objects (like Arrays).

- Array, String, Set, Map

Iterables can be accessed with simple and efficient code.

    -  Iterables can be iterated over with for..of loops
    -  Iterables means step step it's going through by index

      Note: 

    - javascript object are not iterable

    ------------- Iterating -------------

    -   Iterating is easy to understand.

    -   It simply means looping over a sequence of elements.

    Here are some easy examples:

    -   Iterating over a String
    -   Iterating over an Array


*/


/*
    The For Of Loop
The JavaScript for..of statement loops through the elements of an iterable object.

Syntax

for (variable of iterable) {
  // code block to be executed
}

*/





/*
    ------------    Iterating Over a String ---------------

    -   You can use a for..of loop to iterate over the elements of a string

*/

const name = "Bangladesh";

for(const x of name){
    console.log(x);  // 'B', 'a', 'n' like as
}


/*

     ---------------- Iterating Over an Array ----------------

    -   You can use a for..of loop to iterate over the elements of an Array
*/

const letters = ["a","b","c"];

for(const x of letters){
    console.log(x);  // 'a', 'b', 'c'
}



/*
      ---------------- Iterating Over a Set -----------------

    -   You can use a for..of loop to iterate over the elements of a Set

*/

const letters1 = new Set(["a","b","c"]);

for(const x of letters1){
    console.log(x); // 'a', 'b', 'c'
}


/*
        ------------------- Iterating Over a Map -----------------

    -   You can use a for..of loop to iterate over the elements of a Map

*/

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  for(const x of fruits){
    console.log(x); // ['apples', 500], ['bananas', 300], ['oranges', 200]
  }