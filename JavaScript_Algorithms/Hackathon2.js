// Statement:​​ Input -> Any string.
// 1.Check the string availability in the given array.
// 2.Ifthestringfound,copytheremainingelementsinthefound nested array and save into new array.
// 3.RemovethelastcharacterintheinputstringandCheckthe newly formed string availability in the given array.
// 4.Repeattheprocessuntilthenewarraylengthisgreaterthan >=3 (Three).
// 5.Remove duplicate elements in the newly formed array.
// 6.Stoptheprocessifnomorecharabreak;cterstoberemovedinstring.

array =[['A',9],['B',7],['C',1],['AB',10,11],['AC',9,9999],['BA',5,6,7],['BC',6,6],['CA',5,6,7],
        ['CB',2,1],['ABC',10,11],['ACB',9,9,9],['BAC',4,4,5,5],['BCA',5,5,5,6],['CAB',1,2,1,2],['CBA',2]];
var newArr = []; //declaring a new array for storing the result

function findString(s){
    //Since given array is a two dimensional array we create loop in a loop for the string comparison
    for(let i = 0; i < array.length;i++){

        for(let j = 0; j < array[i].length;j++){

            if(array[i][j].toUpperCase() == s){
                
                //when the string matches remaining elements in the found array are pushed to new array
                for(let k = 1; k < this.array[i].length;k++){
                   newArr.push(array[i][k]);
                }
                
                //removing the last character in the given string
                var newstr = s.substring(0,s.length-1);

                //checking if the new string length is 0, if 0 then print the new unique Array else repeat the above procedure until the string length becomes 0.
                if(newstr.length == 0){
                    return Array.from(new Set(newArr));
                }
                else{
                    return findString(newstr); // recursive function call
                }
            }
        }
    }
}

console.log(findString('ABBK'));