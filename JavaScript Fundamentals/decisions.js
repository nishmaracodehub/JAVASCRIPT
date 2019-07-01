//if else statements

//simple if
// if (condition) { //here if condition is true then execute the if block else don't
//     console.log('execute me');
// }

// //if else
// if (condition) { //here if condition is true then execute the if block or execute the else block if its not true
//     console.log('execute me I\'m true'); //\ is a escape character we use it when we use ' in between '' or " in between "" to tell javascript expression is not ended yet.
// } else {
//     console.log('execute me false');
// }

// //nested if

// let count = 3;
// if (count == 4) {
//     console.log('count is 4');
// } else if (count > 4) {
//     console.log('count if greater than 4');
// } else if (count < 4) {
//     console.log('count is less than 4');
// } else {
//     console.log('count is not 4');
// }

//Switch

let me = 'which super hero you like most'; //promt popout an alert to user and asks the question and returns a string to me variable

switch (me) {
    case 'superman': //if the user enters superman then perform whatver is inside this case
        console.log("I'm super high bro");
        break; //breaks out of the switch statement
    case 'spiderman': //if the user enter spiderman then same here
        console.log("I'm all web bro");
        break;
    case 'batman':
        console.log("I'm rich bro");
        break;
    default: //if none of the given cases matches user's input then this default case
        console.log("Go Look into Mirror");
        break;
}

//if the user enters Superman instead of superman , then javascript executes default case as it is case sensitive
//so to ignore the case here we will make the user's input lowercase doesn't matter what he enters
// like this switch(me.toLowerCase()) ; toLowerCase() is a String method similarly we have toUpperCase() to convert a string to Uppercase

//Ternary Operator - a very conside inline decision statement

let a = 1,
    b = 1; //we can declare two variables at a time like this.

// let result = (a == b) /*condition*/ ? 'equal' /*if its true*/ : 'not equal' /*if its false*/ ;
// console.log(result); //O/p is equal

//let result = (a === b) /*condition*/ ? 'equal' /*if its true*/ : 'not equal' /*if its false*/ ;
//console.log(result); //O/p is not equal

// == and === are not same
// == ignores the type of variables and checks if they are same
//whereas === checks the type as well

//using != operator
//let result = (a != b) /*condition*/ ? ' not equal' /*if its true*/ : 'equal' /*if its false*/ ;
//console.log(result); //O/p is equal

//using !== operator
//let result = (a != b) /*condition*/ ? ' not equal' /*if its true*/ : 'equal' /*if its false*/ ;
//console.log(result); //O/p is not equal