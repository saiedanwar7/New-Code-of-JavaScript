

/*--------------------- throw Error ------------------

The throw Statement
The throw statement allows you to create a custom error.

Technically you can throw an exception (throw an error).

The exception can be a JavaScript String, a Number, a Boolean or an Object:


*/

let x = "";

try{
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    // if(x > 10) throw "too high"
    if(x > 10) throw {  // object hishabe o return korte pari
        message: "too high",
        name: "High Error"
    }  
}
catch(err){
    console.log(err);
}

console.log("this is a test");

