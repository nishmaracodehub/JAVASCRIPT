// print febonacci series

var febonacci = function(result,len){
    var num1 = result[0],
        num2 = result[1],
        next,
        cnt = 2;

        while(cnt < len){
            next = num1 + num2;
            num1 = num2;
            num2 = next;
            result.push(next);
            cnt++;
        }
        return result;
}
console.log(febonacci([5,10],10));

//Using Recursion

function febonacci(result,len){
    if(result.length>=len)
        return result;
    
    result.push(result[result.length-2] + result[result.length-1])

    return febonacci(result,len);
}
console.log(febonacci([0,1],10));