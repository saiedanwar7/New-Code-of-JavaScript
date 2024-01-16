/*
    ============================ Functions ================================


    So what is a function? 

    It's a separated piece of code, constituting a certain closed logical whole, intended to perform a specific task. 
    We usually assign a name to such a separated piece of code. With this name, we can call it (execute it) many times in different places of the program.

    Why do we use functions?
    
    There are many reasons, one of the most important being to divide the code into some logically independent parts. 
    Such modularity increases the readability of the code – it is easier to write and analyze a long program that is not a sequence of single instructions. 
    It also allows for easy testing of code fragments closed in functions independently of the rest of the program.

    A very important reason for using a function is the reuse of code 
    – if you repeat the same sequence of instructions in the program in many places, you can close this sequence in a function, and in those places you only have to call the function.

    Apart from reducing the amount of code in a program (thus increasing its readability), it also means that if you need to make some changes in this sequence of instructions, you have to do it only once, inside the function. 
    If we didn’t use a function in this situation, we would have to make changes independently in every place where this sequence of instructions appeared in the code.

*/

// Let's take a look at a simple program, written without any functions.
/*
        We have measurements for two successive days, for which we will make calculations. 
        The mean temperature is of course calculated by summing up all values and dividing the result by their number.
*/

let temp;
let sum;
let meanTemp;

temp = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;
for(let i = 0; i < temp.length; i++){
    sum += temp[i];
}
meanTemp = sum / temp.length;
console.log(meanTemp);  // 16.666

//--------------- 2nd time ------------------

temp = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
sum = 0;

for(let i = 0; i < temp.length; i++){
    sum +=temp[i];
}

meanTemp = sum / temp.length;
console.log(meanTemp);    // 18.08333


/*
    The program will calculate and display the mean daily temperature on the basis of the provided data 
    (24 temperature measurements, in hourly intervals, starting from midnight). 
    In the program, we declare the variable temperatures, which will be a 24-element table containing the obtained measurements.


    We have measurements for two successive days, for which we will make calculations. 
    The mean temperature is of course calculated by summing up all values and dividing the result by their number.

*/


/*
    We will do it in several stages, introducing some new concepts related to functions. Let's start with a function declaration.

    This type of function declaration in JavaScript is called a function statement. A function statement starts with the function keyword followed by the function name. 
    Function names need to follow the same rules as variable names, and should also be meaningful.

    So let's try to declare a function according to these rules, 
    which will contain a fragment of our program code calculating the mean daily temperature. 
    We will call it getMeanTemp. For now, the function will use variables, declared outside of it (in the surrounding context). In fact, it is practically never done that way, 
    but we will deal with it at one of the subsequent stages.


*/


/*
   --------------------------- Calling functions ----------------------------

    To call a function, we need to write a function name and follow it with parentheses. 
    Our complete example should therefore look like this:

*/


let temp1;
let sum1;
let meanTemp1;

function getMeanTemp(){
    sum1 = 0;   // global variable
    for(let i = 0; i < temp1.length; i++){
        sum1 += temp1[i];
    }
    meanTemp1 = sum1 / temp1.length;

}
// call one time

temp1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();

console.log(`mean: ${meanTemp1}`);   // mean: 16.6666


// call second time 

