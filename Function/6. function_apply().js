/*
    ======================= JavaScript Function apply() ====================

    Method Reuse
    
    With the apply() method, you can write a method that can be used on different objects.

*/

/*
    -------------------------   The JavaScript apply() Method   --------------------

    The apply() method is similar to the call() method (previous chapter).

    In this example the fullName method of person is applied on person1:

*/

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Saied",
    lastName: "Anwar"
}

console.log(person.fullName.apply(person1));   // Saied Anwar


/*
    ----------  The Difference Between call() and apply() -----------

    The difference is:

        The call() method takes arguments separately.

        The apply() method takes arguments as an array.

        - The apply() method is very handy if you want to use an array instead of an argument list.  
        - Arguments hishabe jodi array list pathate chai tahole apply method use kora easy hobe

*/

/*
    ----------- The apply() Method with Arguments --------------
    
    -   The apply() method accepts arguments in an array:

*/

const newPerson = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + "," + country; 
    }
}

const newMan = {
    firstName: "Saied",
    lastName: "Anwar"
}

const myName = newPerson.fullName.apply(newMan, ["Feni", "Bangladesh"]);
console.log(myName);  // Saied Anwar, Feni,Bangladesh

/*
    ----------------------- Simulate a Max Method on Arrays ------------------

    You can find the largest number (in a list of numbers) using the Math.max() method:

*/
const maxValue = Math.max(1,2,3);  // Will return 3
console.log(maxValue); //3


// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

const use_apply_on_max = Math.max.apply(null, [1,2,3]);
console.log(use_apply_on_max); //3


/*
The first argument (null) does not matter. It is not used in this example.

These examples will give the same result:

*/

Math.max.apply(Math, [1,2,3]); // Will also return 3
Math.max.apply(" ", [1,2,3]); // Will also return 3
Math.max.apply(0, [1,2,3]); // Will also return 3

/*
    --------------- JavaScript Strict Mode  ----------------
    In JavaScript strict mode, if the first argument of the apply() method is not an object, 
    it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.

*/