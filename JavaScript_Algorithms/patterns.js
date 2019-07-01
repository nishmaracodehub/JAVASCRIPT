/*12345
  1234
  123
  12
  1
*/

// for(var i = 5; i > 0; i --){
//         count = "";
//         for(var j = 1; j <= i; j++){
//                 count = count + j;
//         }
//         console.log(count);
// }

//************************************* */
/*1
  12
  123
  1234
  12345
*/

// for( var i = 1; i <= 5; i ++){
//         count = "";
//         for(var j = 1; j<=i; j++){
//                 count = count + j;
//         }
//         console.log(count);
// }

//************************************************ */
/*5
  54
  543
  5432
  54321
*/

// for (i = 5; i >= 1; i--){
//         count = "";
//         for(j = 5;j>=i;j--){
//                 count = count + j;
//         }
//         console.log(count);
// }

//************************************* */

/*12345
  2345
  345
  45
  5
*/

// for(var i = 1; i<=5;i++){
//         var count = "";
//         var k = i;
//         for(j = 5; j>=i; j--){
//          count = count + k;
//          k = k + 1;
//         }
//         console.log(count);

// }
//************************************************* */
/*54321
  4321
  321
  21
  1
*/

// for(var i = 5; i >= 1; i --){
//         count = "";
//         var k = i;
//         for(var j = 1; j <= i; j++){
//                 count = count + k;
//                 k = k -1;
//         }
//         console.log(count);
// }

/*54321
  5432
  543
  54
  5
*/

// for(var i = 1; i <= 5; i ++){
//         count = "";
//         for(var j = 5; j >= i; j--){
//                 count = count + j;
//         }
//         console.log(count);
// }

// function print(n){
//         var star = "*";
        
//         for(var i = 1; i <= n;i++){
//                 var count = "";
//                 for(var j=1;j<=i;j++){
//                         count = count + star;

//                 }
//         console.log(count);
//         }
// }
// print(5);

// print prime numbers from the array

// function nPrime(arr){
//         for(var i = 0; i < arr.length-1; i++){
//                 var count = 0;
//                 for(var j = 1; j <= i+1; j++){
//                         if(arr[i] % j == 0){
//                                 count += 1;
//                         }
//                 }
                
//                 if(count < 3){
//                         console.log(arr[i]);
//                 }
                
//         }
// }


// nPrime([1,2,3,4,5,6,7,8,9,10]);

/*12344321
  123**321
  12****21
  1******1
*/

// for(var i = 5; i> 1; i--){
//   var count = "", star = "*";
//   for(var j = 1; j<=i;j++){
//     if(j<i){
//       count = count + j;
//     }else{
//       for(var k = 5; k > j; k --){
//         count = count + star;
//       }
//       count = count + count.split("").reverse().join("");
//     }
//   }
//   console.log(count);
// }

/*  1
  2 3 4
5 6 7 8 9
*/
// var num = 0;
// for(var i = 4; i > 1; i--){
//   var count = "";
//   for(var j = 1; j < i-1; j++){
//     count = count + " ";
//   }
//   for(var k = 2*i; k < 9; k ++){
//     num = num + 1;
//     count = count + num;
//   }
//   console.log(count);
// }
//************************************************************************************************ */

//Have to Work on this problem ...Not yet finished....
// var num = 84;
// for( var i = 1; i <=4; i ++){
//   var count = "";
//   for (var j = 1; j <=4; j++){
//     num = num + 1;
//     count = count + num + " ";
//   }
//   console.log(count);
// }

// var num1 = 84;
// for(var i = 1; i<=4;i++){
//   var count = "";
//   if(i==1){
//     for (var j = 1; j<=4;j++){
//       num1 = num1 + 1;
//       count = count + " " + num1;
//    }
//   }
//   if(i==2){
//     var num2 = 96;
//     for(var j = 1;j<4;j++){
//       count = count + " " + num2;
//     }
//     num1 = num1 + 1;
//     count = count + " " + num1;
//   }
//   if(i==3){
//     for(var j = 1;j<4;j++){
//       count = count + " "+ " "+ " ";
//     }
//     num1 = num1 + 1;
//     count = count + " " + num1;
//   }
//   if(i==4){
//     for(var j = 1;j<4;j++){
//       count = count + " "+ " "+ " ";
//     }
//     num1 = num1 + 1;
//     count = count + " " + num1;
//   }
  
//    console.log(count);

//   }


// var num = 96;
// for( var i = 1; i <=2; i ++){
//   var count = "";
//   for (var j = 1; j <=2; j++){
//     num = num + 1;
//     count = count +  " " +num;
//   }
//   if(i==2){
//     count = count.split(" ").reverse().join(" ");
//   }
//   console.log(count);
// }

//*********************************************************************************** */

/*11111
  2222
  333
  22
  1
*/
// var num = 2;
// for(var i = 1; i <=5; i ++){
//   var count = "";
//   if(i<4){
//     for(var j = 5; j>=i;j--){
//       count = count + i;
//     }
//   }
//   else{
//     for(var j = 5; j>=i;j--){
//       count = count + num;
//     }
//     num = num - 1;
//   }
//   console.log(count);
// }


/*5432*
  543*1
  54*21
  5*321
  *4321
*/

// for(var i = 1; i <=5; i++){
//   var count= "";
//   for(var j=5;j>=1;j--){
//     if(j!=i){
//       count = count + j;
//     }
//     else{
//       count = count + "*";
//     }
//   }
//   console.log(count);
// }

/*1
  21
  321
  4321
  54321
*/

// for(var i = 1; i<=5;i++){
//   var count = "";
//   for(var j = 1;j<=i;j++){
//     count = count + j;
//   }
//   count = count.split("").reverse().join("");
//   console.log(count);
// }

/*5
  54
  543
  5432
  54321
*/

// for(var i = 5; i >= 1; i--){
//   var count = "";
//   for(var j = 5; j>= i; j--){
//     count = count + j;
//   }
//   console.log(count);
// }

/*1
  22
  333
  4444
  55555
*/

// for(var i= 1;i<=5;i++){
//   var count = "";
//   for(var j = 1; j<=i; j++){
//     count = count + i;
//   }
//   console.log(count);
// }

/*5
  44
  333
  2222
  11111
*/

// for(var i = 5; i>=1;i--){
//   var count = "";
//   for(var j = 5; j>=i;j--){
//     count = count + i;
//   }
//   console.log(count);
// }

/*55555
  4444
  333
  22
  1
*/

for(var i = 5; i >=1; i--){
  var count = "";
  for(var j = 1; j<=i;j++){
    count = count + i;
  }
  console.log(count);
}

/*11111
  2222
  333
  44
  5
*/

for(var i = 1; i<=5;i++){
  var count = "";
  for(var j = 5; j>=i;j--){
    count = count + i;
  }
  console.log(count);
}