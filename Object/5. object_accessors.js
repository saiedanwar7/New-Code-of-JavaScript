/* ====================== JavaScript Accessors (Getters and Setters) =================

    -   ECMAScript 5 (ES5 2009) introduced Getter and Setters
    -   Getters and setters allow you to define Object Accessors (Computed Properties)

    --------------------- Why Using Getters and Setters? ---------------------

    -   It gives simpler syntax
    -   It allows equal syntax for properties and methods
    -   It can secure better data quality
    -   It is useful for doing things behind-the-scenes


*/


/*------------------ avaScript Getter (The get Keyword) -----------------------

    -   This example uses a lang property to get the value of the language property.

*/

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };

console.log(person.lang);   // en


// --------------- Computed Properties ----------------

const person1 = {
    firstName : "Saied",
    lastName : "Anwar",

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
};

// now we can access full name as a property

console.log(person1.fullName);   // Saied Anwar



/*---------------------  JavaScript Setter (The set Keyword) -------------------

    -   This example uses a lang property to set the value of the language property.

*/

const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang1(lang) {
      this.language = lang;
    }
};

person2.lang1 = "bn";
console.log(person2);


/*
    ------------------------ JavaScript Function or Getter -----------------------

    -    Example 1 access fullName as a function: person.fullName()

    -    Example 2 access fullName as a property: person.fullName

    -    The second example provides a simpler syntax

    just for memory benifite 

*/

const newPerson = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

console.dir(newPerson);   // fullName hishabe ekta function create kora ache 
console.log(newPerson);   // fullName hishabe ekta function create kora hoy


const newPerson1 = {
    firstName: "John",
    lastName: "Doe",

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
};

// fullName Property create kore rakha hoyeche but inactive but jokhon access korbo tokhon active hobe.

console.dir(newPerson1);   // fullName hishabe ekta function create kore rakha hoy 
console.log(newPerson1);   // fullName hishabe ekta complete property create kore rakha hoy



/* --------------------- Object.defineProperty() -----------------------

    -   The Object.defineProperty() method can also be used to add Getters and Setters: 


*/


const newPerson2 = {
    firstName : "Saied",
    lastName : "Anwar"
};

Object.defineProperty(newPerson2, "fullName", {
    get : function () {
        return this.firstName + ' ' + this.lastName;
    }
});

// both are same add property and add getter and setter

newPerson2.age = 35;

console.log(newPerson2.fullName);   // Saied Anwar