/* ====================  JavaScript Sorting Arrays =================

Alpabetic Sort
=============

Array sort()       --- change orginal array
Array toSorted()   --- Never change orginal array provide new array


Array reverse()     --- change orginal array
Array toReversed()  --- Never change orginal array provide new array

Sorting Objects

Numeric Sort
============

Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()


*/

/*
Sorting an Array
The sort() method sorts an array alphabetically:

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); //  ['Apple', 'Banana', 'Mango', 'Orange'];

console.log(fruits)




/*
JavaScript Array toSorted() Method

ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

*/

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

console.log(sorted);
console.log(months);





/*
Reversing an Array
The reverse() method reverses the elements in an array:

*/


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits2.reverse()) ; //  ['Mango', 'Apple', 'Orange', 'Banana']


/*
JavaScript Array toReversed() Method
ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


*/


const months1 = ["Jan", "Feb", "Mar", "Apr"];
const reversed1 = months1.toReversed();

console.log(reversed1);
console.log(months1);





//By combining sort() and reverse(), you can sort an array in descending order




/*
Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.


*/

// You can fix this by providing a compare function:

const points2 = [40, 100, 1, 5, 25, 10];

points2.sort(function(a, b){
    
    return a - b;

});

console.log(points2);


// Use the same trick to sort an array descending:

const points3 = [40, 100, 1, 5, 25, 10];

points3.sort(function(a, b){
    return b - a;

})

console.log(points3);


/*-------------------- The Compare Function ------------------

    -   The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments

    When the sort() function compares two values, it sends the values to the compare function, 
    and sorts the values according to the returned (negative, zero, positive) value.

    -   If the result is negative, a is sorted before b.

    -   If the result is positive, b is sorted before a.

    -   If the result is 0, no changes are done with the sort order of the two values.

Example:

    -   The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

*/


/*
=================== Find the Lowest (or Highest) Array Value =========================

    -   There are no built-in functions for finding the max or min value in an array.

    To find the lowest or highest valu you have 3 options:

    1.  Sort the array and read the first or last element
    2.  Use Math.min() or Math.max()
    3.  Write a home made function


*/



/*
----------------- Find Min or Max with sort() ---------------

After you have sorted an array, you can use the index to obtain the highest and lowest values.

*/

// Way - 1 :  Sort Ascending

//===================== Max Array ================

const num1 = [40, 100, 1, 5, 25, 10];

num1.sort(function(a, b){
    return a - b;
})

console.log(num1); // change orginal array  [1, 5, 10, 25, 40, 100]

// lowest value 
console.log(num1[0]);   // now array lowest value is : 1

// highest value
let highest_value = num1[num1.length-1];
console.log(highest_value);  // 100



// --- Way - 2:  Use Math.min() or Math.max() -----

const points11 = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr){
    return Math.max.apply(null, arr);  // Math.max.apply for minimum value
}

let max_value = myArrayMax(points11);
console.log("The highest value of Array is:", max_value);   // 100
