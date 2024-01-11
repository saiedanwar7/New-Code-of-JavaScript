/* ===================== JavaScript Date Objects ====================


*/

const d = new Date();

console.log(typeof d); // object
console.log(d);    // Mon Jan 08 2024 14:07:54 GMT+0600 (Bangladesh Standard Time)

/*
By default, JavaScript will use the browser's time zone and display a date as a full text string:

*/

/*
Creating Date Objects
Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:


new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

*/


/*
new Date(year, month, ...)
new Date(year, month, ...) creates a date object with a specified date and time.

    -   7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
    -   JavaScript counts months from 0 to 11:
    -   January = 0.
    -   December = 11.

6 numbers specify year, month, day, hour, minute, second
5 numbers specify year, month, day, hour, and minute
4 numbers specify year, month, day, and hour
3 numbers specify year, month, and day
2 numbers specify year and month

note : You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

*/


let Date1 = new Date(2020, 11, 24, 10, 30, 4, 0);
console.log(Date1);


// 6 numbers specify year, month, day, hour, minute, second:

const today_date = new Date(2024, 0, 8, 2, 37, 30);

console.log(today_date);



// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

const millisecond_value = new Date(2024);
console.log(millisecond_value);


/*
JavaScript Stores Dates as Milliseconds
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

Now the time is: 1704701274747 milliseconds past January 01, 1970



*/


/*
Date Methods
When a date object is created, a number of methods allow you to operate on it.

Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

*/

/*
Displaying Dates
JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification

*/

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

const date_to_string = new Date();
console.log(date_to_string.toString());  // Mon Jan 08 2024 14:44:08 GMT+0600 (Bangladesh Standard Time)
