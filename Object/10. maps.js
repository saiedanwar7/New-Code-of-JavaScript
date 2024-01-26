
/*
    -   Map and Object are similar just one differents here:

    -   Map hold key, value pair, map can hold any datatype
    -   Ojbect er key alwayes string hoy

    -   map has order, object not

    -   map are iterable

*/


//------------------ Object ------------------

// key - string

const person = {
    firstName : 'Saied',
    lastName : 'Anwar'
};

console.log(person.firstName);  // Saied
console.log(person['firstName']);  //Access by Array -  Saied