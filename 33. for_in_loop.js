/*
        JavaScript For In

        The For In Loop
The JavaScript for in statement loops through the properties of an Object


    Syntax:

    for (key in object) {
  // code block to be executed
    }

*/


/*

Example Explained
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]


*/
const person = {fname:"John", lname:"Doe", age:25};

for(let x in person){
    console.log(x);   // fname, lname, age
    console.log(person[x]); // print value 'John', 'Doe', 25
    // console.log(person.x); // eibave dile undefined dibe
}

/*

For In Over Arrays
The JavaScript for in statement can also loop over the properties of an Array

Syntax
for (variable in array) {
  code
}
*/


const numbers = [45, 4, 9, 16, 25];

for(let number in numbers){
    console.log(number);  // print array index
    console.log(numbers[number]);  // array er value print korbe  45, 4, 9, 16, 25
}

/*

Note:
------

Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

*/


/*
Array.forEach()
The forEach() method calls a function (a callback function) once for each array element.

*/