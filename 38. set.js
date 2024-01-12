/*
    ======================= JavaScript Sets =================

    -   A JavaScript Set is a collection of unique values.

    -   Each value can only occur once in a

    ----------------- Essential Set Methods -----------------

    Method                  	Description

    new Set()	                Creates a new Set

    add()                   	Adds a new element to the Set

    delete()                	Removes an element from a Set

    has()                   	Returns true if a value exists in the Set

    forEach()	                Invokes a callback for each element in the Set

    values()                	Returns an iterator with all the values in a Set

    Property                	Description

    size	                    Returns the number of elements in a Set




    How to Create a Set
------------------------------------

    You can create a JavaScript Set by

    -   Passing an Array to new Set()
    -   Create a new Set and use add() to add values
    -   Create a new Set and use add() to add variables

*/


/*
    ------------ The new Set() Method -----------

    -   Pass an Array to the new Set() constructor

*/

const letters = new Set(['a', 'b', 'c']);

console.log(letters); //  Set {'a', 'b', 'c'}

console.log(letters.size); // 3




// Create a Set and add values:

const letters1 = new Set();

letters1.add("a");
letters1.add("b");
letters1.add("c");

console.log(letters1)


/*
            The forEach() Method

            The forEach() method invokes (calls) a function for each Set element

*/

const letters2 = new Set(["a","b","c"]);

let text = "";

letters2.forEach(function(value){
    console.log(value);   // 'a', 'b', 'c'

    text = value;
    console.log(text)
})




/*
        The values() Method

        The values() method returns a new iterator object containing all the values in a Set

*/

console.log(letters.values());   // Returns [object Set Iterator]

let myText = "";

for(const x of letters.values()){
    console.log(x); // 'a', 'b', 'c'
    console.log(typeof letters); // object
}