//=====================  JavaScript Template Strings  ==============

/*
String Templates
Template Strings
Template Literals
Beloved child has many names

*/

/*
Back-Tics Syntax
Template Strings use back-ticks (``) rather than the quotes ("") to define a string


*/

let text1 = `Hello World`;
console.log(text1)


/*
Quotes Inside Strings
Template Strings allow both single and double quotes inside a string:

*/

let text2 = `He's often called "Johny"`;

console.log(text2);

/*
Multiline Strings
Template Strings allow multiline strings:

*/

let text3 = 
    `The quick
    brown fox
    jumps over
    the lazy dog`;
console.log(text3);


/* 
Interpolation
Template String provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

${...}

*/


/*
    Variable Substitutions
Template Strings allow variables in strings:

*/

let firstName = "John";
let lastName = "Doe";

let hisName = `Welcome ${firstName}, ${lastName}`;
console.log(hisName);



/*
Expression Substitution
Template Strings allow expressions in strings:

*/

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT).toFixed(2))}`;
console.log(total);





// Automatic replacing of variables with real values is called string interpolation.



//--------------  HTML Templates   ---------------


let header = "Template Stirngs";
let tags = ["template strings", "javascript", 'es6'];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags){
    html += `<li>${x}</li>`;
}

html = html + `</ul>`;

console.log(html);

/*<h2>Template Stirngs</h2>
<ul>
<li>template strings</li>
<li>javascript</li>
<li>es6</li>
</ul>
*/