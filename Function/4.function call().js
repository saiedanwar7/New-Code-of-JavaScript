/*
    ========================== All Functions are Methods =========================

*/


/*
    -   In JavaScript all functions are object methods.

If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).

The example below creates an object with 3 properties, firstName, lastName, fullName. 


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
        console.log(`${this.firstName} is sleeping`);
    }
}

a.sleep();   // this mean -a function




/*
The JavaScript call() Method
The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

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

// person.fullName(); // eivabe dile fullName ke pabe na,
  

// kon object ke this mone korbe seta amra call() function er moddhe diye dibo
// This will return "John Doe":
person.fullName.call(person1);


/*
The call() Method with Arguments
The call() method can accept arguments:

*/

const newPerson = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + " " + country;
    }
}

const person3 = {
    firstName: "Saied",
    lastName: "Anwar"
}

newPerson.fullName.call(person3, "Dhaka", "Bangladesh");