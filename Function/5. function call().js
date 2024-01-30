





/*
    ------------------------- All Functions are Methods --------------------

    Method Reuse :
    
    -   With the call() method, you can write a method that can be used on different objects.
     -   1 ta object ke onno object er method er value hishbe provide korte pari call use kore

*/


/*

    -----------------------  All Functions are Methods -----------------------

    -   In JavaScript all functions are object methods.

    -   If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).

    -   The example below creates an object with 3 properties, firstName, lastName, fullName. 


// all function window.object er moddhe thake by default

    window {
        function b (){
            console.log("hello")
        }
    }

    window.b();

*/


const a = {
    firstName: 'Saied',
    sleep: function() {
        console.log(`${this.firstName} is sleeping`);    //  Saied is sleeping
    }
}

a.sleep();   // this mean -a function


/*
    What is this?

    In JavaScript, the this keyword refers to an object.

    Which object depends on how this is being invoked (used or called).


    The this keyword refers to different objects depending on how it is used:

    -   In an object method ->  this refers to the object.
    -   Alone ->    this refers to the global object.
    -   In a function ->     this refers to the global object.
    -   In a function, in strict mode -> this is undefined.
    -   In an event    -> this refers to the element that received the event.
    -   Methods like call(), apply(), and bind() can refer this to any object.

    Note :
    -----
    
    this is not a variable. It is a keyword. You cannot change the value of this.


*/







/*

    ============================ The JavaScript call() Method =======================

    -   The call() method is a predefined JavaScript method.

    -   1 ta object ke onno object er method er value hishbe provide korte pari call use kore

    -   It can be used to invoke (call) a method with an owner object as an argument (parameter).

*/

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName:"John",
    lastName: "Doe"
};

  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
};

person.fullName(); // undefined undefined    // eivabe dile fullName ke pabe na,
  

// kon object ke this mone korbo, seta amra call() function er moddhe diye dibo


// This will return "John Doe":
person.fullName.call(person1);   // John Doe

console.log(person.fullName.call(person1));   // John Doe

let person_value = person.fullName.call(person1);  

// console.log(person.fullName.call(person2));  // Mary Doe

console.log(person_value);




/*

    ------------------------ The call() Method with Arguments -------------------


    The call() method can accept arguments:

*/

// const newPerson = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + "," + city + " " + country;
//     }
// }

// const person3 = {
//     firstName: "Saied",
//     lastName: "Anwar"
// }

// newPerson.fullName.call(person3, "Dhaka", "Bangladesh");


const newPerson = {
    fullName : function(city, country){
        return this.firstName + " " + this.lastName +", from " + city + " " +country; 
    }
}

const person3 = {
    firstName: "Saied",
    lastName: "Anwar"
} 

let Saied_info = newPerson.fullName.call(person3, "Feni", "Bangladesh");
console.log(Saied_info);   // Saied Anwar, from Feni Bangladesh