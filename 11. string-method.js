/*================= JavaScript String Methods ===============

 - String Metods help you to work with strings. 

    -   String length       - The length property returns the length of a string

    -   String slice()      -   slice() extracts a part of a string and returns the extracted part in a new string
    -   String substring()  -   similar as slice()
    -   String substr()     -   substr() is similar to slice().
                            -   The difference is that the second parameter specifies the length of the extracted part

    -   String replace()
    -   String replaceAll()

    -   String toUpperCase()
    -   String toLowerCase()

    -   String concat()
    -   String trim()         -   The trim() method removes whitespace from both sides of a string
    -   String trimStart()    -   The trimStart() method works like trim(), but removes whitespace only from the start of a string.
    -   String trimEnd()
    -   String padStart()
    -   String padEnd()

    -   String at()     -   The at() method returns the character at a specified index (position) in a string(also return negative value)
    -   String charAt() -   The charAt() method returns the character at a specified index (position) in a string
    -   String charCodeAt() - The charCodeAt() method returns the code of the character at a specified index in a string - RETURN ASCII VALUE
    -   String split()

Note:
------

  -  All string methods return a new string. They don't modify the original string.

Formally said:
--------------

    - Strings are immutable: Strings cannot be changed, only replaced

    ------------- String Methods and Properties ---------------

    - Primitive vlaues like "John Doe", cannot have properties or methods (because they are not objects).
    - But with JavaScript, methods and propertis are also available to primitive values, because JavaScript treats primitive values
      as objects when executing methods and properties.
    - Object er moto properties.value akare access korte pari



*/
      let x = "John";
      let y = new String ("John");

      console.log(x === y);   // false


      const a = {
        name: "Bangladesh",   // a hocche ekta object amra a te a.name , a.districts ei vabe access korte parbo
        districts: 64,

      };

      const s = "Bangladesh";
      console.log(s.length);   // jokhon eivable properties diye string ke call korbo tokhon seta object hishabe treat korbe like - new String("Bangladesh")
  






/*
    ------------- Extracting String Characters ----------

  There are 4 methods for extracting string characters:

    The at(position) Method     ---> The at() method returns the character at a specified index (position) in a string

    The charAt(position) Method  ---> The charAt() method returns the character at a specified index (position) in a string

    The charCodeAt(position) Method  --> The charCodeAt() method returns the code of the character at a specified index in a string - RETURN ASCII VALUE
        
        
    Using property access [] like in arrays

    - The at() method returns the character at a specified index (position) in a string.

    - The at() method returns the same as carAt().

    - The at() method is supported in all modern browsers since March 2022

    Note
    ------
    - The at() method is a new addition to JavaScript.

    - It allows the use of negative indexes while charAt() do not.

    - Now you can use myString.at(-2) instead of charAt(myString.length-2)


*/

let text = "HELLO WORDL";
let char = text.charAt(4);
let char2 = text.at(3);
let char3 = text.at(-4);  // negative value index




console.log("charAt vlaue is: ", char);  // O
console.log("at vlaue is: ", char2);     // L
console.log("at vlaue is: ", char3);     // O 




//-----------------  String charCodeAt()  ---------------

let myName = "Saied Anwar";

let nameValue = myName.charCodeAt(1); // 1 is index number - a ascii code 

console.log("a ascii value is : ", nameValue);   // a ascii value is: 97





//=================== Property Access [ ] =================

let text1 = "Hello World";
let char1 = text1[10]
console.log("The char is: ",char1);   // The char is: d, if not found return undefined

/*
  Note
  -----

  - Property access might be a little unpredictable
  - It makes strings look like arrays (but they are not)
  - If no character is found, [ ] returns undefined, while charAt() returns an empty string.
  - It is read only. str[0] = "A" gives no error (but does not work!)

*/








/* -------------------------  Extracting String Parts   -------------------------

There are 3 methods for extracting a part of a string:

  slice(start, end)
  
  substring(start, end)
  
  substr(start, length) 
  
  Note :
  -----
      JavaScript counts positions from zero.

      First position is 0.

      Second position is 1.
  
  
  */


/* ----------------- JavaScript String slice()  ------------------

  - slice() extracts a part of a string and returns the extracted part in a new string.

  - The method takes 2 parameters: start position, and end position (end not included)

  - slice(start, end)

  - First position is 0;
  - Second position is 1;

*/


