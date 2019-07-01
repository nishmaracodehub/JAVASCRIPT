//Program to findout if a number is a Armstrong number / Narcissistic Number/ Plus Perfect Number / PPDI
var plusPerfectNum = function (num){
    
    var arr = Array.from(String(num), Number); //  num.toString().split("").map(Number);
    var res = 0;
    for(let i = 0; i < arr.length; i ++){
        res = res + Math.pow(arr[i],arr.length);
    }
    console.log(res);
    if(res == num){
        return "Number is Plus Perfect Number"
    }
    else{
        return "Not a Plus Perfect Number";
    }
};

console.log(plusPerfectNum(121));