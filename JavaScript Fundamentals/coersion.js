let a = 4;
let b = '5';
let z = a + b;
console.log(`Answer is ${z}`); //leads to o/p 45 cuz + will concatenate converting x to string

//for converting a string to int use parseInt

b = parseInt(b, 10); //base 10 (decimal system)
z = a + b;
console.log(`Answer is ${z}`); //leads to output 9.

//But we can do this conversion only when a number is in string.See below
b = 'bob';
b = parseInt(b, 10);
z = a + b;
console.log(`Answer is ${z}`); //leads to output NaN(Not a Number)

//so you cannot convert 'bob' to number but you can add 'bob' to number(it concatinates)
//+ acts as concatenation not addition operator Both are different.simply said you cannot perform arithmatic operations here
z = b * a;
console.log(z); //leads to NaN