let txt = "Apple, Banana, Kiwi";
let part = txt.slice(7, 13);

console.log("The slice part is: ", part);   // The slice part is : Banana


// if you not put the second parameter, the method will slice out the rest of the string

let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(7);  // 7 theke porer gula nibe

console.log(part2);        




// slices out a portion of a string from position -12 to position -6:

let part3 = text2.slice(-12, -6);
console.log(part3);  // Banana




/*

------------------- JavaScript String substring() ------------------

  -   substring() is similar to slice().

  -   substring() cannot accept negative indexes

  -   The difference is that start and end values less than 0 are treated as 0 in substring().

  -   If you omit the second parameter, substring() will slice out the rest of the string.
*/


let str1 = "Apple, Banana, Kiwi";
let part1 = str1.substring(7, 13);

console.log(part1);   // Banana



/*
------------------- JavaScript String substr() -------------------

    -   substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

    - First parameter is start
    - second parameter is after start er por koto character porjonto jabe lenght

*/


let str = "Apple, Banana, Kiwi";

let part4 = str.substr(7, 9); // start and length

console.log(part4);



// If you omit the second parameter, substr() will slice out the rest of the string.

let part5 = str.substr(7);  // second parameter
console.log(part5);








/*
-------------------- Converting to Upper and Lower Case ---------------

  -   A string is converted to upper case with toUpperCase()

  -   A string is converted to lower case with toLowerCase()

*/


//  -------- String toLowerCase()  --------


let word2 = "Hello World";

let tolower = word2.toLowerCase();
let toUpper = word2.toUpperCase();

console.log(tolower);
console.log(toUpper);




/*
----------------- JavaScript String concat()  ---------------

  - concat() joins two or more strings

*/

let txt1 = "Saied";
let txt2 = "Anwar";
let txt3 = txt1.concat(" ", txt2);
console.log(txt3);   // Saied Anwar







/*
------------------- JavaScript String trim()  -----------------------

  -   The trim() method removes whitespace from both sides of a string
  -   The trimStart() method works like trim(), but removes whitespace only from the start of a string.
*/

let txt4 = "      Hello World!       ";
let txt5 = txt4.trim();

console.log(txt5);   // 'Hello World'

let my_text = "   Hello World    "
console.log(my_text.trimStart());  //  'Hello World  '



/*
----------------- JavaScript String Padding   -------------

  -   ECMAScript 2017 added two new string methods to JavaScript
  -   padStart() and padEnd() to support padding at the beginning and at the end of a string.


*/



/*
------------------  JavaScript String repeat()  -----------------


  -   The repeat() method returns a string with a number of copies of a string
  -   The repeat() method returns a new string.
  -   The repeat() method does not change the original string.

*/

let char5 = "Hi ";
let result1 = char5.repeat(6);
console.log(result1);  // Hi Hi Hi Hi Hi Hi





/*

Note  :
-------

  - The replace() method does not change the string it is called on.

  - The replace() method returns a new string.

  - The replace() method replaces only the first match

  If you want to replace all matches, use a regular expression with the /g flag set. See examples below.


*/

// By default, the replace() method replaces only the first match:


let replace_word = "Please visit Microsoft and Microsoft!";
let newText = replace_word.replace("Microsoft", "W3Schools");

console.log(newText);   // Please visit W3Schools and Microsoft!




// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

let newText2 = replace_word.replace("MICROSOFT", "W3Schools");
console.log(newText2);  // It's not work



//To replace case insensitive, use a regular expression with an /i flag (insensitive):

let newText3 = replace_word.replace(/MICROSOFT/i, "W3School");
console.log(newText3); // It's work





/*
-------------------- JavaScript String ReplaceAll() ---------------------

  - In 2021, JavaScript introduced the string method replaceAll():
*/

let newText1 = "I love cats. Cats are very easy to love. Cats are very popular.";

let changeText = newText1.replaceAll("Cats", "Dogs");
let changeText2 = newText1.replaceAll("cats", "dogs");

console.log(changeText);   // I love cats. Dogs are very easy to love. Dogs are very popular.
console.log(changeText2);  // I love dogs. Cats are very easy to love. Cats are very popular.









/*
-------------------- JavaScript String split()  -------------------

  - A string can be converted to an array with the split() method

*/

let sWord = "Hello World";
console.log(sWord.split(" ")); //  return array with word ['Hello', 'World']
console.log(sWord.split(""));  // return a array seperate charachter

// ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']