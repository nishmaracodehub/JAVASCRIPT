// Write a program to find if a number is a Febonacci or not
// print febonacci series

// var febonacci = function(result,len){
//     var num1 = result[0],
//         num2 = result[1],
//         next,
//         cnt = 2;

//         while(cnt < len){
//             next = num1 + num2;
//             num1 = num2;
//             num2 = next;
//             result.push(next);
//             cnt++;
//         }
//         return result;
// }
// console.log(febonacci([5,10],10));

//Using Recursion

// function febonacci(result,len){
//     if(result.length>=len)
//         return result;
    
//     result.push(result[result.length-2] + result[result.length-1])

//     return febonacci(result,len);
// }

// console.log(febonacci([0,1],10));



//Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers using recursion.


//Write a program find GCD of the array elements given an array of numbers
// function findGcd(arr){
//     var values1 = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 2; j < arr[i];j++){
//             if(arr[i] % j == 0){
//                 values1.push(j);
//             }
//         }
//     }
//     return checkNumDuplicates(values1);
    
//             function checkNumDuplicates(arr1){     //function to find highest number which is repeating 3 times in an array
//                 var gcdNum = [];
//                 for(let k =0;k<arr1.length;k++){
//                     var cnt = 0;
//                     for(let l=0;l< arr1.length;l++){
//                         if(arr1[l]==arr1[k]){
//                             cnt+=1;
//                         }
//                     }
//                     if(cnt >=3){
//                         gcdNum.push(arr1[k]);
//                     }
//                 }
//                 return Math.max.apply("",gcdNum);
//             }
// }    
// console.log(findGcd([20,10,50,30]));

//Write a program given an array of ‘N’ numbers, find LCM of it.
// function findlcm(arr){
//     var values1 = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 2; j < arr[i];j++){
//             if(arr[i] % j == 0){
//                 values1.push(j);
//             }
//         }
//     }
//     return checkNumDuplicates(values1);
    
//             function checkNumDuplicates(arr1){     //function to find highest number which is repeating 3 times in an array
//                 var lcmNum = [];
//                 for(let k =0;k<arr1.length;k++){
//                     var cnt = 0;
//                     for(let l=0;l< arr1.length;l++){
//                         if(arr1[l]==arr1[k]){
//                             cnt+=1;
//                         }
//                     }
//                     if(cnt >= 3){
//                         lcmNum.push(arr1[k]);
//                     }
//                 }
//                 return Math.min.apply("",lcmNum);
//             }
// }    
// console.log(findlcm([20,10,50,30]));

//Remove Duplicates from an array using JavaScript

// arr = Array.from(new Set(arr));

//Write a program to find the Sum of Array Elements.

// function sumArray(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i ++){
//         sum = sum + arr[i];
//     }
//    // sum = arr.reduce((a,b) => a + b);
//     console.log(sum);
// }

// sumArray([1,2,3,4,5]);


//Write a program for swapping of two arrays elements




//Write a program to find the highest and the lowest number in array

// function checkArray(arr){
//     var sort = arr.slice().sort(function(a,b){ return a - b;});
//     console.log(sort);
//     var high = sort[sort.length-1];
//     var low = sort[0];
//     console.log("Highest Number in array is " + high);
//     console.log("Lowest Number in array is " + low);
// }

// checkArray([4,8,2,1,9])

//Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

var arr = [[1,2,3],[6.10,1],[5,8,7]];
var sum1 = 0, sum2 = 0;
for(var i = 0; i < arr.length;i++){
    for(var j = i; j <= i;j++){
        sum1 = sum1 + arr[i][j];
    }
}
for(var k = 0;k < arr.length;k++){
    for(var l = 2-k ;l>=2-k;l--){
        sum2 = sum2 + arr[k][j];
    }
}

console.log(abs(sum1-sum2));


//02, 11, 20