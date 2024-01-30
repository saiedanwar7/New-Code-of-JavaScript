/*
    -   A closure is a function having access to the parent scope, even after the parent function has closed.

*/





function temporary() {
    let counter = 0;   // eita global variable hishabe kaj korbe but javascript temporary onno jaigai use korbe

    return function() {  // closure function
        counter += 1;
    }
}

const add = temporary();   // add is a funciton at the end

add();  // this mean we call - counter += 1

console.dir(add);


//---------------

function temporary1() {
    let num = 0;   // ei num ke jodi niche return function e use na kori seta garbeg value hishabe thakbe

    return function() {
        // num +=1;
        // num = num + 1;
        console.log("hello");   // eikhane sei hello print korbe but closures thakbe na
    }
}

const newAdd = temporary1();

newAdd();
console.dir(newAdd);   // look there are no closures found in scope