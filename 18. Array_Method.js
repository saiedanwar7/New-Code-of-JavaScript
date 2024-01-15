/*================= Basic Array Methods

1. Array length
2. Array toString()
3. Array at()
4. Array join()
5. Array pop()
6. Array push() 
7. Array shift()
8. Array unshift()
9. Array delete()
10. Array concat()
11. Array copyWithin()
13. Array flat()
14. Array splice()
15. Array toSpliced()
16. Array slice()



*/

/*
    1. Array length
The length property returns the length (size) of an array

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

console.log(size);  // 4



/*
    2. Array toString()

    The JavaScript method toString() converts an array to a string of (comma separated) array values.

*/

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let to_convert_string = fruits2.toString();

console.log(to_convert_string); // Banana,Orange,Apple,Mango


/*
3. JavaScript Array at()

The at() method returns an indexed element from an array.

The at() method returns the same as [].

*/

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let find_fruits_index_value = fruits3[2];

console.log(find_fruits_index_value); // Apple

/*
-------------- Note ----------------
Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.

This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

The at() method was introduced in ES2022 to solve this problem.

*/


/*

  4.  Array join()
  - The join() method also joins all array elements into a string.

*/

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

let array_join1 = fruits.join("");
console.log(array_join1)   // BananaOrangeAppleMango

let array_join2 = fruits.join(" ");
console.log(array_join2)  // Banana Orange Apple Mango


let array_join3 = fruits.join(",");
console.log(array_join3)  // Banana,Orange,Apple,Mango

let array_join4 = fruits.join(" * ");
console.log(array_join4) // Banana * Orange * Apple * Mango


/*
Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.


*/


/*
    5   JavaScript Array pop()
The pop() method removes the last element from an array:

*/

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];

let remove_element = fruits5.pop();

console.log(remove_element); // Mango

console.log(fruits5);



/*
  6  JavaScript Array push()
The push() method adds a new element to an array (at the end)
The push() method returns the new array length

*/

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];

let add_element_in_array = fruits6.push("Kiwi");

console.log(add_element_in_array);  // 5

console.log(fruits6);  //  ["Banana", "Orange", "Apple", "Mango", "Kiwi"]



/*
Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.

   7.  JavaScript Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.
The shift() method returns the value that was "shifted out"

*/


const fruits7 = ["Banana", "Orange", "Apple", "Mango"];

let array_shift = fruits7.shift();
console.log(array_shift);   // Banana

console.log(fruits7)  //    ["Orange", "Apple", "Mango"]
console.log(fruits7.length)  // 3



/*
  8.   JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

The unshift() method returns the new array length:
*/

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];

let add_element_beginning = fruits8.unshift("Lemon");

console.log(add_element_beginning)  // 5

console.log(fruits8);   //  ["Lemon", "Banana", "Orange", "Apple", "Mango"];




/*
            Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

*/

const fruits_change_value = ["Banana", "Orange", "Apple", "Mango"];
fruits_change_value[0] = "Kiwi";

console.log(fruits_change_value);   //["Kiwi", "Orange", "Apple", "Mango"];


/*
JavaScript Array length
The length property provides an easy way to append a new element to an array:

*/

const fruits_array = ["Banana", "Orange", "Apple", "Mango"];
fruits_array[fruits_array.length] = "Kiwi";

console.log(fruits_array);   // ["Banana", "Orange", "Apple", "Mango", "Kiwi"];



/*
JavaScript Array delete()
Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead.

*/


const fruits_delete = ["Banana", "Orange", "Apple", "Mango"];
delete fruits_delete[0];

console.log(fruits_delete);  // [empty, 'Orange', 'Apple', 'Mango'];


/*
    10. Array concat()

    The concat() method creates a new array by merging (concatenating) existing arrays
    The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments.

*/


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = arr1.concat(arr2);
const myChildren2 = arr1.concat(arr2, arr3);

console.log(myChildren);

console.log(myChildren2); 



/* The concat() method can also take strings as arguments
     Merging an Array with Values)
    -   Return new array
*/
const new_arr = ["Emil", "Tobias", "Linus"];

const myBoy = new_arr.concat("Peter");

console.log(myBoy);  // ['Emil', 'Tobias', 'Linus', 'Peter']
console.log(new_arr);  // ["Emil", "Tobias", "Linus"];



/*
    10  Array copyWithin()
The copyWithin() method copies array elements to another position in an array
Note
The copyWithin() method overwrites the existing values.

The copyWithin() method does not add items to the array.

The copyWithin() method does not change the length of the array.
*/


/*
Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.

Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

11. JavaScript Array flat()

ES2019 Introduced the Array flat() method.

The flat() method creates a new array with sub-array elements concatenated to a specified depth.

*/

const myArr = [[1,2], [3,4], [5, 6]];

let myArr_new = myArr.flat();

console.log(myArr_new); [1, 2, 3, 4, 5, 6]

/*

  14. Array splice()

  Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

*/

const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
let add_item  = fruits14.splice(2, 0, "Lemon", "Kiwi");

console.log(add_item);   // empty array return kore

console.log(fruits14);   // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];



//--------------- Item delete by splice  ---------------

const fruits15 = ["Banana", "Orange", "Apple", "Mango"];
let delete_item = fruits15.splice(2, 2, "Lemon", "Kiwi");

console.log(delete_item);
console.log(fruits15);

// 15. Array toSpliced()
// 16. Array slice()


/*
Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
   - Orginal Array change kore pele

*/


const fruits16 = ["Banana", "Orange", "Apple", "Mango"];
let delete_first_element = fruits16.splice(0, 1);


console.log(delete_first_element);  // ['Banana']
console.log(fruits16);   // ["Orange", "Apple", "Mango"];


/*
JavaScript Array toSpliced()

ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

  The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, 

  keeping the original array unchanged, while the old method altered the original array.

*/


const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

console.log(months);  // ["Jan", "Feb", "Mar", "Apr"];
console.log(spliced);   // ["Feb", "Mar", "Apr"];



/*
    JavaScript Array slice()
The slice() method slices out a piece of an array into a new array:
Slice out a part of an array starting from array element 1
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.
*/

const fruits17 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const after_cut_value = fruits17.slice(1);  // 1 is the element 

console.log(fruits17);
console.log(after_cut_value); 



// slice e je number dibo sei number bad diye new array return korbe

const fruits18 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const after_cut_value1 = fruits18.slice(3);

console.log(fruits18);  // orginal array is ok

console.log(after_cut_value1); // new array ["Apple", "Mango"];



/*

The slice() method can take two arguments like slice(1, 3).
The method then selects elements from the start argument, and up to (but not including) the end argument.


*/

const fruits19 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const after_cut_value2 =  fruits19.slice(1, 3);

console.log("Old Array: ", fruits19);
console.log(after_cut_value2);
