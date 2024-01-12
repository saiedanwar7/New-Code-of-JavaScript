/*================ JavaScript Map ==================

A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.


        Essential Map Methods


        Method	Description

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map


How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()


 - difference between map and object is object key always string type but map data type can be different type.




 JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:

                    Object                                  	Map
    
    Iterable	Not directly iterable	                    Directly iterable

    Size    	Do not have a size property	                Have a size property
    
    Key Types Keys must be Strings (or Symbols)	            Keys can be any datatype

    Key Order	Keys are not well ordered	                Keys are ordered by insertion

    Defaults	Have default keys	                        Do not have default keys


*/

/*
The new Map() Method
You can create a Map by passing an Array to the new Map() constructor

*/

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  console.log(fruits);

/*

  The set() Method
  
  - You can add elements to a Map with the set() method

*/

const fruits1 = new Map();

fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits1);


// The set() method can also be used to change existing Map values

fruits1.set("apples", 600);

console.log(fruits1); 


/*
The get() Method
The get() method gets the value of a key in a Map
*/

console.log(fruits1.get("apples"));  // 600




/*
The size Property
The size property returns the number of elements in a Map

*/

console.log(fruits1.size);  // 3


/*
    -------------- The delete() Method ------------

    -   The delete() method removes a Map element

*/

console.log(fruits1.delete("apples"));
console.log(fruits1);


/*
The has() Method
The has() method returns true if a key exists in a Map

*/

console.log(fruits1.has("apples"));  // false
console.log(fruits1.has("bananas"));  // true


/*
The forEach() Method
The forEach() method calls a function for each key/value pair in a Map

*/

let text = "";

fruits.forEach(function(value, key){
    console.log(key, '=', value);
   
    text = key + ' = ' + value;
    console.log(text);
});


/*
The entries() Method
The entries() method returns an iterator object with the [key, values] in a Map

*/

let text1 = "";

for(const x of fruits.entries()){
    console.log(x);

    text1 += " "+ x;
    console.log(text1);
}

console.log(text1);