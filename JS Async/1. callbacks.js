
/*
    ============================= JavaScript Callbacks ======================

                    "I will call back later!"

    -   A callback is a function passed as an argument to another function

    -   This technique allows a function to call another function

    -   A callback function can run after another function has finished

*/


// function display(a) {
//     console.log(a);    // 10
// }


// function Calculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }


// let result = Calculator(5, 5);
// display(result);



/*
 
    -   you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):


*/

// function display1(a) {
//     console.log(a);    // 10
// }


// function Calculator1(num1, num2) {
//     let sum = num1 + num2;
//     display(sum);      // problem is ekhane onno function call kore kaj korteci
// }

// console.log(Calculator(5, 5));   // 10


/*
    -   The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
    -   ekhane Calculator function independent na, display function er upor nirborshil
    -   All function should be independent.

*/



/*

    =========================  JavaScript Callbacks  =============================
    
    A callback is a function passed as an argument to another function.

    Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:


*/

// function display2(some) {
//     console.log(some);
// }

// function calculator(num1, num2, callback){   // function name je kono kisu hole hobe
//     let sum = num1 + num2;
//     callback(sum);      // that mean ekhane sorashori onno ekta function(disply) ke call korteci na
// }

// calculator(5, 5, display2)





// ekhon amra chaile callback er moddhome onno function ke control korte parbo...chaile calculator function theke callback call korbo na hole korbo na

// function display3(some) {
//     console.log(some);
// }

// function calculator1(num1, num2, callback){   // function name je kono kisu hole hobe
//     let sum = num1 + num2;
    
//     // jodi argument hishabe onno function na dile seta call korbe na
//     // dispaly function na dile print korbe na, r dile print korbe, calculator function er iccha
//     if(callback) callback(sum); 
// }

// calculator1(5, 6, display3);     //  print korbe
// calculator1(5, 6);               // print korbe na




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
console.log(result);            // 9




//-------------------- callback e function provide kora ----------------------

// callback function er moddhe parent function er result provide kora hoyeche


function calculator3(num1, num2, callback) {
    let sum = num1 + num2;

    if(callback) callback(sum);

    return sum;
}

calculator3(5, 8, function (result) {
    console.log(result);   // 13
})



/*
    --------------- When to Use a Callback? ------------------

    The examples above are not very exciting.

    They are simplified to teach you the callback syntax.

    Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).


*/