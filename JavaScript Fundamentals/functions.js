//function declarations

// function greet(name) { //function declaration starts with function keyword followed by function name (greet in this ex)with paranthesis() in which we can have arguments that are used for something to do inside the function

//     console.log(` Hello ${name}`);

// }

// //for calling this function we invoke it.
// greet('World'); //prints Hello World,
// greet('Bob'); //prints Hello Bob
// greet(); //prints Hello undefined since we havn't passed anything

// //when we are creating a functionwithvalue like function name(val){...} , val is argument
// //when we are invoking a functionwithvalue like funcname(val), val is a parameter

// //function expressions; declaring a variable and assinging a function to it.
// let add = function (a, b) {
//     console.log(a + b);
// }

// //so invoke this function
// add(2, 3); // which gives 5 as o/p.

// //execute a function after certain time. this can be done using setTimeout(fun,time);
// setTimeout(function printAfter() {
//     console.log('Print After 6seconds');
// }, 6000); //gives o/p wait for 6seconds after 6secs.Here basically you have given a function(printAfter) as an argument to another function(setTimeout)

// //function inside the same function with a counter
// let counter = 0

// function timeout() {
//     setTimeout(function print() {
//         console.log(`Tick Tok ${counter++}`);
//         timeout(); //here I'm invoking this function again
//     }, 2000)
// }

//timeout(); // Invoking this function gives o/p as below
/* Tick Tok 1
   Tick Tok 2
   Tick Tok 3 goes on untill I press cntl+C */

//Immediate Invoked Function Expressions IIFE

// A function which is self invoked 

// (function () {
//     console.log("I'm self invoked");
// })(); // leads to O/p I'm self invoked

/* Simply add a function inbetween () and invoke it by adding () immediately after it */

//Returning Functions

function one() {
    console.log("I'm function one");
    return function () {
        console.log("I'm function two");
        return function () {
            console.log('I\'m function three');
        }
    }
}

let myFunction = one();

myFunction;
console.log('***');
myFunction();
console.log('***');
myFunction()();