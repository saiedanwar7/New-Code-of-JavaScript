/*
    =========================== Object Properties =========================

    -   Properties are the most important part of any JavaScript object

    JavaScript Properties :
    -----------------------

    -   Properties are the values associated with a JavaScript object

    -   A JavaScript object is a collection of unordered properties

    -   Properties can usually be changed, added, and deleted, but some are read only

*/




const person = {
    name: 'Saied',
    age: 26
};

person.country = "Bangladesh";

console.log(person);


/*
    
Accessing JavaScript Properties
The syntax for accessing the property of an object is:

objectName.property      // person.age
or

objectName["property"]   // person["age"]
or

objectName[expression]   // x = "age"; person[x]
The expression must evaluate to a property name.

*/

console.log(person.name);
console.log(person["age"]);  // string akare property dite hobe
console.log(person.age);   // 26
console.log(person.name);  // Saied



/* -------------------- JavaScript for...in Loop
The JavaScript for...in statement loops through the properties of an object.

Syntax
for (let variable in object) {
  // code to be executed
}
The block of code inside of the for...in loop will be executed once for each property.

Looping through the properties of an object:



*/

const person1 = {
    fname:" John",
    lname:" Doe ",
    age: 25
  };

  let text = '';

  for (let x in person1) {
    console.log(x);   // print all property name
    console.log(person1[x]);   // print all value and property
    text += person1[x];
  };

  console.log(text);


  /* ------------------- Adding New Properties -----------------
You can add new properties to an existing object by simply giving it a value.

Assume that the person object already exists - you can then give it new properties:


*/

const person2 = {
    fname:" John",
    lname:" Doe ",
    age: 25
  };

  person2.nationality = "Bangladeshi";

  console.log(person2);


  // --------- change Properties -------------

  person2.age = 26;
  console.log(person2); 



  /* --------------- Deleting Properties -----------
  
  // - The delete keyword deletes a property from an object:

  The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

The delete operator is designed to be used on object properties. It has no effect on variables or functions.

The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

  */


   delete person2.age;
//    delete person["age"];
   console.log(person2);




/*
 ----------------------  Nested Objects  ---------------------

Values in an object can be another object:


*/

myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

// You can access nested objects using the dot notation or the bracket notation:

console.log(myObj.cars.car1);        // Ford
console.log(myObj.cars["car2"]);     // BMW
console.log(myObj["cars"]["car3"]);  // Fiat



/* -------------------- Nested Arrays and Objects
Values in objects can be arrays, and values in arrays can be objects: 



*/


const myObj2 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

// Array te for in loop use korle index gula return kore

for (let i in myObj2.cars){
    console.log(i);   // return index 0, 1, 2
}

// Object er belai for in korle Element gula return kore

for (let i in myObj2){
    console.log(i);   // return element - name, age, cars
}


/* ---------------------- Property Attributes ---------------

All properties have a name. In addition they also have a value.

The value is one of the property's attributes. 


*/



/*
    ----------------------- Prototype Properties ---------------------

    Prototype Properties
JavaScript objects inherit the properties of their prototype.

The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

*/

let a = new String("Bangladesh");

console.log(a.toUpperCase());   // toUpperCase eigula ashce string prototype theke
console.dir(a);   // Capital String Object er moddhe sob details thake

const myObj3 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  console.dir(myObj3);

  delete myObj3.age;
  console.dir(myObj3);

  // prototype gula te kisu kora jabe na...eigula build-in  - console.dir(object_name) - diye dekha jabe