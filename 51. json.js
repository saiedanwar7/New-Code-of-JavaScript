/*
    =================== JavaScript JSON ================

    -   JSON is a format for storing and transporting data.

    -   JSON is often used when data is sent from a server to a web page

    ------------    What is JSON?  ----------------

    -   JSON stands for JavaScript Object Notation
    -   JSON is a lightweight data interchange format
    -   JSON is language independent *
    -   JSON is "self-describing" and easy to understand
    -   * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.



*/

/*
    ------------------- The JSON Format Evaluates to JavaScript Objects ------------------

    -   The JSON format is syntactically identical to the code for creating JavaScript objects.

    -   Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

            -   JSON Syntax Rules
            -   Data is in name/value pairs
            -   Data is separated by commas
            -   Curly braces hold objects
            -   Square brackets hold arrays


*/

/*
        -------------------- JSON Data - A Name and A Value  ----------------------

    -   JSON data is written as name/value pairs, just like JavaScript object properties
    -   A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
           
                "firstName":"John"

    -   JSON names require double quotes. JavaScript names do not

*/

/*
    ------------------- JSON Objects --------------------------

        -   JSON objects are written inside curly braces.
        -   Just like in JavaScript, objects can contain multiple name/value pairs:

            {"firstName":"John", "lastName":"Doe"}
*/

let text1 = {"p" :[ {"firstName":"John", "lastName":"Doe"}]}




/*
    ---------------------- JSON Arrays  -----------------

    -   JSON arrays are written inside square brackets
    -   Just like in JavaScript, an array can contain objects



    "employees":[
            {"firstName":"John", "lastName":"Doe"},
            {"firstName":"Anna", "lastName":"Smith"},
            {"firstName":"Peter", "lastName":"Jones"}
        ]

*/




/*
    --------------------- Converting a JSON Text to a JavaScript Object ------------------

    -   A common use of JSON is to read data from a web server, and display the data in a web page
    -   JavaScript built-in function JSON.parse() to convert the string into a JavaScript object
    -   text format e to amra access korte parbo na

*/


// This JSON syntax defines an employees object: an array of 3 employee records (objects)

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';





// The data with JSON.parse(), and the data becomes a JavaScript object.

const obj = JSON.parse(text);
console.log(obj);   // return valid object
console.log(text);  // return text format



// now we can able to access object properties
console.log("object - 1 ", obj.employees[0]);   // John Doe
console.log("object - 1 ", obj.employees[0].firstName);   // John


/* -------------------- JSON.stringify() ------------------

    - We can create json formate from javaScript object
    - Convert a JavaScript object into a string with JSON.stringify()

*/

const person = {
    firstName: "Saied",
    lastName: "Anwar"
};

console.log(JSON.stringify(person));  // return json text format