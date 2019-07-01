// //global scope
// let a = 1

// function scopeCheck1() {
//     console.log(a);
// }

// scopeCheck1(); //prints a value which is 1 since a is global

// //local scope

// function scopeCheck2() {
//     let a = 2 //a is local here
//     console.log(a);
// }
// scopeCheck2(); //prints a value which is 2 since a is local

//a variable declared inside the block is not accesseble outside of that block

// function scopeCheck2() {
//     let a = 2 //a is local here

// }
// console.log(a); //prints a is not defined cuz a is local to scopeCheck2

let a = 1; // a is global here
console.log(`a of gloabl: ${a}`);

function scopeCheck3() {
    let a = 2 //a is local to function here but global to blocks created inside it
    console.log(`a of function: ${a}`);
    if (true) {
        let a = 3;
        console.log(`a of if: ${a}`);
    }
}
scopeCheck3();
console.log(`a of global: ${a}`);