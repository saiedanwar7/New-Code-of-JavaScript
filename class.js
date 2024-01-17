// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// // benefit hocche ei same type er onnek gula object create korte parbo

// const car1 = new Car("Toyota", 2017);    // creare actual object


/*
Class Methods
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.


Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

*/

//=============== Another Class ============

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //  create method 
    // play(){
    //     console.log(`${this.name} is playing`);
    // }

    // we can use parameter in method
    play(status){
        console.log(`${this.name} aged ${this.age} is playing ${status}`);   // Saied aged 26 is playing Well
    }
}

// instance
const person1 = new Person("Saied", 26);
const person2 = new Person("Nayem", 25);

// console.log(person1.play());

person1.play("Well");