temp1 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp1}`);   // mean : 18.08333


/*
    Usually, functions are declared before they are called, mostly at the beginning of the code. 
    However, this is only a good practice, which increases the readability of the code, not a JavaScript syntax requirement. 
    Function declarations are automatically moved to the top of the scope, so we can use them before the declaration, as long as they are in the scope.

    So the code:
*/

let name = "Alice";
function showName(){
    console.log(name);
}
showName();



// will work exactly the same as:

let name1 = "Alice";
showName1();

function showName1(){
    console.log(name1);
}



/*
    ----------------------- Functions – local variables -------------------------

Let's try to make a small change to our program calculating the mean temperature.

Do you remember what local variables are?

This is how we call the variables that are declared and used in some limited scope and are not visible in the whole program, which means that we can only use them inside that particular scope.

Variables declared with the let keyword are local inside the code block (i.e. inside the range limited by curly brackets), while variables declared with the var keyword are local inside the function block. 
So if you declare a variable inside a function block, whether using let or var, it will only be visible (and usable) inside the function block. This is very useful, because usually the variables you use inside a function are not needed outside of it.

*/

let temp2;
let meanTemp2;

function getMeanTemp2(){
        let sum = 0;

        for(let i = 0; i < temp2.length; i++){
            sum += temp2[i]; 
        }
        meanTemp = sum / temp2.length;

}

temp2 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp2();
console.log(`mean: ${meanTemp}`);    // meam : 16.6666


temp2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp2();
console.log(`mean: ${meanTemp}`); // mean: 18.0833


/*

In our code, an example of such a variable is sum.

Although we have declared it outside the getMeanTemp function (it is a global variable), we only refer to it inside the function. A global declaration is therefore unnecessary.

Let's put it in order, declaring sum locally.

The behavior of the program is the same, but the code has gained some clarity. 
The sum variable is now local, it can only be used inside the getMeanTemp function (which is enough for us, because it was not needed for anything outside the function). In general, we should strive to keep the function code as separate from the surrounding context as possible, among other things by not using global variables inside it. In our example, there are two more such variables: temperatures and meanTemp. The latter, meanTemp, is used inside the function to store and return the calculated result.

Let's deal with it.

*/


/*
        ------------------------------  The return statement    -----------------------------------

Functions that have been called execute a sequence of instructions contained in their body. The result of this execution may be a certain value that we may want to store in some variable. The return keyword comes to help us in this case. What exactly is return for?

    -   First, it causes the function to end exactly where this word occurs, even if there are further instructions.
    -   Second, it allows us to return a given value from inside the function to the place where it was called.

*/

function showMsg(){
    console.log("message 1");
    return;
    console.log("message 2");    // function return kore dile tarpore jai thakuk seta kaj korbe na
    
}
showMsg()

/*
    As we said, return allows us not only to terminate a function. 
    If we place some expression (literal, variable, function call) immediately after the return keyword, the value of this expression will be returned by the completed function to the place where it was called. 
    You can then, for example, assign the returned value to a variable. 
    Let's take a look at an example of the getTrue function.
*/


/*
    In the example, we declare a simple getTrue function, which always returns true. 
    Pay attention to the function call – we store the result of this call in the test variable. 
    As you can guess, this variable will have the true value.

*/

function getTrue(){
    return true;
}

let test = getTrue();
console.log(test);  // true


/*
    Let's go back to the example with mean temperatures.

Until now, the calculations made inside the getMeanTemp function have been performed on the global variable meanTemp. We will change this. Inside the function, we will declare the local result variable, 
which will contain the calculated result, and use return to return it. The global variable meanTemp will contain the result of the function call, that is, the first time, 16.666666666666668 and the second time, 18.083333333333332.

*/

let temp3;
let meanTemp3;

function getMeanTemp3(){
    let sum = 0;
    let result;
    for(let i = 0; i < temp3.length; i++){
        sum += temp3[i];
    }
    result = sum / temp3.length;
    return result;
}

temp3 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp3 = getMeanTemp3();
console.log(`mean: ${meanTemp3}`);      // mean: 16.666


temp3 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp3 = getMeanTemp3();
console.log(`mean: ${meanTemp3}`);    // mean: 18.0833




/*
    The (result) variable is actually only used to temporarily store the value to be returned. 
    So we can simplify the function code even more. 
    We will skip the (result) variable by placing the appropriate operation directly after (return)



    function getMeanTemp3(){
    let sum = 0;
    for(let i = 0; i < temp3.length; i++){
        sum += temp3[i];
    }
    return sum / temp3.length;

}

*/


/*

    The meanTemp variable has also become slightly redundant. 
    We store the result of the function call in it, which is then displayed on the console.
    This can also be simplified by placing the getMeanTemp function call directly in console.log (without the use of the meanTemp variable).

*/

let temperatures;
function getMeanTemp4() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     return sum / temperatures.length;
}
// before 
// meanTEmp = getMeanTemp4();

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp4()}`);

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp4()}`);

/*
    Our getMeanTemp is slowly beginning to look like a normal function. It is a logically independent piece of code, it returns a calculated value, and it operates on local variables. 

*/


/*

There is one small problem left to solve. We count the mean using the data contained in the global variable temperatures. And the function should be independent of what is happening outside it. At the same time, it should allow us to calculate the mean value for different data. How do we reconcile these two conflicting demands?

The function parameters are used for this.

Every time we put input by temperatures we can try to provide different type of data.

 For this reason we used Parameters.
 
 Let's go back to the example with mean temperature. 
 The getMeanTemp function will take one parameter – temperatures. At the same time, we will remove the global variable with this name from the program and create two others, day1 and day2, which will contain the measurement data. 
 These data will be passed on to the function.

*/

//==================== Parameters ====================

function getMeanTemp5(temperatures){
    let sum = 0;

    for(let i = 0; i < temperatures.length; i++){
        console.log(sum += temperatures[i]);
        sum += temperatures[i];
    }
     return sum / temperatures.length;   
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp5(day1)}`);  // mean: 33.3333

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp5(day2)}`);  // mean: 36.16666


/*
        ------------------  Parameters  ----------------------

    -   First of all, the use of parameters in functions is optional. 
        There may be functions that do not have parameters, as we have seen in our previous examples, just as there may be functions that do not return values. 
        However, most often we create functions that have defined parameters and return values.

    -   In JavaScript, a function’s parameters appear in its declaration. 
        These are names separated by commas, placed in parentheses after the function name. Each parameter inside a function will be treated as a local variable. 
        A function whose definition specifies the parameters must be invoked in an appropriate way. When such a function is called, the values (literals, variables, function calls) should be placed in parentheses after its name, and are treated as parameters inside the function. 
        The values given during a call are called arguments. Arguments, if there is more than one, are separated by commas and must be passed in the same order as the parameters we define in the function declaration.

Let's look at a simple function that adds two values. We will call it add.

*/

function add(first, second) {
    return first + second;
    }


/*
    In the function declaration, in parentheses, we put two parameters: first and second. 
    The names of the parameters, just like the variables, should be related to their purpose – in this case, we have done it differently to emphasize that the order of the parameters is important. Inside the add function, these parameters are treated as local variables, whose values will be given when the function is called.

*/

let result1 = add(5, 7);
console.log(result1);  // 12


/*

    You can pass any type of data as arguments to the function, both simple and complex. 
    Let's write the getElement function, which will return the selected element from the array, 
    with the array and index of the element being the function's parameters.
*/

function getElement(elements, index){
    return elements[index];
}

// Let's call it with sample arguments:
let names = ["Alice", "Bob", "Eve", "John"];
let name11 = getElement(names, 2);
console.log(name11);    // Eve - from index 2





/*
                --------------------------- Shadowing ----------------------------

    As we mentioned earlier, the parameters are treated inside the function as local variables. 
    And just like the local variables explicitly declared inside a function, they shadow the global variables of the same name (or more generally, variables from the outer scope). 
    Let's go back for a moment to the example with adding numbers. The add function has two parameters: first and second. At the same time, we will declare, out of the function, global variables named first, second, third, and fourth.

If inside the function, we refer to the variable:

    -   first, it will be treated as the parameter with such a name that shadows the first global variable (i.e. we will operate on the value passed as the first argument)
    -   second, it will also be treated as the function parameter (the value passed as the second argument)
    -   third, it will be treated as a global variable, because inside the function there is neither a local variable nor a parameter with that name that would shadow it;
    -   fourth, it will be treated as global, the same as third.

    Of course, outside the function, each of these names will refer to global variables.

*/

function add2(first, second){
    return first + second;
}
let first = 10, second = 20, third = 40, fourth = 80;

console.log(add(first, second));  // 30
console.log(add(second, third));  // 60
console.log(add(third, fourth));  // 120

// Also try to run and analyze one more simple example, in which you can shadow variables with both parameters and local variables.

let a = 100, b = 200, c = 300;

function test1(a){
    let b = 10;
    console.log(a);   // parameter a  1
    console.log(b);   // local variable b 10
    console.log(c);   // global variable c 300
}
test1(1); // -> 1
      // -> 10
      // -> 300

console.log(a);  //100
console.log(b);  // 200
console.log(c)   // 300