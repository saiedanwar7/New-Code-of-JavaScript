/*
    ------------ Course Details -------------------

    1. payment (Enrollment)
    2. Course Progress
    3. get Certificate

    // setTimeout - ekta callback function ney as a paramenter and time ney

    //  Amader dorkar 1ta kaj sesh hobar por onno 1ta kaj ta suru hobe, tai first kaj tar parameter e second kaj ke callback akare diyeci
    //  jodi sob kisu thik thake tahole next step er jonno callback function ke call korbe, r na hole korbe na


*/

// get variable

const paymentSuccess = true;
// const marks = 90;
const marks = 70;

// enrollment
function enroll(callback) {           // enrollment er porer kaj ta ke parameter akare callback function niyeci
    console.log('Course enrollment is in Progress.');

    setTimeout(function() {        // callback function, 2 sec por ei function ta call korbe
        if(paymentSuccess){
            callback();             //  jodi payment successfull hoy then next step e nibe, callback - nextstep progress
        } else {
            console.log('Payment failed!');
        }                           
    }, 2000);
}


// course progress

function progress(callback) {
    console.log('Course on progress....');

    setTimeout(function() {      // callback function call next step
        if(marks >= 80) {        // mark 80 er upore hole next step e niye jabe
            callback();          // mark 80 theke boro hole callback ta call korbe
        } else {
            console.log('You could not get enough marks to get the certificate');
        }
    }, 3000);
}



// get Certificate 

function getCertificate() {
    console.log('Preparing your certificate!');

    setTimeout(function() {
        console.log("Congrats! You got the certificate");
    }, 1000)
}



// // enroll(progress);   // eivabe dile function body ta jabe, kaj ta hobe na

// enroll(progress);   // 

// progress(getCertificate);

// eivabe kaj hocche na tai amader 3 ta kaj korte hobe.


// enrollment ekta function nibe tai function akare anonymous function dibo, karon enrollment e parameter lagbe hishabe progress ke callback hishabe diyeci
// enrollment er parameter ta hocche progress parameter
// ei way te sorasori ekta function call hoye jacche na, enrollment sesh hobar pore progress function e dukbe,
// jokhon anonymous function ke call korbe tokhon indirectly progress function call hoye jabe

enroll(function() {
    progress(getCertificate)     // getCertificate e r callback function parameter hishabe nai tai ekhanei sesh.
});


//  je kaj ta pore korte hobe seta ke amra callback akare current function e pathiye dibo and sei function er moddhe 
//  asychronous ta hoye jabar por sei jaigai tai callback function call kore dibe, this is the process

//  Amader dorkar 1ta kaj sesh hobar por onno 1ta kaj ta suru hobe, tai first kaj tar parameter e second kaj ke callback akare diyeci
//  jodi sob kisu thik thake tahole next step er jonno callback function ke call korbe, r na hole korbe na


//  je kaj ta pore korte hobe seta aager(currunt) kaj er parameter hishabe pathaiye diye porer kaj ta korte pari


// callback tahole onnek gula kaj hole nested hoye jabe..

// // eita hocche callback hell

// enroll(function() {
//     progress(function() {
//         C(function() {
//             D(function() {
//                 E(function(){

//                 })
//             })
//         })
//     })
// })
 