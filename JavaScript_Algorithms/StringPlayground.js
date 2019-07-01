// Statement: Input -> string.
// 1.Input is a string of lowercase english alphabets.
// 2.You need to compress the string with the following rules:
// a.Convert the first letter to the uppercase
// b.Convert the substring consisting of all the consonants to the length of this substring(e.g. abcde to a3e).
// c.Remove the consecutive duplicate vowels (e.g. aaaeiia to aeia)
// d.First letter will not follow the rules b and c

// Sample Input : aaabcdefee
// Sample Output: Aa3e1e

function stringManipulation(str){
    //converting the first letter in the input string to UpperCase
    var s = str[0].toUpperCase() + str.substring(1);

    //Removing the consecutive duplicate vowels
    s1 = s.match(/(.)\1+/g);
    for(var j = 0; j < s1.length; j ++){
        s = s.replace(s1[j],s1[j][0])
    }

    //coverting the substring consisting of consonants to the length of that substring
    var s2 = s.match(/[^aeiouA-Z]+/g);
    for(var k = 0; k < s2.length;k++){
        s = s.replace(s2[k],s2[k].length);
    }

    console.log(s);
}

stringManipulation('aaabcdefee');