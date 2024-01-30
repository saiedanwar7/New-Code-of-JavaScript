/* ====================  JavaScript Classes ================== 

    ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

    JavaScript Classes are templates for JavaScript Objects.

*/

/*

--------------- JavaScript Class Syntax --------------

    -   Use the keyword class to create a class.

    -   Always add a method named constructor():

    Syntax

        class ClassName {
        constructor() { ... }
        }

*/

/*
The class has two initial properties: "name" and "year".

Note:
------
    A JavaScript class is not an object.

    It is a template for JavaScript objects.

*/


class Car {   // car template, there 2 proparty, as a perameter
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}

const bmw = new Car('BMW', 1990);
console.log(bmw);


/*
Class Methods
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.

*/

class Car1 {   // car template, there 2 proparty, as a perameter
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    // create class method, chaile parameter o use korte pari
    // You can send parameters to Class methods
    run(speed){
        console.log(this.name + " is running " + speed);
    }
}

const Honda = new Car1('Honda', 2000);

// Honda.run();
Honda.run('100 km per hour');



/*
    "use strict"
The syntax in classes must be written in "strict mode".

You will get an error if you do not follow the "strict mode" rules.

Example
In "strict mode" you will get an error if you use a variable without declaring it:


"strict mode"


class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      // date = new Date();  // This will not work
      const date = new Date(); // This will work
      return date.getFullYear() - this.year;
    }
  }


*/

