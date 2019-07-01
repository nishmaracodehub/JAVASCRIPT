//Convert a non­negative integer to its english words Sample input : 22; Output : Twenty Two*

let numberToWord = function(num){
    //create an object of numbers and its word coversion values
    const obj = {
        1 : 'One',
        2 : 'Two',
        3 : 'Three',
        4 : 'Four',
        5 : 'Five',
        6 : 'Six',
        7 : 'Seven',
        8 : 'Eight',
        9 : 'Nine',
        20 : 'Twenty',
        30 : 'Thirty',
        40 : 'Fourty',
        50 : 'Fifty',
        60 : 'Sixty',
        70 : 'Seventy',
        80 : 'Eighty',
        90 : 'Ninety',
        100 : 'Hundred',
        1000 : 'Thousand'
    }

    //convert num to string and declare an array to store the final result
    let s = "",arr=[];
    s = s + num;
    //loop through the string to compute each digit
    for(let i = 0; i < s.length;i++){

        // find place value of each digit
        let n = 0 , place = 0;
        place = Math.pow(10,s.length-1-i);

        //get the value which to be compared with obj property to get its respective word representation
        n = s[i] * place;

        //if the place value is more than 10 then compare first digit of n by dividing it with place followed by the comparison of place value as well
        if(place > 10){
            arr.push(obj[n/place]) + arr.push(obj[place]);
        }else{
            arr.push(obj[n]);
        }
    }
    //join the final array result adding spaces in between them
    console.log(arr.join(" "));
}

numberToWord(1988);