

// "use strict"    - mode this undefined dibe

console.log(this);  // this return window object


// In a function, this refers to the global object.

function a(){
    console.log(this);
}

a();


/*
Object Method Binding
In these examples, this is the person object

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

  - ekhon ami jodi chai je return er moddhe je this ta use kora hoyece seta, object ta na hoye onno kisu hobe
    baire theke, tahole tokhon setake bola hoy Explicit Function Binding.

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