/*
    ========================== JavaScript Closures ======================

    -   JavaScript variables can belong to the local or global scope.

    -   Global variables can be made local (private) with closures.

    -   A closure is a function having access to the parent scope, even after the parent function has closed.

*/

/*
    Note:
    -----
    -   Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

    function myFunction() {
    a = 4;
    }

*/

/*
    ------------------------ Variable Lifetime -------------------------

    -   Global variables live until the page is discarded, like when you navigate to another page or close the window.
    -   Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

*/

/* ------------------ Global Variables -------------------------

    -   function can access all variables defined inside the function, like this:


*/

/*
    -   a is a global variable.

    -   In a web page, global variables belong to the page.

    -   Global variables can be used (and changed) by all other scripts in the page.

*/

let a = 4;
function myFunction() {
  return a * a;
}

console.log(a);   // 4


/* ---------------------- local variable ---------------------------

    -   This a is a local variable.

    -   A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

    Global and local variables with the same name are different variables. Modifying one, does not modify the other.

*/
function myFunction() {
    let a = 4;       // ei function er moddhe - a ke access korte parbo 
    return a * a;
}


// But a function can also access variables defined outside the function, like this:

/*
    --------------------- A Counter Dilemma
Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

You could use a global variable, and a function to increase the counter: 


*/
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3

// There is a problem with the solution above: Any code on the page can change the counter, without calling add().
// Amara sudu chai je sudu add() function ke call kore counter er value barabo, kintu eita abar define korleo change hoye jai, eita amra chai na.
// amra chaile nije theke change kore pelte pari like:

// counter = 4;
counter++;

console.log(counter);   // Now counter value is 4. So this is a problem




/* 

    -   The counter should be local to the add() function, to prevent other code from changing it:
    -   amra chai je counter ta sudu local thake and add() function sudu seta call kore change korte parbe 

*/

// Initiate counter
let counter1 = 0;

// Function to increment counter
function add() {
  let counter1 = 0;
  counter1 += 1;
}

// Call add() 3 times
add();
add();
add();

console.log(counter1);   // 0 -- bar bar 0 hoye jabe

//The counter should now be 3. But it is 0
// karon amra eivabe amra global counter ke call kortechi..so that's a problem, not solution




/*

    -   It did not work because we display the global counter instead of the local counter.

    -   We can remove the global counter and access the local counter by letting the function return it:

*/

// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  
  // Call add() 3 times
  add();
  add();
  add();
  
  //The counter should now be 3. But it is 1.

  // it also did not work every time counter value is 1
  // It did not work because we reset the local counter every time we call the function.



/*
 --------------------------- JavaScript Nested Functions ---------------------
 All functions have access to the global scope.  

In fact, in JavaScript, all functions have access to the scope "above" them.

JavaScript supports nested functions. Nested functions have access to the scope "above" them.

In this example, the inner function plus() has access to the counter variable in the parent function:


*/


function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  }

  //     eita o solve korte pare nai...karon plus() function ke amra baire theke access korte parbo na.
  //     This could have solved the counter dilemma, if we could reach the plus() function from the outside.
  //     We also need to find a way to execute counter = 0 only once.
  //     We need a closure.



0


/*
    ----------------------- JavaScript Closures ------------------------------

    -   Remember self-invoking functions? What does this function do?
    -   function any type of data return korte pare, javascript function hocche object, seta ekta function o return korte pare.
    -   directly anonymous function return korte pari, kono name thakbe na
    -   A closure is a function having access to the parent scope, even after the parent function has closed.

*/



function temporary() {
    let counter4 = 0;   // eita global variable hishabe kaj korbe but javascript temporary onno jaigai use korbe

    return function() {  // closure function/ having access to the parent scope
        counter4 += 1;
    }
}

const additions = temporary();   // add is a funciton at the end, closed parent function temporary();

  // this mean we call - counter += 1

console.dir(additions)   // memory te counter er value koto seta closures er moddhe dekhabe.

additions();    // parent function closed korar porei o counter er value te additions() diye access korte parci. 
additions();
additions();

console.dir(additions);

// closures is temporary things, closures er moddhe counter er value 3
// joto bar additions call korbo totobar value 1 kore barbe.
// jehetu function return koreci, tai closures seta rekhe dibe pore jate seta call korte pari, pore abar call kora mane, return function ta ke call kora.




// jokhon num ke return function e use korbo na, ba return function er counte er kisu nai ba mathmeticla kisu nai, tokhon seta ei num ke garbage hishabe remove kore dibe

// function temporary1() {
//     let num = 0;   // ei num ke jodi niche return function e use na kori seta garbage value hishabe thakbe

//     return function() {
//         // num +=1;
//         // num = num + 1;
//         console.log("hello");   // eikhane sei hello print korbe but closures thakbe na
//     }
// }

// const newAdd = temporary1();

// newAdd();
// console.dir(newAdd);   // look there are no closures found in scope