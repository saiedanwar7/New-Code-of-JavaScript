/*============== JavaScript String Search ============= 


String Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()


*/


/*
    ----------------------- JavaScript String indexOf() ----------------------

- The indexOf() method returns the index (position) of the first occurrence of a string in a string, 
- or it returns -1 if the string is not found:

*/

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf('locate');
console.log(index); // 7


/*

    Note :
    -------
    
    JavaScript counts positions from zero.

    0 is the first position in a string, 1 is the second, 2 is the third, ...

*/

/*
JavaScript String lastIndexOf()
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

*/


let text1  = "Please locate where 'located' occurs!";
let lindex = text1.lastIndexOf("located");
console.log(lindex);   // 21

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// Both methods accept a second parameter as the starting position for the search:

let text2  = "Please locate where is 'located' occurs!";
let index2 = text2.indexOf("located", 15);

let index22 = text2.indexOf(/locate/);  // not found because indexOf()  not support regular expression

console.log("With regular expression: ", index22);
console.log(index2);   // 21

/*
The lastIndexOf() methods searches backwards (from the end to the beginning), 
meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
*/

let text3 = "Please locate where 'locate' occurs!";
let index4 = text3.lastIndexOf("locate", 15);
console.log(index4);  //7




/*
JavaScript String search()
The search() method searches a string for a string (or a regular expression) and returns the position of the match:
 - return index number  
*/

let text5 = "Please locate where 'locate' occurs!";
let index5 = text5.search("where");
let index6 = text5.search(/locate/);  // regular expression

console.log("Where word position start from :", index5); // 14
console.log(index6);

/*
Did You Notice?
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

    -   The search() method cannot take a second start position argument.
    -   The indexOf() method cannot take powerful search values (regular expressions).

*/




/*
=============== JavaScript String match() =================

    -   The match() method returns an array containing the results of matching a string against a string (or a regular expression).
    -   If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

*/

let text6 = "The rain in SPAIN stays mainly in the plain";
let match1 = text6.match("ain");
let match2 = text6.match(/ain/);

let match3 = text6.match(/ain/g);  // global search

let match4 = text6.match(/ain/gi);  // Search with case-insensitive



console.log(match1);  // return array - position 5
console.log(match2);  // return array - position 5
console.log(match3);  // joto gula ain ache sob gula return korbe 
console.log(match4);  // return all ain/AIN with Array


/*
    -------------   JavaScript String matchAll()    -----------

The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
*/

let value = "I love cats. Cats are very easy to love. Cats are very popular.";

const ite1 = value.matchAll(/Cats/g);
const iterator2 = value.matchAll("Cats");

console.log(ite1);
console.log(iterator2);



/*
 =============== JavaScript String includes() =============
 
The includes() method returns true if a string contains a specified value.

    -   Otherwise it returns false.
    -   includes() is case sensitive.
    -   includes() is an ES6 feature.

*/

let text7 = "Hello world, welcome to the universe.";

let wordFind = text7.includes("world");  

console.log(wordFind);  // return true


// Check if a string includes "world". Start at position 12:
// 12 position theke search kora suru korbe


let findWithPosition = text7.includes("world", 12)
console.log(findWithPosition);  // return false




/*
    -------------   JavaScript String startsWith()  -------------

The startsWith() method returns true if a string begins with a specified value.

    -   Otherwise it returns false
    -   startsWith() is case sensitive.
    -   startsWith() is an ES6 feature.

*/

let text8 = "Hello world, welcome to the universe.";

let text_Start_with = text8.startsWith("Hello");

let text_start_with2 = text8.startsWith("word");

console.log(text_Start_with);  // true
console.log(text_start_with2);  // false


//A start position for the search can be specified

let text_start_with3 = text8.startsWith("world", 6);
console.log("World start from 6th position :", text_start_with3);


/*
JavaScript String endsWith()
The endsWith() method returns true if a string ends with a specified value.

    -   Otherwise it returns false:
    -   endsWith() is case sensitive.
    -   endsWith() is an ES6 feature.

*/

let text9 = "John Doe";
let text_ends_with = text9.endsWith("Doe");

console.log(text_ends_with);  // true


// Check if the 11 first characters of a string ends with "world"
// 11 er moddhe ache kina ta check korbe


let text10 = "Hello world, welcome to the universe.";
let text_ends_with1 = text10.endsWith("world", 11);

console.log(text_ends_with1);
