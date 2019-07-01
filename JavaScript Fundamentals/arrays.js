let a = [1, 2, 3, 4]; //array of number elements
let b = ['nom', 'bob', 'pop']; //array of string elements
let c = [2, 'nom', true]; //array of different datatype elements

//to access array elements we use index of array which starts from 0.
console.log(a[0]) //first element; leads to o/p 1.
console.log(a[2]); // third element; leads to o/p 3.
console.log(a.length); // gives the array length which is 4 (actual number not index)

//type of array
console.log(typeof a); //leads to o/p object, cuz array is an object type

//try to access an element which is not in an array gives undefined
console.log(a[6]); //leads to o/p undefined

//Array Methods
Array.push(element) // pushes an element to the end of the Array and returns the whole array
Array.prototype() // removes an element at the end of the Array and returns the element