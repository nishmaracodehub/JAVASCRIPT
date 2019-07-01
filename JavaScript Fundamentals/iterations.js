//while
while (true) {
    //do something
    break; //breaks the infinite loop cuz loop keep executing as long as its true
}

//do while

do {
    //do something
    break; //breaks the infinite loop cuz loop keep executing as long as its true
} while (true);

//for 
for (let i = 0; i < 10; i++) { //initialization conditioncheck incrementing all done at one
    //do something
}

// //for each
// //For-Each Loop is another form of for loop used to traverse the array. for-each loop reduces the code significantly and there is no use of the index or rather the counter in the loop.
// //array.forEach(function(currentValue, index, arr), thisValue)

let arr = [1, 2, 3, 4];
arr.forEach(function element(e) {
    console.log(e);
}); //prints o/p 1 2 3 4

//for in

// for (var in object) {
//     code block to be executed
//   }

function myFunction() {
    var person = {
        fname: "John",
        lname: "Doe",
        age: 25
    };

    var text = "";
    var x;
    for (x in person) {
        text += person[x] + " ";
    }
    return text;
} //gives output John Doe 25