

/* ============================== Closure ==========================

    -   JavaScript variables can belong to the local or global scope.

    -   Global variables can be made local (private) with closures.

    -   A closure is a function having access to the parent scope, even after the parent function has closed.

*/




// 1. ---------------------- Closure Example 1 -----------------------

function temp(){
    let counter = 0;   
    
    return function() {  // this function is able to get upper function
        counter +=1;
    }
}

let add = temp();

add();
console.dir(add);   //  ekhon dekhbo scope er moddhe closure er counter er value 1

add();
console.dir(add);   //  ekhon dekhbo scope er moddhe closure er counter er value 2




// 2. --------------------- Example 2 ------------------


function temp1(){
    let counter = 0;    // ekhon ei counter er value use hocche na, so this is garbage
    
    return function() {  // this function is able to get upper function
        // counter +=1;
        console.log("hello")
    }
}

let add1 = temp1();

add1();
console.dir(add1);   //  ekhon dekhbo je scope e kono closure nai , karon amra parent function er kono variable e access korteci na





//--------------------------- Example - 3 --------------------------




function temp2(){
    let counter = 0;    // ekhon ei counter er value use hocche na, so this is garbage
    
    return function() {  // this function is able to get uper function
        counter +=1;
        console.log("hello")
    }
}

let add2 = temp2();

add2();
console.dir(add2);   //  ekhon dekhen ache closure



