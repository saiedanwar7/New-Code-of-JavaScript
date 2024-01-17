let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const obj = JSON.parse(text);


console.log(obj);   // return valid object
console.log(text);  // return text format

// now we can able to access object properties
console.log(obj.employees[0].firstName);   // John



// We can create json formate from javaScript object
// Convert a JavaScript object into a string with JSON.stringify().


const person = {
    firstName: "Saied",
    lastName: "Anwar"
};

console.log(JSON.stringify(person));  // return json text format