/* ================  JavaScript Break and Continue ===============

    -   The break statement "jumps out" of a loop
    -   The continue statement "jumps over" one iteration in the loop


*/

/*
        The Break Statement

        It was used to "jump out" of a switch() statement.

The break statement can also be used to jump out of a loop

*/

//  the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.

let text = ""

for(let i = 1; i < 10; i++){
   
    if(i === 3) {break; }  // i er value 3 step porjonto gele loop theke ber hoye jabe
    console.log(i); // 1, 2
    text = " The number is: " + i;
    console.log(text);
}

/*
        ---------------- The Continue Statement -----------------

    -   The continue statement breaks one iteration (in the loop)
    -   if a specified condition occurs, and continues with the next iteration in the loop


*/

let text1 = "";

for (let i = 0; i < 10; i++){
    if(i === 3) {continue; }
    console.log(i);  // 0, 1, 2, 4, 5, 6, 7, 8, 9
    text1 = " The number is : " + i;
    console.log(text1);
}


/*

JavaScript Labels
        To label JavaScript statements you precede the statements with a label name and a colon

        label:
        statement


        The continue statement (with or without a label reference) can only be used to skip one loop iteration.

        The break statement, without a label reference, can only be used to jump out of a loop or a switch.

        With a label reference, the break statement can be used to jump out of any code block:


*/

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
console.log(text)