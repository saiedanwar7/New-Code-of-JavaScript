

/*=====================  JavaScript Objects =====================*/

/*

    -   Real Life Objects, Properties, and Methods
    -   In real life, a car is an object.

    - Object ke o variable akare chinta korte pari
    - Object er jonno amra const variable use korbo

    A car has properties like weight and color, and methods like start and stop:

    Object      Properties     Method

    car         car.name        start()
                car.color       break()
        
        
        - Object er moddhe amra function o value akare dite pari
        - function ke jokhon amra object er moddhe property akare likhi tokhon seta ke bola hoy object Method.

const car ={
    name: "BMW",
    model: 5000,
    weight: "900kg",
    color: "Black",
    start: function(){   // object method
        
    }
}



------------------ JavaScript Object Content Basic ---------------------

    1. JavaScript Objects
    2. Object Definition
    3. Object Properties
    4. Accessing Object Properties
    5. Object Methods
    6. This keyword?
    7. Accessing Object Mehtods
    8. Do Not Declare Strings, Numbers, and Booleans as Objects!

*/


const car ={
    name: "BMW",
    model: 5000,
    weight: "900kg",
    color: "Black",
    start: function(){
    
        console.log('car has started');    // car has started
    },

    // multiple function o thakte parbe
    drive: function(){
        console.log('car is driving')
    },

};

console.log(car.color);       // Black
console.log(car["model"]);   // array akare o access korte pari object e
car.start()









/*
    - This is main ownership
    - ekta function er moddhe r ekta function ke call kora jabe

*/


const car1 ={
    name: "BMW",
    model: 5000,
    weight: "900kg",
    color: "Black",
    start: function(){
        this.drive()
        console.log('car has started')
    },

    // multiple function o thakte parbe
    drive: function(){
        console.log('car is driving');  // car is driving - this is print for this.drive() calling in start function.
    },

};

car1.start()




/*
    ---------------- Do Not Declare Strings, Numbers, and Booleans as Objects! ----------------
    
    - When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

*/

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.



/* 
let a = 5;  // literal systax
let a = new Number(5);

*/

// new diye declear korle object hishabe kaj kore, eita na use korai valo

let a1 = 5;
console.log(typeof a1); // number

let a2 = new Number(5)
console.log(a2)  
console.log(typeof a2) // type of object