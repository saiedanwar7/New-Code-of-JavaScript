/* ================== JavaScript Display Objects ==================


How to Display JavaScript Objects?
Displaying a JavaScript object will output [object Object].

*/

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

//   document.getElementById("demo").innerHTML = person;


/*
  Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()


*/


/*
Displaying Object Properties
The properties of an object can be displayed as a string:

*/

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };

// document.getElementById("demo").innerHTML = person1.name +' is ' + person1.age + ' years old';  // John is 30 years old


/*
   Displaying the Object in a Loop
The properties of an object can be collected in a loop:

Note:
-----

    -   you must use person[x] in the loop.
    -   person.x will not work (Because x is a variable).

*/

const person2 = {
    name: "John",
    age: 30,
    city: "New York"
  };

  let txt = '';

  for (let x in person2){
    //console.log(person.name);  // eivabe access kora jabe na loop e
    txt += person2[x];
  }

  document.getElementById("demo").innerHTML = txt;   // John 30 New York



/*  ------------------- Using Object.values() ---------------

    Any JavaScript object can be converted to an array using Object.values(): 

*/

const person3 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const personArray = Object.values(person3);

  for (let x of personArray){
    console.log(x);   // return value
  }


/* --------------------- Using JSON.stringify() -------------------
    
    Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

*/

const person4 = {
    name: "John",
    age: 30,
    city: "New York"
  };

  let myString = JSON.stringify(person4);
  document.getElementById("demo").innerHTML = myString;

  console.log(myString);          // text formet
  console.log(typeof myString);  // string

// myString is now a JavaScript string, ready to be displayed:


/* ---------------- Stringify Dates ------------------

    -   JSON.stringify converts dates into strings: 

*/

const person5 = {
    name: "John",
    today: new Date()
  };
  
  let myString1 = JSON.stringify(person5);
  document.getElementById("demo").innerHTML = myString1;




/*  ----------------- Stringify Functions ------------------

    -   JSON.stringify will not stringify functions:

*/

const person6 = {
    name: "John",
    age: function () {return 30;}
  };

  let myFunction = JSON.stringify(person6);
document.getElementById("demo").innerHTML = myFunction;   // only return name, not will not stringigy.



/*
This can be "fixed" if you convert the functions into strings before stringifying.

Example
const person = {
  name: "John",
  age: function () {return 30;}
};
person.age = person.age.toString();

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

*/



/*
    ----------------------- Stringify Arrays -------------------

    -   It is also possible to stringify JavaScript arrays: 


The result will be a string following the JSON notation:

["John","Peter","Sally","Jane"]

*/


const arr = ["John", "Peter", "Sally", "Jane"];

let myArrString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myArrString;