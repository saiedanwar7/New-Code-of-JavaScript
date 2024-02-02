
/*
    ======================= JavaScript Promises ========================

    -. That mean je kaj ta pore hobe setar jonno ekta promises kore rakha je ei kaj ta sesh hole ami porer kaj ta korbo




*/


/*

----------------- Promise Syntax --------------

let myPromise = new Promise(function(myResolve, myReject) {

// "Producing Code" (May take some time)
        
        myResolve(); // when successful
        myReject();  // when error
    });


 "Consuming Code" (Must wait for a fulfilled Promise)

    myPromise.then(
        function(value) { // code if successful  }
        function(error) { // code if some error }
    );
  
*/




// asychoronous normal way

// const status = false;

// console.log('Task 1');

// setTimeout(function() {
//     if(status) {
//         console.log('Task 2');
//     } else {
//         console.log('Failed');
//     }
// }, 2000);

// console.log('Task 3');



// apply promise

// resolve mean promise rakhte pereche tai then er moddhe jabe
// reject maan promise rakhte pare nai tai catch er moddhe jabe


const status = false;

console.log('Task 1');

const promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        if(status){
            resolve('Task 2');
        } else {
            reject('failed');
        }
    }, 2000)
})

// call promise 

promise
    .then(function(value) {     // then work for resolve, value print under resolve content
        console.log(value);  
    })
    .catch(function(err) {      // catch work for reject, err print under reject content
        console.log(err);
    });

console.log('Task 3');
