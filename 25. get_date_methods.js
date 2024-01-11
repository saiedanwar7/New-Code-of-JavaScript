/*================= JavaScript Get Date Methods =================



Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)



*/

/*
The new Date() Constructor
In JavaScript, date objects are created with new Date().

new Date() returns a date object with the current date and time.

*/

const date = new Date();
console.log(date); 


/*
The getFullYear() Method
The getFullYear() method returns the year of a date as a four digit number:

*/


console.log(date.getFullYear());  // 2024


/*
The getMonth() Method
The getMonth() method returns the month of a date as a number (0-11).

Note
In JavaScript, January is month number 0, February is number 1, ...

Finally, December is month number 11.

*/

console.log(date.getMonth()) // 0 junary

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date()
let current_months = months[d.getMonth()];

console.log(current_months); // "January"


/*
The getDate() Method
The getDate() method returns the day of a date as a number (1-31):

*/

console.log(d.getDate()); //


/*
The getHours() Method
The getHours() method returns the hours of a date as a number (0-23):

*/

console.log(d.getHours())  // 