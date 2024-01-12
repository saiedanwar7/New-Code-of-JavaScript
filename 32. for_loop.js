/*=================== JavaScript For Loop =============== 

    -   Loops can execute a block of code a number of times


    The For Loop

    -   The for statement creates a loop with 3 optional expressions:

        for (expression 1; expression 2; expression 3) {
                // code block to be executed
        }

        -   Expression 1 is executed (one time) before the execution of the code block.
        -   Expression 2 defines the condition for executing the code block.
        -   Expression 3 is executed (every time) after the code block has been executed.

*/


/*
JavaScript Loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:


    Instead of writing:

    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
    text += cars[5] + "<br>";

*/


const cars = ["A", "B", "C", "D", "E"];

for (let i = 0; i < cars.length; i++){
    console.log(i);  //    // 0, 1, 2, 3, 4
    console.log(cars[i]);  // 'A', 'B', 'C', 'D', 'E'
}

console.log("I am done");


/*
------------------- Expression 1 -----------------

    -   Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
    -   This is not always the case. JavaScript doesn't care. Expression 1 is optional.
    -   You can initiate many values in expression 1 (separated by comma)

*/

const cars1 = ["BMW", "Volvo", "Saab", "Ford"];

let i, len, text;

for(i = 0, len = cars1.length, text=""; i < len; i++){
        text = cars1[i];
        console.log(text);    
        console.log(text =cars1[i]);
}


// you can omit expression 1 (like when your values are set before the loop starts)

let j = 2;
let len1 = cars1.length;
let text1 = "";

for(; j < len1; j++){
    text1 =" " + cars1[j];
    console.log(text1);   // 'Saab', 'Ford'
}




/*
Expression 2
Often expression 2 is used to evaluate the condition of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 2 is also optional.

If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. 
Read about breaks in a later chapter of this tutorial.

*/


const bus = ["A", "B", "C", "D", "E"];

let b = 0;

for(; ; b++){   // jodi condition na di tahole loop sesh hobe nai tai bitor theke break kore ber hoye ashte hobe
   if(b > 10){
      break;
   }else{
        console.log(b);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   }
}

console.log("I am done");



/*
Expression 3
Often expression 3 increments the value of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 3 is optional.

Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

Expression 3 can also be omitted (like when you increment your values inside the loop):

*/





let c = 10;

for(; ; c--){   // jodi condition na di tahole loop sesh hobe nai tai bitor theke break kore ber hoye ashte hobe
   if(c == 1){
      break;
   }else{
        console.log(c);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   }
}

console.log("I am done");



/*
    ------------ Loop Scope ----------

    -   Using var in a loop


var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10

*/


var num = 5;

for(var num = 0; num < 10; num++){
    console.log(num);
}

console.log(num); //10  // let hole 5 ashbe



/*
In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.

*/