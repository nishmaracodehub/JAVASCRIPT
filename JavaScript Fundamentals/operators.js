//Assignment =

//Arithmatic + - / * %

//Increment ++ ; Decrement --;
var a = 1;
//post increment
a++; //value in a gets incremented by 1. here ++ is performed after the variable is used
console.log(a++); //leads to output 2, cuz here initially a value is 2 (cuz of line 5). 
//++ operation is done and its result will be shown next time we use a, like below
console.log(a); //leads to output 3

//pre increment
++a;
//Here ++ operation is performed first and the result of that operation gets assigned to the variable which is using it.
console.log(a); //leads to ouput 4

//Same applies to post and pre decrement a-- and --a

//String operators '' +

//Precedence
let b = 1 + 2 * 3;
console.log(b); // leads to o/p 7.
b = (1 + 2) * 3;
console.log(b); //leads to o/p 9. cuz we used () which has higher precedence than *.

//Function invocation operator ()
console.log('');

//logical and:&& or:||

//Member access Operator . (dot)
console.log();

//code block operators { }

//Array element access operators []