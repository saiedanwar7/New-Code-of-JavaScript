/*
  ===================== The JavaScript this Keyword ====================
  
  -  In JavaScript, the this keyword refers to an object.
  -  Which object depends on how this is being invoked (used or called)

  The this keyword refers to different objects depending on how it is used:

    - In an object method, this refers to the object.
    - Alone, this refers to the global object.
    - In a function, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an event, this refers to the element that received the event.
    - Methods like call(), apply(), and bind() can refer this to any object.


  Note:
  -----
  -  this is not a variable. It is a keyword. You cannot change the value of this


*/




/*
  -  In strict mode, when used alone, this also refers to the global object:

*/

 // "use strict"    - mode this undefined dibe

console.log(this);  // this return window object



/*
  ----------------- this Alone -----------------

  - When used alone, this refers to the global object.
  - Because this is running in the global scope.

  In a browser window the global object is [object Window]:

*/

let a = this;
console.log(a);    // return Global Object {}



// In a function, this also refers to the global object.

function a(){
    console.log(this);
}

a();


/*
 ----------------- this in a Method -------------

  - When used in an object method, this refers to the object.
  - In the example on top of this page, this refers to the person object.
  
  - Because the fullName method is a method of the person object.

  ---------------- Object Method Binding ---------------

    -   In these examples, this is the person object

    -   eita Implicit Function Binding hoye geche 

*/

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    getFullName: function(){
        return this.fullName();
    }
  };


console.log(person.getFullName());   // 'John Doe'

// that means function call korar somoy .getFullName()  dot(.) er aage jeta thakbe setai this.



/*
    ------------------  Explicit Function Binding  --------------------

    -   The call() and apply() methods are predefined JavaScript methods.

  - ekhon ami jodi chai je return er moddhe je this ta use kora hoyece seta, 
    object ta na hoye onno kisu hobe baire theke, tahole tokhon setake bola hoy Explicit Function Binding.

    getFullName: function(){
        return this.fullName();
    }

*/

const person11 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person22 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  console.log(person11.fullName());   // 'undefined undefined'
  console.log(person11.fullName.call(person22));   // "John Doe"




  /*
      ------------------- Function Borrowing ---------------------

    -   With the bind() method, an object can borrow a method from another object.
    
    This example creates 2 objects (person and member).
    -   The member object borrows the fullname method from the person object
  
  */


const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function(){
    return this.firstName +" "+ this.lastName; 
  }
}


const member = {
  firstName: "Saied",
  lastName: "Anwar",
}


let fullName = person.fullName();
console.log(fullName);   // John Doe

console.log(person.fullName.bind(member));





/*

  ----------------------- This Precedence -------------------

  - To determine which object this refers to; use the following precedence of order.

Precedence	      Object
  
    1	            bind()
    2	        apply() and call()
    3	          Object method
    4	           Global scope



   -  Is this in a function being called using bind()?

  -   Is this in a function being called using apply()?

  -   Is this in a function being called using call()?

  -   Is this in an object function (method)?

  -   Is this in a function in the global scope.



*/