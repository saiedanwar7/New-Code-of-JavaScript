/*


    Joke
There are only 10 types of people in the world: those who understand binary and those who don't.



        JavaScript Uses 32 bits Bitwise Operands
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.


The examples above uses 4 bits unsigned binary numbers. Because of this ~ 5 returns 10.

Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.

00000000000000000000000000000101 (5)

11111111111111111111111111111010 (~5 = -6)


A signed integer uses the leftmost bit as the minus sign.



Operator	Name	            Description

    &	    AND	                     Sets each bit to 1 if both bits are 1

    |	    OR	                     Sets each bit to 1 if one of two bits is 1

    ^	    XOR	                     Sets each bit to 1 if only one of two bits is 1

    ~	    NOT	                     Inverts all the bits

    <<	    Zero fill left shift     Shifts left by pushing zeros in from the right and let the leftmost bits fall off

    >>	    Signed right shift	     Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

    >>>	    Zero fill right shift    Shifts right by pushing zeros in from the left, and let the rightmost bits fall off



    JavaScript Bitwise AND
When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1

JavaScript Bitwise OR
When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1:

JavaScript Bitwise XOR
When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different


JavaScript Bitwise AND (&)
Bitwise AND returns 1 only if both bits are 1
*/


// je kono number ke binary te convert korar jonno toString() use korte pari

console.log((3).toString()); // convert to string
console.log((3).toString(2));  // toString er moddhe base ta bole dite pari - 11

// console.log(110 & 001);  // return 0


// 5 << 1	10	0101 << 1	 1010   - .00000000000001010



console.log((48).toString(2));          // Binary - 110000
console.log((0b110000).toString(10))    // Decimal - 48 



let x = 5 & 1;
console.log(x);  // 1

let y = 5 | 1;
console.log(y);   // 5

let h = 5 ^ 1;
console.log(h);  // 4

let n = ~5;
console.log(n);  // -6


/*
                                JavaScript (Sign Preserving) Bitwise Right Shift (>>)

    -   This is a sign preserving right shift. 
    -   Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off

*/

let ls = 5 << 1;
console.log(ls); // 10


/*
                                JavaScript (Sign Preserving) Bitwise Right Shift (>>)
                                
This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off
*/

let Rs = -5 >> 1;
console.log(Rs);  // -1


/*
                                JavaScript (Zero Fill) Right Shift (>>>)

This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off
*/

let Rs2 = 5 >>> 1;
console.log(Rs2);
