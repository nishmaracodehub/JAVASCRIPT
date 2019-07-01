// function howManyRepeated(str){
//     const result = [];
//     const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
//     console.log(strArr);
//     if (strArr != null) {
//       strArr.forEach((elem) => {
//         result.push(elem[0]);
//       });
//     }
//     return result;
//   }

//   console.log(...howManyRepeated('aaabcdefee'));