// Given an array of non­negative integers,arrange them such that they form the largest number.
// Sample input:[3, 30, 34, 5, 9], Output number is 9543330.

let largestNumber = function(arr){
    var s = "", lnum = [];
    //loop through array and assign the values to a string
    for(let i=0;i<arr.length;i++){
        s += arr[i];
    }
    //split the string, sort the elements, reverse and join the elements to get the final result
    s= s.split("").sort().reverse().join("");
    console.log(s);  
}

largestNumber([3,40,38,5,9,10,12,85,45,29]);