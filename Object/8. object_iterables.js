
/*
    ========================== JavaScript Iterables ========================

    Iterable objects are objects that can be iterated over with for..of.

    Technically, iterables must implement the Symbol.iterator method.

    - Iterables object browser koror process ta hocche iterator


*/

/*  
    -   How do you know objects are iterables or not
    -   Check Object phototype, there is not found in object iterables function()

*/


const nums = {
    one: 1,
    two: 2, 
    three: 3
};

console.dir(nums);

// If you check the Array Object Phototype you found Array.iterators function 

const arr = [1, 2, 3, 4];

console.dir(arr);


/*
    -------------------------  JavaScript Iterators  -----------------------

    -   The iterator protocol defines how to produce a sequence of values from an object.

    -   An object becomes an iterator when it implements a next() method.

    -   The next() method must return an object with two properties:

        1.   value (the next value)
        2.   done (true or false)

        value	The value returned by the iterator(Can be omitted if done is true)
        
        done	true if the iterator has completed
        false if the iterator has produced a new value


*/



// Symbol.iterator function -  This is the mechanism, JavaScript know - Object is not iterables or Array is iterables

const arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next())    // {value: 1, done: false}
console.log(arrIterator.next())    // {value: 2, done: false}
console.log(arrIterator.next())    // {value: 3, done: false}
console.log(arrIterator.next())    // {value: 4, done: false}
console.log(arrIterator.next())    // loop sesh hoye gele value : undefined, done: true hobe





/*
    ----------------------- Iterating Over a String --------------------

    -   You can use a for..of loop to iterate over the elements of a string: 

*/




// ----------------- Array iterables ------------------

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i <numbers.length; i++){
    console.log(numbers[i]);  
}




// How work loop function just loop call iterator function

console.dir(numbers[Symbol.iterator]);   // return iterables function - ƒ values()
console.dir(numbers[Symbol.iterator]());   // return iterator next function () - Array Iterator

/* ----------------- Home Made Iterable ----------------

    -   This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:


*/

const myNumbers = {};

// make it iterable

myNumbers[Symbol.iterator] = function() {
    let n = 0;
    let done = false;

    return {
        
        next(){
            n += 10;
            if(n == 100) {done = true}
            return {
                value: n,
                done: done
            }
        }
    }
}

for (let num of myNumbers) {
    console.log(num);    // 10, 20, 30, 40 ......
}







// -----------------  for of use in array  -------------------

 
const numbers1 = [1, 2, 3, 4, 5];

for (let n of numbers){
    console.log(n);  // 1 2 3 4 5
}

/*
    Iterating Over a String
    You can use a for..of loop to iterate over the elements of a string:


*/