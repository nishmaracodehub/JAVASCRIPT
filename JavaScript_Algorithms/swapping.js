//Method 1:

// var swap = function (a,b){
//     //Before swapping
//     console.log("a is " + a + " " + "b is " + b);
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log("a is " + a);
//     console.log("b is " + b);
// }

//method 2:

    // var swap = function (a,b){
    //     //Before swapping
    //     console.log("a is " + a + " " + "b is " + b);
    //     a = a * b;
    //     b = a / b;
    //     a = a / b;
    
    //     console.log("a is " + a);
    //     console.log("b is " + b);
    // }

//method 3:
    // var swap = function (a,b){
    // Before swapping
    // console.log("a is " + a + " " + "b is " + b);
    //     a = a ^ b;
    //     b = a ^ b;
    //     a = a ^ b;
    // After swapping
    //     console.log("a is " + a);
    //     console.log("b is " + b);
    // }

//method 4:
// var swap = function (a,b){
//     Before swapping
//     console.log("a is " + a + " " + "b is " + b);
//         a = ~(a ^ b);
//         b = ~(a ^ b);
//         a = ~(a ^ b);
//      After swapping
//         console.log("a is " + a);
//         console.log("b is " + b);
//     }

//method 5:

//     var swap = function (a,b){
//         var arr = [];
//         arr.push(a,b);
//         //before swapping
//         console.log(arr);
//         //after swapping
//         arr[1] = [arr[0], arr[0] = arr[1]][0];
//         console.log(arr);
//     }
// swap("hacking","school");

// var a = "hacking", b = "school";
// b = [a, a = b][0];
// console.log(a,b);

