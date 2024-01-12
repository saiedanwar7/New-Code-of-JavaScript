/*================ JavaScript While Loop ================

Loops can execute a block of code as long as a specified condition is true.

The While Loop
The while loop loops through a block of code as long as a specified condition is true.

Syntax
while (condition) {
  // code block to be executed
}


// Note: If you forget to increase the variable used in the condition, 
         the loop will never end. This will crash your browser.

*/

let i = 0;
let text = "";

while (i < 10){
    text += ' The Number is : ' + i;
    i++;
}

console.log(text);



/*

====================== The Do While Loop ===================

The do while loop is a variant of the while loop. 
This loop will execute the code block once, before checking if the condition is true, 
then it will repeat the loop as long as the condition is true.


Syntax:

    do {
    // code block to be executed
    }
    while (condition);

    The example below uses a do while loop. 
    The loop will always be executed at least once, 
    even if the condition is false, because the code block is executed before the condition is tested

*/

let a = 0;

let text1 = "";

do{
    text1 += " The number is: " + 1;
    a++;
} while (a < 10);

console.log(text1)


/*
let a = 0;

let text1 = "";

while (a < 10){ // sob somoy true thakbe tai loop cholte rakhbe 
    text1 += " The number is: " + 1;  
    // a++;
}

console.log(text1)

// while loop er condition jodi true kore di tahole sei loop sarajibon cholte thakbe

while(true){
    console.log(i)
}


*/


/*
Comparing For and While
If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.

The loop in this example uses a for loop to collect the car names from the cars array

*/


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i1 = 0;
let text2 = "";

for (;cars[i1];) {
  text2 += cars[i1];
  i1++;
}


// The loop in this example uses a while loop to collect the car names from the cars array

const cars3 = ["BMW", "Volvo", "Saab", "Ford"];
let i2 = 0;
let text3 = "";

while (cars[i1]) {
  text3 += cars3[i2];
  i2++;
}
