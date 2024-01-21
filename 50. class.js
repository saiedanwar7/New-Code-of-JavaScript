/* =================== JavaScript Classes ===============

ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

JavaScript Classes are templates for JavaScript Objects.

*/


/*
     ---------------  JavaScript Class Syntax -----------------

    -   Use the keyword class to create a class
    -   Always add a method named constructor()

    Syntax :
    --------

    class ClassName {
    constructor() { ... }
    }

*/

// The class has two initial properties: "name" and "year".

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

// benefit hocche ei same type er onnek gula object create korte parbo

const car1 = new Car("Toyota", 2017);    // creare actual object
const car2 = new Car("Audi", 2019)


/*
    =================== The Constructor Method ==================


    The constructor method is a special method:

    -   It has to have the exact name "constructor"
    -   It is executed automatically when a new object is created
    -   It is used to initialize object properties
    -   If you do not define a constructor method, JavaScript will add an empty constructor method.


*/




/*

------------------- Class Methods --------------

Class methods are created with the same syntax as object methods.

    -   Use the keyword class to create a class.
    -   Always add a constructor() method.
    -   Then add any number of methods.


    Syntax :
    --------
        class ClassName {
        constructor() { ... }
        method_1() { ... }
        method_2() { ... }
        method_3() { ... }
        }

*/



//--------------- Create Class Method ----------------

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    play(){
        console.log(`${this.name} is playing`);
    }
}


const person1 = new Person("Saied")
person1.play()



/*-------------------- Another Class ----------------

    - You can send parameters to Class methods:

*/

class Cricketer{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }



    hitting(status){
        console.log(`${this.name} aged ${this.age} is playing cricket and hitting ${status}`); // Saied aged 26 is playing cricket and hitting 6 
    }
}

// instance
const cricketer1 = new Cricketer("Saied", 26);
const cricketer2 = new Cricketer("Nayem", 25);

// console.log(person1.hiting(6));

cricketer1.hitting(6);






