//Printing an Output

let x = 3,
    y = 4;

let z = x + y;
//Using Template literals instead of using '+' for concatination
console.log(`Answer is ${z}`);

//Variables
//declaration
let x;
//definition
x = 6;
//initialization
let x = 6;

//let features
//You cannot declare a variable more than once
let x;
let x; //leads to O/p identifier x is already declared

//But you can define a variable more than once
let y = 6;
y = 5;
console.log(y); //leads to o/p 5

//Const Features
//you cannot declare without defining it
const z; //leads to ouput Missing initializer in const declaration

//Proper way to declare a const
const z = 4;

//you cannot define const more than once
z = 6; //leads to o/p assignment to a const variable

/*Multiline comments
variable names cannot have any special characters except _ or $
variable cannot have a name matching with any keyword like declare break continue
use meaningful descriptive names for variables like num for a number str for a string arr for an array...
javascript is case Sensitive use x and X are different
maintain camelCasing for names,like firstName, lastName etc*/