//**********************************PROGRAM 1****************************

// function isEvenOrOdd(num)
// {
//     if(num % 2 == 0){
//         console.log("Number is Even");
//     }else{
//         console.log("Number is Odd");
//     }
// }

// isEvenOrOdd(3);

//**********************************PROGRAM 2****************************

//given number is a positive or negative number

// function isPosNeg(num){
//     if(num > 0){
//         console.log("Entered Number is Positive Number");
//     }else if(num < 0){
//         console.log("Entered Number is Negative Number");
//     }else{
//         console.log("Entered Number is Neither Positive or Negative Number");
//     }
// }

// isPosNeg(0);

//**********************************PROGRAM 3****************************

//Subtract Two Numbers without using Minus (-) operator

// function noSubtract(a,b){
//     var sub = a + (~b+1);
//     console.log(sub);
// }

// noSubtract(6,2);

//**********************************PROGRAM 4****************************

//Given N is Prime or Not

// function isPrime(num){
//     var count = 0;
//     for(var i=1; i<= num ; i++){
//         if(num % i == 0){
//             count += 1;
//         }

//     }

//     if(count > 2){
//         console.log("Entered Number is not a Prime Number")
//     }else{
//         console.log("Entered Number is a Prime Number");
//     }
// }

// isPrime(10);

//**********************************PROGRAM 5****************************

//Remainder of two numbers without using Modulus(%) operator

// function getRemainder(a,b)
// {
//     var quo = parseInt(a/b);
    
//     var remain = a - (quo * b);
//     console.log(remain);
// }

// getRemainder(26,5);

//**********************************PROGRAM 6 PART 1****************************

// Generate Even and Odd number less than N 

// function numRange(N){
//     var i = 1;
//     var j = 2;
//     while(i < N){
//         if(i % 2 != 0){
//             console.log("Odd Number " + "-" + i);
//             i += 2;
//             if( i >= N)
//             {
//                 console.log("*************");
//                 while (j < N){
//                     if( j % 2 == 0){
//                         console.log("Even Number " + "-" + j);
//                         j += 2;
//                     }
//                 }
//             }
//         }
//     }
    
// }

// numRange(15);

//**********************************PROGRAM 6 PART 2****************************

//Generate N Even and Odd Numbers

// function numRange(N){
//     var i = 1;
//     var j = 2;
//     var range = N * 2;
//     while(i < range){
//         if(i % 2 != 0){
//             console.log("Odd Number " + "-" + i);
//             i += 2;
//             if( i >= range)
//             {
//                 console.log("*************");
//                 while (j <= range){
//                     if( j % 2 == 0){
//                         console.log("Even Number " + "-" + j);
//                         j += 2;
//                     }
//                 }
//             }
//         }
//     }
    
// }

// numRange(1);

//**********************************PROGRAM 7 PART 1****************************

//Generate Prime Numbers less than N

// function isPrimeRange(num){
//     for(var i=1; i<= num ; i++)
//     {
//         var count = 0;
//         for( var j=1; j <=i; j++)
//         {
//             if( i % j == 0){
//                 count += 1;
//             }
//         }
//             if(count == 2){
//                 console.log("Prime Number " + " - " + i);
//             }
            
//         }

    
// }

// isPrimeRange(30);

//**********************************PROGRAM 7 PART 2****************************

//Generate N prime numbers in a given range

// function isPrimeRange(num){
//     var range =  num * num;
//     var loopcount = 0; 
//     for(var i=1; i<= range ; i++)
//     {
//         var count = 0;
//         for( var j=1; j <=i; j++)
//         {
//             if( i % j == 0){
//                 count += 1;
//             }
//         }

//     if(count == 2){
//         console.log("Prime Number " + " - " + i);
//         loopcount +=1;
//     }

//     if(loopcount == num) break;
            
//     }

    
// }

// isPrimeRange(15);

//**********************************PROGRAM 8****************************

//Print Numbers for multiplies of 3 print as "Fizz" and for mutiplies of 5 print as "Buzz"

function printNum(){
    for( var i = 1; i <= 100; i++){
        if(i % 3 != 0 && i % 5 != 0){
            console.log(i);
        }
        else if(i % 3 == 0 && i % 5 == 0){
            console.log("Fizz Buzz");
        }
        else if( i % 3 == 0){
            console.log("Fizz");
        }
        else{
            console.log("Buzz");
        }
        
    }
}
printNum();