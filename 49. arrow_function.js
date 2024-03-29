/*
    ======================= JavaScript Arrow Function ==================
    - Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

*/

//--------------- different way of declare function ---------------

function a(){

}

//------------------ 
const A = function (){

}

// Before Arrow:
hello = function() {
  return "Hello World!";
}

// With Arrow Function:


hello = () => {
    return "Hello World!";
  }


let myFunction = (a, b) => a * b;



/*
    ------------------ Arrow Functions Return Value by Default ---------------


*/

// eita tokhonei kora jabe jokhon sudu ekta statement return thakbe
// Note: This works only if the function has only one statement.

hello = () => "Hello World!";
  
// jodi function er moddhe onno kisu thake tahole seta kora jabe na

 he = () =>{
    let x = 5;
    return "Hello World!";
 }




 // If you have parameters, you pass them inside the parentheses

hi = (brother) => "Hello" + brother;



// In fact, if you have only one parameter, you can skip the parentheses as well

hii = brother => "hello" + brother;

