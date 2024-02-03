
/*
    ============================= JavaScript Callbacks ======================

                    "I will call back later!"

    -   A callback is a function passed as an argument to another function

    -   This technique allows a function to call another function

    -   A callback function can run after another function has finished

*/


/*
    ----------------------  Function Sequence   -----------------------

    -   JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

    -   This example will end up displaying "Goodbye":
    -   myDisplayer is the name of a function, it is passed to arguments

*/

function myDiplayer(a){
    console.log(a);     // Hello, Goodbye
}

function myFirst() {
    myDiplayer("Hello");
}

function mySecond() {
    myDiplayer("Goodbye");
}

myFirst();
mySecond();


// This example will end up displaying "Hello":


function myDiplayer1(a){
    console.log(a);    // Goodbye, Hello
}

function myFirst1() {
    myDiplayer1("Hello");
}

function mySecond1() {
    myDiplayer1("Goodbye");
}


mySecond1();
myFirst1();


/*
        --------------------------  Sequence Control   ----------------------------

    -   Sometimes you would like to have better control over when to execute a function.

    -   Suppose you want to do a calculation, and then display the result.

    -   You could call a calculator function (Calculator), save the result, and then call another function (display) to display the result:
    -   the problem is that we call two function then display the result.
*/
// 1. problem example 


function display(a) {
    console.log(a);    // 10
}


function Calculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}


let result1 = Calculator(5, 5);
display(result1);



/*
 
    -   you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):


*/

// 2. problem example 

function display1(a) {
    console.log(a);    // 10
}


function Calculator1(num1, num2) {
    let sum = num1 + num2;
    display(sum);      // problem is ekhane onno function ke call kore kaj korteci
}

console.log(Calculator(5, 5));   // 10

 /*
   -   The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
   -   ekhane Calculator function independent na, display function er upor nirborshil
   -   All function should be independent.
   -   Display function kaj na korle calculator tar result print korte parbe na   

*/



/*

    =========================  JavaScript Callbacks  =============================
    
    -   A callback is a function passed as an argument to another function.

    -   Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), 
        and let the calculator function run the callback after the calculation is finished:


*/

function display2(some) {
    console.log(some);
}

function calculator(num1, num2, callback){   // function name je kono kisu hole hobe
    let sum = num1 + num2;
    callback(sum);            // that mean ekhane sorashori onno ekta function(disply) ke call korteci na
}

calculator(5, 15, display2)





// ekhon amra chaile callback er moddhome onno function ke control korte parbo...chaile calculator function theke callback call korbo,  na hole korbo na

function display3(some) {
    console.log(some);
}

function calculator1(num1, num2, callback){   // function name je kono kisu hole hobe
    let sum = num1 + num2;
    
    
    /* 
      -  dispaly function na dile print korbe na, r dile print korbe, calculator function er iccha

      -  ekhon callback function ke to diyeci but amra jodi calculator function call korar somoy argument hishabe callback 
         function ke na di, tahole seta print korbe na 
    */
    if(callback) callback(sum); 
}

calculator1(5, 6, display3);     //  print korbe
calculator1(5, 6);               // print korbe na




// ---- je function callback function ke parameter hishabe receive kore sei call kore dibe
//      callback function ke use na kore


function display3(some) {
    console.log(some);
}

function calculator2(num1, num2, callback){   // function name je kono kisu hole hobe
    let sum = num1 + num2;
    
    // jodi argument hishabe onno function na dile seta call korbe na
    // dispaly function na dile print korbe na, r dile print korbe, calculator function er iccha
    if(callback) callback(sum); 

    return sum;
}


let result = calculator2(4, 5);   // ekhane argument hishabe callback function ke use kori nai..
console.log(result);              // 9




//-------------------- callback e function provide kora ----------------------

// callback function er moddhe parent function er result provide kora hoyeche


function calculator3(num1, num2, callback) {    // 3rd parameter e ekta function niteche
    let sum = num1 + num2;

    if(callback) callback(sum);                  // callback e (sum) parameter use kora hoyche jeta result diye dora hoyeche

    return sum;
}

calculator3(5, 8, function (result) {    // amra ekhane direct function ei use kore kaj korte pari
    console.log(result);   // 13
})



/*
    ----------------- When to Use a Callback? ------------------

    The examples above are not very exciting.

    They are simplified to teach you the callback syntax.

    Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).


*/