/* ====================== JavaScript Static Methods ====================
    Static class methods are defined on the class itself.

    You cannot call a static method on an object, only on an object class.

*/

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
const myCar = new Car("Ford");
// console.log(myCar.hello());   // ei vabe static method ke call korte parbo na
console.log(Car.hello());   // direct main Class diye call korte hobe


/*
  - If you want to use the myCar object inside the static method, you can send it as a parameter:

*/

class Car1 {
    constructor(name){
        this.name = name;
    }
    static myline(x){
        return "Hello " + x.name;
    }
}

const myCar1 = new Car1("Ford");

// call static method parameter

console.log(Car1.myline(myCar1));   // Hello Ford