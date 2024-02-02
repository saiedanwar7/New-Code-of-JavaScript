

/*
    -   joto gula Promise function thakbe sekhane await use korbo
    -   resolve jodi value return kore thake setake await diye ekta variable er moddhe dorte hobe 
    -   je kaj gula error er moddhe hobe na..segulake try er moddhe rakhbo, that mean (then) gula ke
        try (then) success

    -   r error gula promise er moto catch e thakbe 

*/



//--------------------------- async_await -----------------------------


const paymentSuccess = true;
// const paymentSuccess = false;
const marks = 70;
// const marks = 90;


// enrollment
function enroll() {  
    console.log('Course enrollment is in progress.')


    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            } else {
                reject('Payment failed!')
            }
        }, 2000)
    })
    return promise;
}


// course progress
function progress() {
    console.log('Course on progress....');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve()
            } else {
                reject('You could not get enough marks to get the certificate')
            }
        }, 3000)

    });
    return promise;
}



// get Certificate 
function getCertificate() {
    console.log('Preparing your certificate!');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrats! You got the certificate")   // ekhane value ta pabo
        }, 1000)
    });
    return promise;
}


// enroll(function() {
//     progress(getCertificate)
// });

/*
    -   sob gula success serial e then er moddhe niye tarpor catch er moddhe error gula dorte parbo

*/



// joto gula Promise function thakbe sekhane await use korbo
// resolve jodi value return kore thake setake await diye ekta variable er moddhe dorte hobe dorte hobe
// je kaj gula error er moddhe hobe na..segulake try er moddhe rakhbo, that mean (then) gula ke
// try (then) 
// r error gula promise er moto catch e thakbe 


async function course() {
    try{
        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);

    } catch(err){
        console.log(err);
    }
}

course();

// enroll()
//     .then(progress)    // then ekta function body except kore
//     .then(getCertificate)
//     .then(function(value){     // getCertificate er resolve re value print kore
//         console.log(value)
//     })
//     .catch(function(err){   // reject er value print korbe
//         console.log(err)
//     })
   