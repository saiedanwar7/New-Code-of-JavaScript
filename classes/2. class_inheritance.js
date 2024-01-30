/* ====================== Class Inheritance ===================

    -   To create a class inheritance, use the extends keyword.
    -   A class created with a class inheritance inherits all the methods from another class:

*/

/*


    -   Create a class named "Model" which will inherit the methods from the "Car" class:
The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.


*/


/*

// normal function and method calling

class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return 'I have a ' + this.carname;
    }
}

let myCar = new Car("Ford");
console.log(myCar.present());  // I have a Ford

*/

class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }

    // take class method
    show() {
        return this.present() + ', It is a '+ this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());  // I have a Ford, It is a Mustang



/*
    -   Inheritance is useful for code reusability: 
        -   reuse properties and methods of an existing class when you create a new class.

*/