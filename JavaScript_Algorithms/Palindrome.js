function chkPalindrome(s) {
    let letters = [];
    var rword = "";
    for (let i = 0; i < s.length; i++) {
        letters.push(s[i]);
    }

    for (let j = 0; j < s.length; j++) {
        rword += letters.pop();
    }

    if (s == rword) {
        console.log("Input string is a Palindrome");
    } else {
        console.log("Input string is not a Palindrome");
    }

}

chkPalindrome('racecar');