/* ============================  Asynchronous JavaScript =====================

    -   By default javaScript synchronous, serial e por por kaj kore

    -   but javaScript also doing work by Asynchronous  - serial nai, 

                        "I will finish later!"

    -   Functions running in parallel with other functions are called asynchronous

    -   A good example is JavaScript setTimeout()

*/


// setTimeout er moddhe callback function ney
// setTimeout 2 ta parameter ney, 1. callback function 2. timeout milisecond e bolte hoy


console.log('Line 1 Code');


// ekta somoy por callback function e bole deya hoy ki korbe pore
setTimeout(function() {
    console.log('Line 2 Code'), 2000});   // time 0 dile eita pore kaj korbe

console.log('Line 3 Code');


//  -------------- intervals - ekta kaj nidishto somoy por por korte thakbe -----------

console.log('Line 1 Code');

// setInterval(function() {
//     console.log('Line 2 Code'), 2000});   // time 0 dile eita pore kaj korbe

console.log('Line 3 Code');

