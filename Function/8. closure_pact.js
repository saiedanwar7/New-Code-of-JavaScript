

// function temp(){
//     let counter = 0;   
    
//     return function() {  // this function is able to get upper function
//         counter +=1;
//     }
// }

// let add = temp();

// add();
// console.dir(add);   //  ekhon dekhbo scope er moddhe closure er counter er value 1

// add();
// console.dir(add);   //  ekhon dekhbo scope er moddhe closure er counter er value 2





// function temp(){
//     let counter = 0;    // ekhon ei counter er value use hocche na, so this is garbage
    
//     return function() {  // this function is able to get uper function
//         // counter +=1;
//         console.log("hello")
//     }
// }

// let add = temp();

// add();
// console.dir(add);   //  ekhon dekhbo je scope e kono closure nai , karon amra parent function er kono variable e access korteci na







function temp(){
    let counter = 0;    // ekhon ei counter er value use hocche na, so this is garbage
    
    return function() {  // this function is able to get uper function
        counter +=1;
        console.log("hello")
    }
}

let add = temp();

add();
console.dir(add);   //  ekhon dekhen ache closure
