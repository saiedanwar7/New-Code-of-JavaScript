
/*============= JavaScript Comparison and Logical Operators=============

    -   Comparison and Logical operators are used to test for true or false.

*/



/*
------------------------ Conditional (Ternary) Operator -----------------

JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

*/

//------------- ways - 1 ----------------------

let age = 17;

/*
if(age >= 18){
    console.log("You are adult!");
}else{
    console.log("You are not adult!");
}

*/

console.log(age >= 18 ? "you are adult" : "You are not Adult!");


//---- level 2 ----

let age2 = 20;
console.log( age2 >= 18 ? age2 < 30 ?  "You are an Adult!" : "You are Old" :"You are young!");

// 18 theke boro r 30 theke choto hole - you are an Adult dekhabe 
// 30 theke boro hole - you are old 
// 18 theke choto hole - you are young 



/*
Comparison Operators
Comparison operators are used in logical statements to determine equality or difference between variables or values.

Given that x = 5, the table below explains the comparison operators:


*/

let x = 5;


// equal to

console.log(x == 8) // false

// equal value and equal type

console.log(x === 5);
console.log(x === "5");  // false

// not equal 

console.log(x != 8); //true
console.log(x != 5); // false

console.log(x !== 5); // false  
console.log(x !== "5"); // true
console.log(x !== 8); //true


//  greater than or equal to
console.log(x >= 8);  // false
console.log(x <= 8); // true


/*
----------------    Logical Operators   --------------
Logical operators are used to determine the logic between variables or values

*/

let a = 6;
let b = 3;

// && and return true if both statement is true

console.log(a<10 && b > 1); // both statement true so return true

console.log(a<10 && b > 5); // one statement false so return false


// OR - ||    return true if one statement is true

console.log(a == 6 || b == 0); // true
console.log(a == 1 || b == 6 ); // false

// !  -> if not equal then return true

console.log(!(a == b)); // return true







/*
======================= Comparing Different Types ==================

    -   Comparing data of different types may give unexpected results.

    -   When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. 
    -   An empty string converts to 0. 
    -   A non-numeric string converts to NaN which is always false.

*/

console.log(2 < 12); true

console.log(2 < "12"); // true - becasue 1 is less than 2



// compare with string all return false


console.log(2 < "John"); // false
console.log(2 > "John"); // false
console.log(2 == "John"); // false


// When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

console.log("2" < "12"); // return false because 2 compare with first string which is 1 so 1 is less than 2.

console.log("2" > "12"); // return true because 2 compare with first string which is 1 so 1 is less than 2.

console.log("2" == "12"); // return false

let n = 2;

let num = n + "5";
console.log(num);
console.log(typeof num); 


// To secure a proper result, variables should be converted to the proper type before comparison



// let myAge = "jldfjlsdj"; 

let myAge = "20";

console.log(typeof myAge);

myAge = Number(myAge);
console.log(typeof myAge);
                             

if(isNaN(myAge)){
    console.log("Input is not a number");

}else{
    console.log(myAge < 18 ? "Too Young" : "Old enough");
}


//-------------- check title ---------

let title = "Saied";

console.log( title == "Saied" ? "I am Saied" : "I don't know you!");



/*
    --------------- The Optional Chaining Operator (?.) --------------

The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

*/

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name);   // undefined

console.log(car?.model);  // '500'


/*
    ------------- The Nullish Coalescing Operator (??) ----------

The ?? operator returns the first argument if it is not nullish (null or undefined).

Otherwise it returns the second argument.

*/

let name = null;
let text = "missing";

let result = name ?? text;

console.log(result);
