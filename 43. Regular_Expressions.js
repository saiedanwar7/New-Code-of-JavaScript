/*
    =================== JavaScript Regular Expressions ==================


    -   A regular expression is a sequence of characters that forms a search pattern.

    -   The search pattern can be used for text search and text replace operations.

    -   A regular expression can be a single character, or a more complicated pattern.

    -   Regular expressions can be used to perform all types of text search and text replace operations.


        --------------------- Regular Expression Modifiers --------------------

        -   Modifiers can be used to perform case-insensitive more global searches
       
             Modifier                                	Description

                 i	                            Perform case-insensitive matching

                 g	                            Perform a global match (find all)

                 m	                            Perform multiline matching

                 d	                            Perform start and end matching


    

    ------ Syntax -----

    /pattern/modifiers;

    ------- Example -----

    /w3schools/i;



        --------------------    Regular Expression Patterns     ---------------------


    -   Brackets are used to find a range of characters

        Expression                  	Description

        [abc]	                Find any of the characters between the brackets

        [0-9]               	Find any of the digits between the brackets

        (x|y)               	Find any of the alternatives separated with |


    -   Metacharacters are characters with a special meaning:

        Metacharacter	            Description	Try it

            \d	                    Find a digit	

            \s	                    Find a whitespace character	

            \b	                    Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	

            \uxxxx	                Find the Unicode character specified by the hexadecimal number xxxx



    -   Quantifiers define quantities:

        Quantifier	                        Description

            n+	                    Matches any string that contains at least one n

            n*	                    Matches any string that contains zero or more occurrences of n

            n?	                    Matches any string that contains zero or one occurrences of n

*/


/*

   /w3schools/i;

   Example explained:

    -   /w3schools/i  is a regular expression

    -   w3schools  is a pattern (to be used in a search)

    -   i  is a modifier (modifies the search to be case-insensitive)

*/


//   g  ----- Perform a global match (find all)

let G_text = "Is this all there is?";
let result = G_text.match(/is/g);

console.log(result);  // return array object -  is is


// m ------ Perform multiline matching

let multi_text = 'I\ns th\nis it?';
let m_result = multi_text.match(/is/m);

console.log(m_result);  // return array object 


/*
    --------------------    Regular Expression Patterns     ---------------------

    -   Brackets are used to find a range of characters

        Expression                  	Description

        [abc]	                Find any of the characters between the brackets

        [0-9]               	Find any of the digits between the brackets

        (x|y)               	Find any of the alternatives separated with |


*/


// [abc]  - Find any of the characters between the brackets 

let new_text = "Is this all there is?";
let result2 = new_text.match(/[h]/g);

console.log(result2);  // return array ['h', 'h']


// [0-9] -- Find any of the digits between the brackets 

        // Do a global search for the numbers 1 to 4 in a string

let num = "12345678";
let result1 = num.match(/[1-4]/g);

console.log(result1);  // return array object



/*



-   Quantifiers define quantities:

Quantifier	                        Description

    n+	                    Matches any string that contains at least one n

    n*	                    Matches any string that contains zero or more occurrences of n

    n?	                    Matches any string that contains zero or one occurrences of n

*/

//  n+  --> Matches any string that contains at least one n 

let Q_text = "Hellooo World! Hello W3Schools!";

let Q_result = Q_text.match(/h+/g);
console.log(Q_result);   // return only smaller h

let Q_result1 = Q_text.match(/h+/ig);   // case-sensitive
console.log(Q_result1);  // return ['H', 'H', 'h']




 
// n*  ----> Matches any string that contains zero or more occurrences of n

let n_text = "Hellooo World! Hello W3Schools!";
let n_result = n_text.match(/he*/g);
console.log(n_result);  // ['h']

let n_result1 = n_text.match(/he*/ig);
console.log(n_result1); // ['He', 'He', 'h']




// n? ----> Matches any string that contains zero or one occurrences of n


let c_text = "1, 100 or 1000?";
let c_result = c_text.match(/10?/g);

console.log(c_result); // ['1', '10', '10']





/*
     1 -------------------- Using String Methods ----------------------
    
    -   In JavaScript, regular expressions are often used with the two string methods: 
            -   search() 
            -   replace()

    -   The search() method uses an expression to search for a match, and returns the position of the match

    -   The replace() method returns a modified string where the pattern is replaced

*/


/*
    1.1 --------------------  Using String search() With a String   ------------------

    -   The search() method searches a string for a specified value and returns the position of the match

*/

let text = "Visit W3Schools!";
let n = text.search("W3Schools");

console.log(n);  // return 6


/*
   1.1 ------------------- Using String search() With a Regular Expression ---------------------

    -   Use a regular expression to do a case-insensitive search for "w3schools" in a string
*/


let text1 = "Visit W3Schools!";
let n1 = text1.search(/w3schools/i)

console.log(n1);  // return 6



/* 1.2.1 ------------------ Using String replace() With a String  ------------------

    -   The replace() method replaces a specified value with another value in a string

*/

let replace_string_text = "Visit Microsoft!";
let replace_string_result = replace_string_text.replace("Microsoft", "W3Schools");

console.log(replace_string_result);   // Visit W3Schools!


/* 1.2.2 ------------------ Use String replace() With a Regular Expression ---------------

    -   Use a case insensitive regular expression to replace Microsoft with W3Schools in a string
*/

let replace_Rg_String_text = "Visit Microsoft!";
let replace_Rg_String_result = replace_Rg_String_text.replace(/microsoft/i, "W3Schools");

console.log(replace_Rg_String_result);   // Visit W3Schools




/*
    -------------------------    Did You Notice?     ----------------------------

    -   Regular expression arguments (instead of string arguments) can be used in the methods above

    -   Regular expressions can make your search much more powerful (case insensitive for example)

*/


/*
    2 ------------------------ Using the RegExp Object -------------------------------

    -   In JavaScript, the RegExp object is a regular expression object with predefined properties and methods

                - text()
                - exec()

*/

/*

    2.1 ----------------------- Using test()   -----------------------------------

    -   The test() method is a RegExp expression method.
    -   It searches a string for a pattern, and returns true or false, depending on the result.

*/

const pattern = /e/;

console.log(pattern.test("The best things in life are free!"));  // return true


// You don't have to put the regular expression in a variable first. The two lines above can be shortened to one
console.log(/e/.test("There are so many people around the world"));
console.log(/e/.test("around world"));   // false



/*
    2.2 ----------------------- Using exec()  -------------------------

    -   The exec() method is a RegExp expression method

    -   It searches a string for a specified pattern, and returns the found text as an object

    -   If no match is found, it returns an empty (null) object

    -   The following example searches a string for the character "e"

*/

console.log(/e/.exec("The best things in life are free!"));  // return object