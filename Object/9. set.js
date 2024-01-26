/*
    ===================  

    A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type.

 Set is like a Array, different between set and array 

 -  Array is a Collection of Value
 -  Set is a unique Value collection

*/

// Create a Set
const letters = new Set(["a","b","c"]);

console.dir(letters);

console.log(typeof letters);   // object

// ----------- je kono kisu instanceof dile oitar original type pabo ---------------------


console.log(letters instanceof Set);   // true


const iterable_letter = letters.values();

for (let l of iterable_letter){
    console.log(l);    // a b c
}
