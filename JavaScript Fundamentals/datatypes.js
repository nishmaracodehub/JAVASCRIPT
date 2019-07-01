let x = 7;
console.log(typeof x); //number datatype

let y = 'name';
console.log(typeof y); //string datatype

let z = true;
console.log(typeof z); //boolean datatype

let a;
console.log(a); //undefined since its not defined
console.log(typeof a); //undefined datatype

let b = '';
let c = null;
let d = undefined;
console.log(typeof b); //string datatype
console.log(typeof c); //object datatype (non primitive)
console.log(typeof d); //undefined

//empty string is not equal to null. This will lead to o/p false
if (b == c)
    console.log(true);
else
    console.log(false);
//undefined can be a value and type. Both are different. This will lead to o/p false
if (undefined == typeof (undefined))
    console.log(true);
else
    console.log(false);
console.log(typeof undefined); //lead to o/p undefined